import express from 'express';
import axios from 'axios';
import Details from '../models/detailsSchema.js';

const router = express.Router();

/* Get the specific api */

export const search = async (req, res) => {
        
        try {
            const {api} = req.body;
            const getapi = await Details.find({api}).exec();
            res.status(201).json(getapi);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    }
    
/* Store the api in mongoDB */ 
export const getdetails = async (req, res) => { 
        try {
           let resp = await axios.get("https://api.publicapis.org/entries")
                    const response = resp.data.entries
                    Details.count(function (err, count) {
                        if (!err && count === 0) {
                            for(let i = 0; i < response.length ;i++){
                                console.log(response[i]['API'])
                                const alldata = new Details({
                                        api: response[i]['API'],
                                        description: response[i]['Description'],
                                        link: response[i]['Link'],
                                        category: response[i]['Category']
                                    })
                                   alldata.save();
                                } 
                            }
                        })                                       
     
                } catch (error) {
                    res.status(404).json({ message: error.message });
                }
}
        
