const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
	res.send('Hello from Node API Server Updated');
});

mongoose
	.connect(
		'mongodb+srv://admin:q70OvJReBWTbpmPs@backenddb.etngrwf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb',
	)
	.then(() => console.log('Connected to database!'))
	.catch(() => {
		console.log('Connection failed!');
	});
