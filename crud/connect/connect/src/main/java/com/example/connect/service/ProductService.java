package com.example.connect.service;

import com.example.connect.model.Product;
import com.example.connect.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService{
    @Autowired
    ProductRepository productRepository;
    @Override
    public Page<Product> findAll(Pageable pageable, String name) {
        return productRepository.finAllProduct(pageable, name);
    }

    @Override
    public void addProduct(Product product) {
        productRepository.addProduct(product);
    }

    @Override
    public void editProduct(Product product, Long id) {
        productRepository.updateProduct(product, id);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteProduct(id);
    }

    @Override
    public Product GetById(int id) {
        return productRepository.getById(id);
    }

}
