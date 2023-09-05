package com.example.connect.service;

import com.example.connect.model.Type;

import java.util.List;

public interface ITypeService {
    List<Type> getType();
    Type getTypeById(int id);
}
