package com.api.back.repo;

import com.api.back.model.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LaptopRepo extends JpaRepository<Laptop,Long> {

    void deleteLaptopByIdLaptopa(Long idLaptopa);

    Optional<Laptop> findLaptopByIdLaptopa(Long idLaptopa);

}
