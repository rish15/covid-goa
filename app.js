"use strict";

const express = require('express');
const app = express();
const { GoaCases } = require('./models/goa.model');
const body_parser = require("body-parser");
const db = require('./db/db');

app.use(body_parser.json());

app.use(express.json());

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req,res) =>{
	res.send("Server Up and Running");
});

app.get('/goa-cases', async (req,res) =>{
	try{
		const payload = await GoaCases.find();	
		res.send({
			type:'success',
			data:payload,
		})
	}catch(e){
		console.log(e)
		const error =e;
		res.status(500).send({
			type:error,
			error:error
		})
	}
})

app.post('/addGoaCases', async(req,res) =>{
	const request = req.body
	console.log(request)
	try{
		GoaCases.create(request)	
		res.send({
			type:'success'
		})
	}catch(e){
		console.log(e)
	}
})


app.listen(process.env.PORT || 9000) 
console.log("server running ")
