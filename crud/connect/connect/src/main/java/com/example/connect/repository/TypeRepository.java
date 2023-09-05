package com.example.connect.repository;

import com.example.connect.model.Type;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TypeRepository extends JpaRepository<Type, Integer> {
    @Query(value = "select * from Type", nativeQuery = true)
    List<Type> findAllType();
}
