package com.example.connect.service;

import com.example.connect.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Product> findAll(Pageable pageable, String name);
    void addProduct (Product product);
    void editProduct (Product product, Long id);
    void deleteProduct(Long id);
    Product GetById(int id);
}
