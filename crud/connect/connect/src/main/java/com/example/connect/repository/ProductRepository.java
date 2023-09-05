package com.example.connect.repository;

import com.example.connect.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from Product", nativeQuery = true)
    Page<Product> finAllProduct(Pageable pageable, String name);

    @Transactional
    @Modifying
    @Query(value = "insert into product (code, name, date, quantity, type) values (:#{#product.code},:#{#product.name}, :#{#product.date}, :#{#product.quantity}, :#{#product.type})", nativeQuery = true)
    void addProduct(Product product);

    @Transactional
    @Modifying
    @Query(value = "delete from product where id = :id ", nativeQuery = true)
    void deleteProduct(@Param("id") Long id);

    @Modifying
    @Query(value = "update Product set code = :#{#product.code}, name = :#{#product.name}, date = :#{#product.date}, quantity = :#{#product.quantity}, type = :#{#product.type} where id = :id", nativeQuery = true)
    void updateProduct(@Param("product") Product product, @Param("id") Long id);
}

