	
	const express =require('express')
	
	const app=express()

	app.get('/',(req, res)=>{
		res.send('This is homepage')
	});
	app.get('/services', (req, res)=>{
		res.send('This services page');
	});

	app.listen(500, ()=>{
		console.log(`Server started on port`);
	});
	


// npm init
// npm i express
// npm i nodemon 