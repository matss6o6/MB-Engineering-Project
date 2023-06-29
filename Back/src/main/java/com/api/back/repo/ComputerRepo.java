package com.api.back.repo;


import com.api.back.model.Computers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ComputerRepo extends JpaRepository<Computers,Long> {

    Optional<Computers> findComputersByIdKomputera(Long idKomputera);

    void deleteComputerByIdKomputera(Long idKomputera);
}
