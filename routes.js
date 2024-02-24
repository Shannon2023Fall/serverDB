//Perform CRUD operations on MongoDB database
import express from 'express';
import Model from './eventModel.js';
//Call Router function from express package
const router = express.Router();

//CRUD = Create, Read, Update and Delete
//Create / Post method
router.post('/post', async (req, res) => {
    const {email, gernder, age, year, month, day} = req.body;

    try {
        const newEvent = new Model({email, gernder, age, year, month, day});
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Welcome message
router.get("/", (req, res) => {
    res.send("U R connected to the dataserver");
});
  
//Read / Get all method
router.get('/getAll', async (req, res) => {
    try {
        const allData = await Model.find();
        res.json(allData);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Read / Get by Email method
router.get('/getOne/:email', async (req, res) => {
    const email = req.params.email;

    try {
        const data = await Model.findOne({email});
        if(!data){
            return res.status(404).json({message: 'Event not found'});
        }
        res.json(data);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Update / Patch by Email method
router.patch('/update/:email', async (req, res) => {
    const email = req.params.email;
    const newEvent = req.body;

    try {
        const updatedEvent = await Model.findOneAndUpdate({email}, newEvent, {new: true});
        res.json(updatedEvent);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Delete by Email method
router.delete('/delete/:email', async (req, res) => {
    const email = req.params.email;

    try {
        const deletedEvent = await Model.findOneAndDelete({email});
        res.json(deletedEvent);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//module.exports = router;
export default router;
