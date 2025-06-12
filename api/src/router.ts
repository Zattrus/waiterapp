import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';
import Category from './app/useCases/Category';
import Order from './app/useCases/Order';
import Product from './app/useCases/Product';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
})

//List categories
router.get('/categories', Category.list)

//Create Category
router.post('/categories', Category.create)

//List products
router.get('/products', Product.list)

//Create product
router.post('/products', upload.single('image'), Product.create)

//Get Product by category
router.get('/categories/:categoryId/products', Category.listProductsByCategory)

//List orders
router.get('/orders', Order.list)

//Create order
router.post('/orders', Order.create)

//Change order status
router.patch('/orders/:orderId', Order.updateStatus)

//Delete/cancel order
router.delete('/orders/:orderId', Order.delete)
