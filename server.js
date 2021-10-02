const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose.connect(process.env.DATABASE_LOCAL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: true,
	useUnifiedTopology: true
}).then(con => console.log('connection successful to the database'));

const port = process.env.PORT || 5000;
app.listen(8000, (err) => {
	if(err){
		console.log('error:' + err);
	}
	console.log(`app running on port ${port}......`);
});
