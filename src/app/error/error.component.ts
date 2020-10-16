import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorService } from '../error.service';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  message: any ;

    constructor(private errorService: ErrorService) {
    }

  ngOnInit(): void {
    this.errorService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

}
