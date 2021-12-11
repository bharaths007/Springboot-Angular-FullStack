package com.appartment.flat.ApartmentCrudProject.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "appartments")
public class Appartment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long appartmentId;

    @Override
    public String toString() {
        return "Appartment{" +
                "appartmentId=" + appartmentId +
                ", appartmentName='" + appartmentName + '\'' +
                ", flatNo=" + flatNo +
                ", contactNo=" + contactNo +
                ", mailId='" + mailId + '\'' +
                '}';
    }

    @Column(name = "name")
    private  String appartmentName;
    @Column(name = "flatNumber")
    private  int flatNo;
    @Column(name = "contact")
    private  long contactNo;
    @Column(name = "mail")
    private  String mailId;



}
