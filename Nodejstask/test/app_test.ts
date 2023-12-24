import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';
import { products } from '../src/product';

describe('API Tests', () => {
  it('should get a list of products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should get details of a specific product by ID', async () => {
    const productId = 1;
    const res = await request(app).get(`/api/products/${productId}`);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', productId);
  });

  it('should create a new product', async () => {
    const newProduct = { name: 'New Product', price: 29.99 };
    const res = await request(app).post('/api/products').send(newProduct);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body.name).to.equal(newProduct.name);
    expect(res.body.price).to.equal(newProduct.price);

    // Check if the new product is added to the in-memory data store
    expect(products.some((p) => p.id === res.body.id)).to.equal(true);
  });

  it('should update details of a specific product by ID', async () => {
    const productId = 1;
    const updatedProduct = { name: 'Updated Product', price: 39.99 };
    const res = await request(app).put(`/api/products/${productId}`).send(updatedProduct);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', productId);
    expect(res.body.name).to.equal(updatedProduct.name);
    expect(res.body.price).to.equal(updatedProduct.price);

    // Check if the product details are updated in the in-memory data store
    const updatedProductInStore = products.find((p) => p.id === productId);
    expect(updatedProductInStore?.name).to.equal(updatedProduct.name);
    expect(updatedProductInStore?.price).to.equal(updatedProduct.price);
  });

  it('should delete a product by ID', async () => {
    const productId = 1;
    const res = await request(app).delete(`/api/products/${productId}`);
    expect(res.status).to.equal(204);

    // Check if the product is removed from the in-memory data store
    expect(products.some((p) => p.id === productId)).to.equal(false);
  });
});
