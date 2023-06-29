package com.api.back.repo;


import com.api.back.model.Accessories;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccessoriesRepo extends JpaRepository<Accessories,Long> {
    Optional<Accessories> findAccessoriesByIdAkcesoria(Long idAkcesoria);

    void deleteAccessoriesByIdAkcesoria(Long idAkcesoria);
}
