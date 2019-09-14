// express is imported
const express = require('express');
// express app object is created
const app = express();
// body-parser middleware is imported.
const bodyParser = require('body-parser');
// cors middleware is imported
const cors = require('cors');
// bodyParser is registered to process json body
app.use(bodyParser.json());
// cors is registered to process json body
app.use(cors());
// mongoose is imported.
const mongoose = require('mongoose');
// mongoose is connected to the database.
mongoose.connect('mongodb://localhost:27017/ducat');
//  Model is created for emp collection
const Emp = mongoose.model('emps',{
    name: String,
    job: String,
    salary: Number
  });
// ObjectId class is imported to execute queries on id
const ObjectId = mongoose.Types.ObjectId;

// Application routes are defind.

// To fetch all emp
app.get('/emps',(req,res)=>{
    console.log("fetching emp...")
    Emp.find().then(result=>{
        console.log(result+' is feteched.');
        res.json(result);
    });
    
});
// To save an emp
app.post('/emps',(req,res)=>{
    let emp = new Emp(req.body);
    console.log('saving ',emp);
    emp.save().then(() => {
        res.json({'status':'successfully saved'});
    });
});

// To update an emp
app.put('/emps',(req, res) => {
    const emp = req.body;
    const id = emp._id;
    console.log('criteria is: ',id);
    Emp.updateOne({_id: new ObjectId(id)},{$set: {name: emp.name, job: emp.job, salary: emp.salary}}).then(()=>{
		res.json({"status":"successfully updated."});
		});
});

// To delete an emp
app.delete('/emps/:id',(req, res) => {
    const id = req.params['id']
    console.log('criteria is: ',id);
    Emp.remove({_id: new ObjectId(id)}).then(()=>{
		res.json({"status":"successfully deleted."});
		});
});
// web server is started on port 3000
app.listen(3000,()=>{
    console.log('server is started on port 3000');
});