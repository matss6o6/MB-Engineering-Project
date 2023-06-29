package com.api.back;

import com.api.back.Service.ProcesorsService;
import com.api.back.model.Procesors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/procesors")
public class ProcesorsController {

    private final ProcesorsService procesorsService;

    public ProcesorsController(ProcesorsService procesorsService) {
        this.procesorsService = procesorsService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Procesors>> getAllLaptop(){
        List<Procesors> procesorss = procesorsService.findProcesors();
        return new ResponseEntity<>(procesorss, HttpStatus.OK);
    }
    @GetMapping("/find/{idProcesora}")
    public ResponseEntity<Procesors> getProcesorsByIdProcesora(@PathVariable("idProcesora") Long idProcesora){
        Procesors procesors = procesorsService.findProcesorsByIdProcesora(idProcesora);
        return new ResponseEntity<>(procesors, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Procesors> addProcesors(@RequestBody Procesors procesors){
        Procesors newProcesors = procesorsService.addProcesors(procesors);
        return new ResponseEntity<>(newProcesors, HttpStatus.CREATED);

    }
    @PutMapping("/update")
    public ResponseEntity<Procesors> updateProcesors(@RequestBody Procesors procesors){
        Procesors updateProcesors = procesorsService.updateProcesors(procesors);
        return new ResponseEntity<>(updateProcesors, HttpStatus.CREATED);

    }
    @Transactional
    @DeleteMapping("/delete/{idProcesora}")
    public ResponseEntity<Procesors> deleteProcesors(@PathVariable("idProcesora") Long idProcesora){
        procesorsService.deleteProcesors(idProcesora);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }
}
