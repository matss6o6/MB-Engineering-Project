package com.api.back.Service;
import com.api.back.exception.LaptopNotFoundException;
import com.api.back.model.Laptop;
import com.api.back.repo.LaptopRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaptopService {

    private final LaptopRepo laptopRepo;

    @Autowired
    public LaptopService(LaptopRepo laptopRepo) {
        this.laptopRepo = laptopRepo;
    }

    public Laptop addLaptop(Laptop laptop){
        laptop.getMarka();
        return laptopRepo.save(laptop);
    }

    public List<Laptop> findLaptop(){
        return laptopRepo.findAll();
    }

    public Laptop findLaptopByIdLaptopa(Long idLaptopa){
        return laptopRepo.findLaptopByIdLaptopa(idLaptopa).orElseThrow(() -> new LaptopNotFoundException("Laptop by id" + idLaptopa + "was not found"));
    }

    public Laptop updateLaptop(Laptop laptop){
        return laptopRepo.save(laptop);
    }
    public void deleteLaptop(Long idLaptopa){
        laptopRepo.deleteLaptopByIdLaptopa(idLaptopa);
    }

}
