package com.api.back;
import com.api.back.Service.AccessoriesService;
import com.api.back.model.Accessories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accessories")
public class AccessoriesController {

    private final AccessoriesService accessoriesService;

    public AccessoriesController(AccessoriesService accessoriesService) {
        this.accessoriesService = accessoriesService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Accessories>> getAllAccessories(){
        List<Accessories> accessoriess = accessoriesService.findAccessories();
        return new ResponseEntity<>(accessoriess, HttpStatus.OK);
    }
    @GetMapping("/find/{idAkcesoria}")
    public ResponseEntity<Accessories> getAccessoriesByIdAkcesoria(@PathVariable("idAkcesoria") Long idAkcesoria){
        Accessories accessories = accessoriesService.findAccessoriesByIdAkcesoria(idAkcesoria);
        return new ResponseEntity<>(accessories, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Accessories> addAccessories(@RequestBody Accessories accessories){
        Accessories newAccessories = accessoriesService.addAccessories(accessories);
        return new ResponseEntity<>(newAccessories, HttpStatus.CREATED);

    }
    @PutMapping("/update")
    public ResponseEntity<Accessories> updateAccessories(@RequestBody Accessories accessories){
        Accessories updateAccessories = accessoriesService.updateAccessories(accessories);
        return new ResponseEntity<>(updateAccessories, HttpStatus.CREATED);

    }
    @Transactional
    @DeleteMapping("/delete/{idAkcesoria}")
    public ResponseEntity<Accessories> deleteDisc(@PathVariable("idAkcesoria") Long idAkcesoria){
        accessoriesService.deleteAccessories(idAkcesoria);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }
}
