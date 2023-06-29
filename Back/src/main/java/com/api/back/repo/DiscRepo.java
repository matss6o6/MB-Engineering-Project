package com.api.back.repo;

import com.api.back.model.Disc;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DiscRepo extends JpaRepository<Disc,Long> {
    Optional<Disc> findDiscByIdTwarde(Long idTwarde);

    void deleteDiscByIdTwarde(Long idTwarde);
}
