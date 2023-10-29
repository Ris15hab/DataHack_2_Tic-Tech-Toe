const Lawyer = require('../models/lawyer');

const add = async(req,res,next)=>{
    try{
        const lawyer = new Lawyer(req.body)
        await lawyer.save();
        res.status(201).json({message: "laywer added"})
    }catch(err){
        next(err)
    }
}

const getAllLawyer = async(req,res,next)=>{
    try{
        const data_per_page = parseInt(req.query.data_per_page) || 21;
        const page_number = parseInt(req.query.page_number) || 1;
        const offset = (page_number - 1) * data_per_page;
        const lawyer = await Lawyer.find().skip(offset).limit(data_per_page);
        if(lawyer.length ==0){
            return res.status(400).json({message:"Data over"});
        }
        res.status(200).json({lawyer})
    }catch(err){
        next(err);
    }
}

const getListOfDomains = async(req,res,next)=>{
    try{
        const listOfDomains = [];
        const lawyer = await Lawyer.find({});
        lawyer.map((item)=>{
            item.domain.map((item1)=>{
                if(!listOfDomains.includes(item1)){
                    listOfDomains.push(item1);
                }
            })
        })
        res.status(200).json({List_Of_Domains: listOfDomains})
    }catch(err){
        next(err)
    }
}

const getListOfCities = async(req,res,next)=>{
    try{
        const ListOfCities = [];
        const lawyer = await Lawyer.find({});
        lawyer.map((item)=>{
            if(!ListOfCities.includes(item.location)){
                ListOfCities.push(item.location);
            }
        })
        res.status(200).json({List_Of_Cities: ListOfCities})
    }catch(err){
        next(err)
    }
}

const getListOfLanguages = async(req,res,next)=>{
    try{
        const ListOfLanguages = [];
        const lawyer = await Lawyer.find({});
        lawyer.map((item)=>{
            item.languages.map((item1)=>{
                if(!ListOfLanguages.includes(item1)){
                    ListOfLanguages.push(item1);
                }
            })
        })
        res.status(200).json({List_Of_Language: ListOfLanguages})
    }catch(err){
        next(err)
    }
}

const getListOfJurisdiction = async(req,res,next)=>{
    try{
        const ListOfJurisdiction = [];
        const lawyer = await Lawyer.find({});
        lawyer.map((item)=>{
            if(!ListOfJurisdiction.includes(item.jurisdiction)){
                ListOfJurisdiction.push(item.jurisdiction);
            }
        })
        res.status(200).json({List_Of_Jurisdiction: ListOfJurisdiction})
    }catch(err){
        next(err)
    }
}

const getLawyerByExperience = async(req,res,next)=>{
    try{
        const data_per_page = parseInt(req.query.data_per_page) || 21;
        const page_number = parseInt(req.query.page_number) || 1;
        const offset = (page_number - 1) * data_per_page;
        const {sort} = req.query;
        const lawyer = await Lawyer.find({}).skip(offset).limit(data_per_page).sort({experience : sort});
        if(lawyer.length ==0){
            return res.status(400).json({message:"Data over"});
        }
        res.status(200).json({lawyer})
    }catch(err){
        next(err)
    }
}

const getLawyerByCharge = async(req,res,next)=>{
    try{
        const data_per_page = parseInt(req.query.data_per_page) || 21;
        const page_number = parseInt(req.query.page_number) || 1;
        const offset = (page_number - 1) * data_per_page;
        const {sort} = req.query;
        const lawyer = await Lawyer.find({}).skip(offset).limit(data_per_page).sort({charges : sort});
        if(lawyer.length ==0){
            return res.status(400).json({message:"Data over"});
        }
        res.status(200).json({lawyer})
    }catch(err){
        next(err)
    }
}

const getLawyerByLocation = async(req,res,next)=>{
    try{
        const data_per_page = parseInt(req.query.data_per_page) || 21;
        const page_number = parseInt(req.query.page_number) || 1;
        const offset = (page_number - 1) * data_per_page;
        const lawyer = await Lawyer.find({location:req.query.location}).skip(offset).limit(data_per_page);
        if(lawyer.length ==0){
            return res.status(400).json({message:"Data over"});
        }
        res.status(200).json({lawyer})
    }catch(err){
        next(err);
    }
}

const getLawyerByFilter = async(req,res,next)=>{
    try{
        const {inpval} = req.body;
        let whereClause = [];
        if(inpval.experience){
            whereClause.experience = inpval.experience
        }
        console.log(whereClause)
    }catch(err){
        next(err);
    }
}

module.exports = {
    add,
    getListOfDomains,
    getListOfCities,
    getListOfLanguages,
    getListOfJurisdiction,
    getAllLawyer,
    getLawyerByExperience,
    getLawyerByCharge,
    getLawyerByLocation,
    getLawyerByFilter
}