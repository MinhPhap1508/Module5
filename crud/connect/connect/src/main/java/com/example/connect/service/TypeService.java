package com.example.connect.service;

import com.example.connect.model.Type;
import com.example.connect.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeService implements ITypeService{
    @Autowired
    TypeRepository typeRepository;
    @Override
    public List<Type> getType() {
        return typeRepository.findAllType();
    }

    @Override
    public Type getTypeById(int id) {
        return typeRepository.findById(id).get();
    }
}
