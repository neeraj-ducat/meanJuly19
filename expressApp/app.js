// express is imported
const express = require('express');
// express app object is created
const app = express();
// body-parser is imported.
const bodyParser = require('body-parser');
// bodyParser is registered to process json body
app.use(bodyParser.json());
/*middleware is defined
const myMiddleware =function(req, res, next) {
    console.log('myMiddleware is invoked.');
    req.body={user: 'Neeraj'};
    next(); // next handler is invoked.
}
//middleware is registered with the app
app.use(myMiddleware);
*/

// Application routes are defind.
app.get('/users',(req,res)=>{
    console.log('Hello ',req.query['name']);
    res.json({message: 'It is an express app.'});
});
app.post('/users',(req,res)=>{
    console.log('body is ',req.body);
    res.json(req.body);
});
// web server is started on port 3000
app.listen(3000,()=>{
    console.log('server is started on port 3000');
});