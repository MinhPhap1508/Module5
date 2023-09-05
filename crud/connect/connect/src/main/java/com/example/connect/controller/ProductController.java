package com.example.connect.controller;

import com.example.connect.model.Product;
import com.example.connect.model.Type;
import com.example.connect.service.IProductService;
import com.example.connect.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("product")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    ITypeService typeService;

    @GetMapping("")
    public ResponseEntity<Page<Product>> getList(@RequestParam(defaultValue = "0") int page,
                                                 @RequestParam(defaultValue = "2") int size,
                                                 @RequestParam(defaultValue = "") String name) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> productPage = productService.findAll(pageable, name);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> addProduct(@RequestBody Product product) {
        productService.addProduct(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/type")
    public ResponseEntity<List<Type>> getListType() {

        List<Type> typeList = typeService.getType();
        if (typeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
//    @PutMapping("/{id}")
//    public ResponseEntity<?> editProduct(@PathVariable("id") Long id, @RequestBody Product product) {
//        productService.editProduct(product, id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
    @PutMapping("/{id}")
    public ResponseEntity<?> editProduct(@RequestBody Product product) {
        productService.addProduct(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}



