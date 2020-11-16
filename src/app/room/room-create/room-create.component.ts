import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Room } from 'src/app/shared/model/Room.model';


import { RoomService } from 'src/app/shared/service/room.service';

@Component({
  selector: 'asl-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {
  
  roomForm: FormGroup;

  private componentDestroyed$ = new Subject();

  constructor(private roomService: RoomService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.roomForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      date: ['', [Validators.required]],
      startHour: ['', [Validators.required]],
      endHour: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.roomForm.markAllAsTouched();
    if (this.roomForm.invalid) {
      return;
    }
    this.save();    
  }

  save() {
    let room = new Room();
    room.name = this.roomForm.controls.name.value;
    room.date = this.roomForm.controls.date.value;
    room.startHour = this.roomForm.controls.startHour.value;
    room.endHour = this.roomForm.controls.endHour.value;
    
    this.roomService.store(room)
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(() => {
        this.gotoIndex();
      }, (err) => console.error(err));
  }

  gotoIndex() {
    this.router.navigate(['/rooms']);
  }

  
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }
}
