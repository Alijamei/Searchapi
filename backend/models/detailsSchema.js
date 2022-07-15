import mongoose from 'mongoose';

const detailsSchema = mongoose.Schema({
    api: String,
    description: String,
    link: String,
    category:String
 }
)

var Details = mongoose.model('Details', detailsSchema);

export default Details;