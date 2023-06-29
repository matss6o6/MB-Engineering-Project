package com.api.back.repo;


import com.api.back.model.Graphic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GraphicRepo extends JpaRepository<Graphic,Long>
{
    Optional<Graphic> findGraphicByIdGraf(Long idGraf);

    void deleteLaptopByIdGraf(Long idGraf);
}
