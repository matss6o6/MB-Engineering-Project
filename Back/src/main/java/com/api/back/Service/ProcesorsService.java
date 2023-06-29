package com.api.back.Service;

import com.api.back.exception.ProcesorsNotFoundException;
import com.api.back.model.Procesors;
import com.api.back.repo.ProcesorsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProcesorsService {
    private final ProcesorsRepo procesorsRepo;

    @Autowired
    public ProcesorsService(ProcesorsRepo procesorsRepo) {

        this.procesorsRepo = procesorsRepo;
    }

    public Procesors addProcesors(Procesors procesors){
        procesors.getModel();
        return procesorsRepo.save(procesors);
    }

    public List<Procesors> findProcesors(){
        return procesorsRepo.findAll();
    }

    public Procesors findProcesorsByIdProcesora(Long idProcesora){
        return procesorsRepo.findProcesorsByIdProcesora(idProcesora).orElseThrow(() -> new ProcesorsNotFoundException("Procesors by id" + idProcesora + "was not found"));
    }

    public Procesors updateProcesors(Procesors procesors){
        return procesorsRepo.save(procesors);
    }
    public void deleteProcesors(Long idProcesora){
        procesorsRepo.deleteProcesorsByIdProcesora(idProcesora);
    }

}
