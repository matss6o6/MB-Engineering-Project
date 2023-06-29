package com.api.back;

import com.api.back.Service.ComputerService;
import com.api.back.model.Computers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/computers")
public class ComputerController {
    private final ComputerService computerService;

    public ComputerController(ComputerService computerService) {
        this.computerService = computerService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Computers>> getComputers(){
        List<Computers> computers = computerService.findComputers();
        return new ResponseEntity<>(computers, HttpStatus.OK);
    }
    @GetMapping("/find/{idKomputera}")
    public ResponseEntity<Computers> getComputersByIdKomputera(@PathVariable("idKomputera") Long idKomputera){
        Computers computers = computerService.findComputersByIdKomputera(idKomputera);
        return new ResponseEntity<>(computers, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Computers> addComputers(@RequestBody Computers computers){
        Computers newComputers = computerService.addComputers(computers);
        return new ResponseEntity<>(newComputers, HttpStatus.CREATED);

    }
    @PutMapping("/update")
    public ResponseEntity<Computers> updateComputers(@RequestBody Computers computers){
        Computers updateComputers = computerService.updateComputers(computers);
        return new ResponseEntity<>(updateComputers, HttpStatus.OK);

    }
    @Transactional
    @DeleteMapping("/delete/{idKomputera}")
    public ResponseEntity<Computers> deleteComputers(@PathVariable("idKomputera") Long idKomputera){
        computerService.deleteComputers(idKomputera);
        return new ResponseEntity<>(HttpStatus.OK);

    }

}
