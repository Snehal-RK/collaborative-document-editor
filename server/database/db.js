import mongoose from "mongoose";

// mongoDB connectivity
const Connection = async (username = "UserCode", password = 'documenteditor') => {
	const URL = `mongodb+srv://${username}:${password}@documenteditor.hxwhd.mongodb.net/?retryWrites=true&w=majority&appName=DocumentEditor`;
	
	try{
		await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser : true});
		console.log("Database connectivity successful..!");
	}catch(error){
		console.log('Error while connecting..!', error);
	}
}

export default Connection;