import { Component, OnInit } from '@angular/core';
import { faPhone,faCar,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faPhone = faPhone;
  faCar = faCar;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor() { }

  ngOnInit() {
  }

}
