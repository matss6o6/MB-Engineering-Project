package com.api.back.Service;

import com.api.back.exception.DiscNotFoundException;
import com.api.back.model.Disc;
import com.api.back.repo.DiscRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscService {
    private final DiscRepo discRepo;

    @Autowired
    public DiscService(DiscRepo discRepo) {
        this.discRepo = discRepo;
    }

    public Disc addDisc(Disc disc){
        disc.getModel();
        return discRepo.save(disc);
    }

    public List<Disc> findDisc(){
        return discRepo.findAll();
    }

    public Disc findDiscByIdTwarde(Long idTwarde){
        return discRepo.findDiscByIdTwarde(idTwarde).orElseThrow(() -> new DiscNotFoundException("Laptop by id" + idTwarde + "was not found"));
    }

    public Disc updateDisc(Disc disc){
        return discRepo.save(disc);
    }
    public void deleteDisc(Long idTwarde){
        discRepo.deleteDiscByIdTwarde(idTwarde);
    }
}
