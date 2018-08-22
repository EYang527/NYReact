const router=require("express").Router();
const articleRoutes=require("./article");

// articles routes
router.use("/article",articleRoutes);

module.exports=router;