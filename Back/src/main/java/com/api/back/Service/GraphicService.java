package com.api.back.Service;
import com.api.back.exception.GraphicNotFoundException;
import com.api.back.model.Graphic;
import com.api.back.repo.GraphicRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GraphicService {

    private final GraphicRepo graphicRepo;

    @Autowired
    public GraphicService(GraphicRepo graphicRepo) {
        this.graphicRepo = graphicRepo;
    }

    public Graphic addGraphic(Graphic graphic){
        graphic.getModel();
        return graphicRepo.save(graphic);
    }

    public List<Graphic> findGraphic(){
        return graphicRepo.findAll();
    }

    public Graphic findGraphicByIdGraf(Long idGraf){
        return graphicRepo.findGraphicByIdGraf(idGraf).orElseThrow(() -> new GraphicNotFoundException("Graphic by id" + idGraf + "was not found"));
    }

    public Graphic updateGraphic(Graphic grahpic){
        return graphicRepo.save(grahpic);
    }
    public void deleteGraphic(Long idGraf){
        graphicRepo.deleteLaptopByIdGraf(idGraf);
    }
}
