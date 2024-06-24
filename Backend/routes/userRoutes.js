const express=require("express")
const router=express.Router()
const {registerStaff,getStaff,logged_in,signStaff, updateStaff, deleteStaff}=require("../controllers/userController")
const validate_token=require("../middleware/tokenhandler")
const upload=require("../middleware/uploadHandler")
const request_otp=require("../middleware/otpandpassHandler")
router.post("/registerStaff",upload,registerStaff)
router.post("/signStaff",signStaff)
router.post("/loginStaff",validate_token,logged_in)
router.post("/updateCust",validate_token,updateStaff)
router.post("/deleteCust",validate_token,deleteStaff)
module.exports=router