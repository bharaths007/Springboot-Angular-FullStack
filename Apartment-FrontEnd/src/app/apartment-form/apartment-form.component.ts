import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from '../apartment';
import { ApartmentServiceService } from '../apartment-service.service';

@Component({
  selector: 'app-apartment-form',
  templateUrl: './apartment-form.component.html',
  styleUrls: ['./apartment-form.component.css']
})
export class ApartmentFormComponent {
  state: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private apartmentService: ApartmentServiceService) {
    const navigation = this.router.getCurrentNavigation();
    this.state = navigation?.extras.state as {
      apt: Apartment,
      insert: boolean
    };

  }

  onSubmit() {
    if (this.state.insert) {
      this.apartmentService.save(this.state.apt).subscribe(result => this.gotoApartmentList());
    }
    else {
      this.apartmentService.updateApartment(this.state.apt.appartmentId, this.state.apt).subscribe(() => this.gotoApartmentList());
    }
  }
  gotoApartmentList() {
    this.router.navigate(['/apartments']);
  }
}

