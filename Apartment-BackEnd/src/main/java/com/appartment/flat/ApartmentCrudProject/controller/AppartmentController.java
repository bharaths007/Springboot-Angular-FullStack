package com.appartment.flat.ApartmentCrudProject.controller;
import com.appartment.flat.ApartmentCrudProject.dao.Appartment;
import com.appartment.flat.ApartmentCrudProject.repository.AppartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class AppartmentController {
    @Autowired
    private AppartmentRepository appartmentRepository;

    @RequestMapping(value="/add", method = RequestMethod.POST, consumes="application/json", produces = "application/json")
    public Iterable<Appartment> addApartment(@RequestBody Appartment apartment) {
        appartmentRepository.save(new Appartment(apartment.getAppartmentId(), apartment.getAppartmentName(), apartment.getFlatNo(), apartment.getContactNo(), apartment.getMailId()));
        return appartmentRepository.findAll();
    }

    @RequestMapping(value="/apartments", method = RequestMethod.GET, produces = "application/json")
    public Iterable<Appartment> getApartments() {
        return appartmentRepository.findAll();
    }

    @RequestMapping(value="/apartments/{id}", method = RequestMethod.GET, produces = "application/json")
    public Appartment getApartment(@PathVariable("id") Long id) {
        return appartmentRepository.findById(id).get();
    }

    @RequestMapping(value="/update/{id}", method = RequestMethod.PUT, produces = "application/json")
    public Appartment updateApartment(@RequestBody Appartment apartment, @PathVariable("id") Long id) {
        System.out.println("path var id = " + id);
        System.out.println("apartment = " + apartment);
        appartmentRepository.save(new Appartment(id, apartment.getAppartmentName(), apartment.getFlatNo(), apartment.getContactNo(), apartment.getMailId()));
        return appartmentRepository.findById(id).get();
    }

    @RequestMapping(value="/apartment/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public Iterable<Appartment> removeApartment(@PathVariable("id") Long id) {
        System.out.println("Delete called id: " + id);
        appartmentRepository.deleteById(id);
        return appartmentRepository.findAll();
    }


}
