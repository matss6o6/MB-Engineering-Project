package com.api.back;

import com.api.back.Service.RamService;
import com.api.back.model.Ram;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ram")
public class RamController {

    private final RamService ramService;

    public RamController(RamService ramService) {
        this.ramService = ramService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Ram>> getAllRam(){
        List<Ram> rams = ramService.findRam();
        return new ResponseEntity<>(rams, HttpStatus.OK);
    }
    @GetMapping("/find/{idPam}")
    public ResponseEntity<Ram> getRamByIdPam(@PathVariable("idPam") Long idPam){
        Ram ram = ramService.findRamByIdPam(idPam);
        return new ResponseEntity<>(ram, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Ram> addRam(@RequestBody Ram ram){
        Ram newRam = ramService.addRam(ram);
        return new ResponseEntity<>(newRam, HttpStatus.CREATED);

    }
    @PutMapping("/update")
    public ResponseEntity<Ram> updateRam(@RequestBody Ram ram){
        Ram updateRam = ramService.updateRam(ram);
        return new ResponseEntity<>(updateRam, HttpStatus.CREATED);

    }
    @Transactional
    @DeleteMapping("/delete/{idPam}")
    public ResponseEntity<Ram> deleteRam(@PathVariable("idPam") Long idPam){
        ramService.deleteRam(idPam);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }
}
