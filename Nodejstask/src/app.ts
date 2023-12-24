import express from 'express';
import bodyParser from 'body-parser';
import { Product, products } from './product';

const app = express();
const port = 5000;

app.use(bodyParser.json());

// GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// POST /api/products
app.post('/api/products', (req, res) => {
  const newProduct: Product = req.body;

  if (!newProduct || !newProduct.name || !newProduct.price) {
    res.status(400).json({ error: 'Invalid product data' });
    return;
  }

  newProduct.id = products.length + 1;
  products.push(newProduct);

  res.status(201).json(newProduct);
});

// PUT /api/products/:id
app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct: Product = req.body;

  const existingProduct = products.find((p) => p.id === productId);

  if (!existingProduct) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  if (!updatedProduct || !updatedProduct.name || !updatedProduct.price) {
    res.status(400).json({ error: 'Invalid product data' });
    return;
  }

  existingProduct.name = updatedProduct.name;
  existingProduct.price = updatedProduct.price;

  res.json(existingProduct);
});

// DELETE /api/products/:id
app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    products.splice(index, 1);
    res.sendStatus(204);
  }
});
// Middleware for logging requests
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
  });
  
  app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
