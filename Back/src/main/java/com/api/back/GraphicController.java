package com.api.back;

import com.api.back.Service.GraphicService;
import com.api.back.model.Graphic;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/graphic")
public class GraphicController {

    private final GraphicService graphicService;

    public GraphicController(GraphicService graphicService) {
        this.graphicService = graphicService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Graphic>> getAllGraphic(){
        List<Graphic> graphics = graphicService.findGraphic();
        return new ResponseEntity<>(graphics, HttpStatus.OK);
    }
    @GetMapping("/find/{idGraf}")
    public ResponseEntity<Graphic> getLaptopByIdLaptopa(@PathVariable("idGraf") Long idGraf){
        Graphic graphic = graphicService.findGraphicByIdGraf(idGraf);
        return new ResponseEntity<>(graphic, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Graphic> addGraphic(@RequestBody Graphic graphic){
        Graphic newGraphic = graphicService.addGraphic(graphic);
        return new ResponseEntity<>(newGraphic, HttpStatus.CREATED);

    }
    @PutMapping("/update")
    public ResponseEntity<Graphic> updateGraphic(@RequestBody Graphic graphic){
        Graphic updateGraphic = graphicService.updateGraphic(graphic);
        return new ResponseEntity<>(updateGraphic, HttpStatus.CREATED);

    }
    @Transactional
    @DeleteMapping("/delete/{idGraf}")
    public ResponseEntity<Graphic> deleteGraphic(@PathVariable("idGraf") Long idGraf){
        graphicService.deleteGraphic(idGraf);
        return new ResponseEntity<>(HttpStatus.CREATED);

    }
}
