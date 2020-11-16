import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RoomService } from 'src/app/shared/service/room.service';

@Component({
  selector: 'asl-room-index',
  templateUrl: './room-index.component.html',
  styleUrls: ['./room-index.component.css']
})
export class RoomIndexComponent implements OnInit {

  rooms$: Observable<any>;

  constructor(private roomService: RoomService,
              private router: Router) { }

  ngOnInit(): void {
    this.index();
  }

  index(){
    this.rooms$ = this.roomService.index();
  }

  details(id: number){
    this.router.navigate([`rooms/${id}/details`]);
  }

  delete(id: number){
    this.roomService.destroy(id)
    .subscribe(() => {
      this.index();
    });
  }

}
