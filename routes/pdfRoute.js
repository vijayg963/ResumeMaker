import express from 'express'
import AuthControllers from "../controllers/pdfControllers";
const router = express.Router();

//  pdf creat
router.post("/createPdf", AuthControllers.createPdf);

//  show show pdf id
router.get("/getPdf/:pdfId", AuthControllers.getPdf);

// update
router.patch("/updatePdf/:pdfId", AuthControllers.updatePdf);

//  delete pdf
router.delete("/deletPdf/:pdfId", AuthControllers.deletPdf);



module.exports = router;
