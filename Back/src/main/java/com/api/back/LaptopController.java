package com.api.back;

import com.api.back.Service.LaptopService;
import com.api.back.model.Laptop;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/laptop")
public class LaptopController {

    private final LaptopService laptopService;

    public LaptopController(LaptopService laptopService) {
        this.laptopService = laptopService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Laptop>> getAllLaptop(){
        List<Laptop> laptops = laptopService.findLaptop();
        return new ResponseEntity<>(laptops, HttpStatus.OK);
    }
    @GetMapping("/find/{idLaptopa}")
    public ResponseEntity<Laptop> getLaptopByIdLaptopa(@PathVariable("idLaptopa") Long idLaptopa){
        Laptop laptop = laptopService.findLaptopByIdLaptopa(idLaptopa);
        return new ResponseEntity<>(laptop, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Laptop> addLaptop(@RequestBody Laptop laptop){
        Laptop newLaptop = laptopService.addLaptop(laptop);
        return new ResponseEntity<>(newLaptop, HttpStatus.CREATED);

    }
    @PutMapping("/update")
    public ResponseEntity<Laptop> updateLaptop(@RequestBody Laptop laptop){
        Laptop updateLaptop = laptopService.updateLaptop(laptop);
        return new ResponseEntity<>(updateLaptop, HttpStatus.CREATED);

    }
    @Transactional
    @DeleteMapping("/delete/{idLaptopa}")
    public ResponseEntity<Laptop> deleteLaptop(@PathVariable("idLaptopa") Long idLaptopa){
        laptopService.deleteLaptop(idLaptopa);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }

}
