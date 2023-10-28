const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');
const Lawyer = require('./models/lawyer');
const fs = require('fs')

const connectionParameters = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connection = mongoose.connect(process.env.MONGO_URL, connectionParameters).then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log(err);
})

const addLawyers = async () =>{
    console.log(`Seeding database with lawyers`);
    
    const lawyerDataFile = path.join(__dirname,'./lawyerData.json');
    const rawData = fs.readFileSync(lawyerDataFile);
    const Data = JSON.parse(rawData);
    const processedData = Data.map((item) => ({
        name: item.Lawyer_Name,
        information: item.Information,
        charges: item.Charges,
        experience: item.Experience,
        feedback: item.Feedback,
        languages: item.Languages,
        companyName: item.Company_Name,
        domain: item.Domain,
        jurisdiction: item.Jurisdiction,
        daysOfDisposal: item.Days_of_Disposal,
        location: item.Location,
        demographics: item.Demographics,
        flag: item.Flag,
        proBono: item.Pro_Bono
    }));
    // console.log(processedData)
    try {
      try {
        await Lawyer.collection.drop();
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
      await Lawyer.insertMany(processedData);
      console.log(`Database seeded with ${processedData.length} records.`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
}

// addLawyers();

module.exports = connection;