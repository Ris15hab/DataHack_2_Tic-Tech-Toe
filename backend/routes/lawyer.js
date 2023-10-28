const {add,getListOfDomains,getListOfCities,getListOfLanguages, getListOfJurisdiction} = require('../controllers/lawyer')
const express = require('express')
const router = express.Router()

router.post('/add',add);
router.get('/getListOfDomains',getListOfDomains);
router.get('/getListOfCities',getListOfCities);
router.get('/getListOfLanguages',getListOfLanguages);
router.get('/getListOfJurisdiction',getListOfJurisdiction);

module.exports = router