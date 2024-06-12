import { Router } from "express";


const router = Router();

/**
 * Product routes
 */

router.get("/product",(req,res) =>{
    res.json({message:"hello"})
})
router.put("/product/:id",() =>{})
router.delete("/product/:id",() =>{})
router.get("/product/:id",() =>{})
router.post("/product/",() =>{})


/**
 * Update routes
 */

router.get("/update",() =>{})
router.put("/update/:id",() =>{})
router.delete("/update/:id",() =>{})
router.get("/update/:id",() =>{})
router.post("/update/",() =>{})


/**
 * Update points route
 */


router.get("/updatepoint",() =>{})
router.put("/updatepoint/:id",() =>{})
router.delete("/updatepoint/:id",() =>{})
router.get("/updatepoint/:id",() =>{})
router.post("/updatepoint/",() =>{})


export default router