import express from 'express';
import Model from './eventModel.js';
const router = express.Router();

//CRUD = Create, Read, Update and Delete
//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get("/", (req, res) => {
    res.send("U R connected to the dataserver");
});
  
//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by E-Mail Method
router.get('/getOne/:email', async (req, res) => {
    try {
        const data = await Model.findByEmail(req.params.email);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by E-Mail Method
router.patch('/update/:email', async (req, res) => {
    try {
        const id = req.params.email;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByEmailAndUpdate(
            email, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by Email Method
router.delete('/delete/:email', async (req, res) => {
    try {
        const id = req.params.email;
        const data = await Model.findByEmailAndDelete(id)
        res.send(`Document with ${data.email} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//module.exports = router;
export default router;