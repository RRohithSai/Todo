const express =require("express");
const Product =require("./models/product.model.js");
const mongoose = require ("mongoose");
const productRoute= require("./routes/product.route.js");

const app = express();

//middleware configurtaion
app.use(express.json()); // if we want to accept JSON data in request body, if we do not use then data will be defined


app.listen(3000,() =>
    {
        console.log("Sever is running on port 3000")
    });

//routes
app.use("/api/products",productRoute);    



    
    app.get("/",(req,res) =>{
        res.send("Hello World From Express");
    });




    // app.get("/api/products",async (req,res) =>{
    //     try{
    //         const products= await Product.find({});
    //         res.status(200).json(products);

    //     }                                                       //created in starting of video ad removed when file structrue is created
    //     catch(error)
    //     {
    //         res.status(500).json({messaage: error.message});
    //     }
    // })

    // app.get("/api/products/:id", async(req,res) =>
    //     {
    //         try{
    //             const {id}=req.params;
    //             const product= await Product.findById(id);
    //             res.status(200).json(product);

    //         }
    //         catch(error)
    //         {
    //             res.status(500).json({message: error.message});
    //         }
    //     })


        //post product 
    // app.post("/api/products",async (req,res) =>{
    //     try{
    //         const product=await Product.create(req.body);
    //         res.status(200).json(product);   
    //     }
    //     catch(error)
    //     {
    //         res.status(500).json({message : error.message});
    //     }
    // });

    //update product
    // app.put("/api/products/:id", async(req,res)=>{
    //     try{
    //         const {id}=req.params;
    //         const product =await Product.findByIdAndUpdate(id,req.body);
    //         if(!product){
    //             return res.status(404).json({message:"Product not found"});
    //         }
    //         const updatedProduct= await Product.findById(id);
    //         res.status(200).json(updatedProduct);

    //     }
    //     catch(error){
    //         res.status(500).json({error: error.message});
    //     }
    // })

    //delete product

    // app.delete("/api/products/:id", async(req,res)=>
    // {
    //     try{
    //         const {id}=req.params;
    //         const product=await Product.findByIdAndDelete(id);
            
    //         if(!product)
    //         {
    //             return res.status(404).json({message:"Product not found"});
    //         }
    //         res.status(200).json({message:"product deleted successfully"});

    //     }
    //     catch(error)
    //     {
    //        res.status(500).json({message : error.message}); 
    //     }
    // })
    
    mongoose.connect("mongodb+srv://rohitsair_db_user:xlPOCV1nJi0WMSvs@backenddb.y1lpscy.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB")
    .then(()=>{console.log("Connected to MongoDB");})
    .catch(()=>{
        console.log("Failed to connect to MongoDB");
    });