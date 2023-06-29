package com.api.back.Service;

import com.api.back.exception.RamNotFoundException;
import com.api.back.model.Ram;
import com.api.back.repo.RamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RamService {
    private final RamRepo ramRepo;

    @Autowired
    public RamService(RamRepo ramRepo) {

        this.ramRepo = ramRepo;
    }

    public Ram addRam(Ram ram){
        ram.getModel();
        return ramRepo.save(ram);
    }

    public List<Ram> findRam(){
        return ramRepo.findAll();
    }

    public Ram findRamByIdPam(Long idPam){
        return ramRepo.findRamByIdPam(idPam).orElseThrow(() -> new RamNotFoundException("Ram by id" + idPam + "was not found"));
    }

    public Ram updateRam(Ram ram){
        return ramRepo.save(ram);
    }
    public void deleteRam(Long idPam){
        ramRepo.deleteRamByIdPam(idPam);
    }
}
