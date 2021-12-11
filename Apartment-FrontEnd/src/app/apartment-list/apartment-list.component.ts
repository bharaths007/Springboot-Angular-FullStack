import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Apartment } from '../apartment';
import { ApartmentServiceService } from '../apartment-service.service';


@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  apartments: Apartment[] | any;

  constructor(private router: Router, private aparmentService: ApartmentServiceService) { }

  ngOnInit(): void {
    this.aparmentService.findAll().subscribe(data => {
      this.apartments = data;
    })
  }
  fetchApartmentList() {
    this.apartments = this.aparmentService.findAll();
  }

  delete(id: number): void {
    this.aparmentService.deleteApartment(id).subscribe(() => this.gotoApartmentList());
  }

  update(apartment: Apartment): void {
    const navigationExtras: NavigationExtras = {
      state: {
        apt: apartment,
        insert: false
      }
    };

    // alert(apartment.appartmentId + " " + apartment.appartmentName);
    this.router.navigate(['/update'], navigationExtras);
  }

  gotoApartmentList() {
    window.location.reload();
  }

  // updateStudent(id: number): void{  
  //   this.aparmentService.updateApartment(id)  
  //     .subscribe(  
  //       data => {  
  //         this.apartments=data             
  //       },  
  //       error => console.log(error));  
  // }  



}
