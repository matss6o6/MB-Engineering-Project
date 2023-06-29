package com.api.back;

import com.api.back.Service.DiscService;
import com.api.back.model.Disc;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disc")
public class DiscController {

    private final DiscService discService;

    public DiscController(DiscService discService) {
        this.discService = discService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Disc>> getAllDisc(){
        List<Disc> discs = discService.findDisc();
        return new ResponseEntity<>(discs, HttpStatus.OK);
    }
    @GetMapping("/find/{idTwarde}")
    public ResponseEntity<Disc> getDiscByIdTwarde(@PathVariable("idTwarde") Long idTwarde){
        Disc disc = discService.findDiscByIdTwarde(idTwarde);
        return new ResponseEntity<>(disc, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Disc> addDisc(@RequestBody Disc disc){
        Disc newDisc = discService.addDisc(disc);
        return new ResponseEntity<>(newDisc, HttpStatus.CREATED);

    }

    @PutMapping("/update")
    public ResponseEntity<Disc> updateDisc(@RequestBody Disc disc){
        Disc updateDisc = discService.updateDisc(disc);
        return new ResponseEntity<>(updateDisc, HttpStatus.CREATED);

    }
    @Transactional
    @DeleteMapping("/delete/{idTwarde}")
    public ResponseEntity<Disc> deleteDisc(@PathVariable("idTwarde") Long idTwarde){
        discService.deleteDisc(idTwarde);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }
}
