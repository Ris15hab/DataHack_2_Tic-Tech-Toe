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

module.exports = {
    add,
    getListOfDomains,
    getListOfCities,
    getListOfLanguages,
    getListOfJurisdiction
}