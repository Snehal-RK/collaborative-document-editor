import mongoose from "mongoose";

// To validate data we create Schema
const documentSchema = mongoose.Schema({
	
	_id: {
		type: String,
		required: true
	},
	
	data: {
		type: Object,
		required: true
	}
});

// Model
const document = mongoose.model('document', documentSchema);

export default document;