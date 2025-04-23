const Cafe_Inventory = require('../Modals - Cafeteria/Cafe_Inventory.modal');

// Add Products to the database
const Add_Products = async (req, res) => {
    try {
        const product = await Cafe_Inventory.create(req.body);
        res.status(200).json(product);
       } catch (error) {
         res.status(500).json({message: error.message})
       }
};

// Retrieve all the products from the database
const get_all_Products = async (req , res) => {
    try {
        const products = await Cafe_Inventory.find({});
        res.status(200).json(products)
      } catch (error) {
        res.status(500).json({message: error.message})
      }
};

// Retrieve only the specific product required
const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Cafe_Inventory.find({product_id : id});
        if (!product || product.length === 0) {
          return res.status(404).json({ message: "Employee not found with the specified AID" });
      }
        res.status(200).json(product)
      } catch (error) {
        res.status(500).json({message: error.message})
      }
};

// Update a product in the DB
const update_Product = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Cafe_Inventory.findOneAndUpdate({product_id : id}, req.body);
        if(!product){
          return res.status(404).json({message: "Product not found"});
        }
        const updatedProduct = await Cafe_Inventory.find({product_id : id});
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(500).json({message: error.message})
    
      }
};

// Delete a product from the DB
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
       const product =  await Cafe_Inventory.findOneAndDelete({product_id : id});
        if(!product){
          return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({ message: "Product Deleted Successfully"});
      } catch (error) {
        res.status(500).json({message: error.message});
      }
}

module.exports = {
    Add_Products,
    get_all_Products,
    getProduct,
    update_Product,
    deleteProduct
}
