const {add,getListOfDomains,getListOfCities,getListOfLanguages, getListOfJurisdiction,getAllLawyer, getLawyerByExperience ,getLawyerByCharge ,getLawyerByLocation} = require('../controllers/lawyer')
const express = require('express')
const router = express.Router()

router.post('/add',add);
router.get('/getListOfDomains',getListOfDomains);
router.get('/getListOfCities',getListOfCities);
router.get('/getListOfLanguages',getListOfLanguages);
router.get('/getListOfJurisdiction',getListOfJurisdiction);
router.get('/getAllLawyer',getAllLawyer);
router.get('/getLawyerByExperience',getLawyerByExperience)
router.get('/getLawyerByCharge',getLawyerByCharge);
router.get('/getLawyerByLocation',getLawyerByLocation);

module.exports = router