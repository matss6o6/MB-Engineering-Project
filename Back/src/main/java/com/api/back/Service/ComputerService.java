package com.api.back.Service;
import com.api.back.exception.ComputerNotFoundException;
import com.api.back.model.Computers;
import com.api.back.repo.ComputerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ComputerService {

    private final ComputerRepo computerRepo;

    @Autowired
    public ComputerService(ComputerRepo computerRepo) {
        this.computerRepo = computerRepo;
    }

    public Computers addComputers(Computers computer) {
        computer.getModel();
        return computerRepo.save(computer);
    }
    public List<Computers> findComputers(){
        return computerRepo.findAll();
    }

    public Computers findComputersByIdKomputera(Long idKomputera) {
        return computerRepo.findComputersByIdKomputera(idKomputera).orElseThrow(() -> new ComputerNotFoundException("Computer by id" + idKomputera + "was not found"));


    }
    public Computers updateComputers(Computers computers){
        return computerRepo.save(computers);
    }
    public void deleteComputers(Long idKomputera){
        computerRepo.deleteComputerByIdKomputera(idKomputera);
    }
}
