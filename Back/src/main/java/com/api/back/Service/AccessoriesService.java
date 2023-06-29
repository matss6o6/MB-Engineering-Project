package com.api.back.Service;
import com.api.back.exception.AccessoriesNotFoundException;
import com.api.back.model.Accessories;
import com.api.back.repo.AccessoriesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccessoriesService {
    private final AccessoriesRepo accessoriesRepo;

    @Autowired
    public AccessoriesService(AccessoriesRepo accessoriesRepo) {
        this.accessoriesRepo = accessoriesRepo;
    }

    public Accessories addAccessories(Accessories accessories){
        accessories.getTyp();
        return accessoriesRepo.save(accessories);
    }

    public List<Accessories> findAccessories(){
        return accessoriesRepo.findAll();
    }

    public Accessories findAccessoriesByIdAkcesoria(Long idAkcesoria){
        return accessoriesRepo.findAccessoriesByIdAkcesoria(idAkcesoria).orElseThrow(() -> new AccessoriesNotFoundException("Akcesoria by id" + idAkcesoria + "was not found"));
    }

    public Accessories updateAccessories(Accessories accessories){
        return accessoriesRepo.save(accessories);
    }
    public void deleteAccessories(Long idAkcesoria){
        accessoriesRepo.deleteAccessoriesByIdAkcesoria(idAkcesoria);
    }
}
