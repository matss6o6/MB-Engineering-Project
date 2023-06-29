package com.api.back.repo;

import com.api.back.model.Ram;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RamRepo extends JpaRepository<Ram,Long> {
    void deleteRamByIdPam(Long idPam);

    Optional<Ram> findRamByIdPam(Long idPam);
}
