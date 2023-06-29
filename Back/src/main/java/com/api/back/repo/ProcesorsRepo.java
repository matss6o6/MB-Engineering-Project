package com.api.back.repo;


import com.api.back.model.Procesors;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProcesorsRepo extends JpaRepository<Procesors,Long> {
    Optional<Procesors> findProcesorsByIdProcesora(Long idProcesora);


    void deleteProcesorsByIdProcesora(Long idProcesora);
}
