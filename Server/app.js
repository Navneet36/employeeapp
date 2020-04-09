const express = require('express')
const app= express()
const bodyParser = require ('body-parser')
const mongoose=require('mongoose')
require('./employee')
app.use(bodyParser.json())

const Employee=mongoose.model("employee")
const mongouri ="mongodb+srv://navneet:BpDzuqfDLYw6EhQV@cluster0-kdikb.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongouri,{
	useNewUrlParser:true,
	useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
	console.log("Connected to mongo")
})
mongoose.connection.on('error',(err)=>{
console.log("qqqqqqqqqqwwwwww")
	console.log("error",err)
})

app.get('/', (req, res) => {
	Employee.find({})
		.then(data => {
			console.log(data)
			res.send(data)
		})
		.catch(err => {
			console.log(err)
		})
})
app.post('/send-data',(req,res)=>{
	const employee=new Employee({
		name:req.body.name,
		email:req.body.email,
		phone:req.body.phone,
		salary:req.body.salary,
		position:req.body.position,
		picture: req.body.picture
	})
	employee.save()
	.then(data=>{
		console.log(data)
		res.send(data)
	})
	.catch(err=>{
	console.log(err)
	})
})
app.post('/delete',(req,res)=>{
	Employee.findByIdAndRemove(req.body.id)
	.then(data=>{
		console.log(data)
		res.send(data)
	})
	.catch(err=>{
	console.log(err)
	})
})

app.post('/update', (req, res) => {
	Employee.findByIdAndUpdate(req.body.id,{
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		salary: req.body.salary,
		position: req.body.position,
		picture: req.body.picture
	})
		.then(data => {
			console.log(data)
			res.send(data)
		})
		.catch(err => {
			console.log(err)
		})
})

app.listen(3000,()=>{
	console.log("server running  mine")
})