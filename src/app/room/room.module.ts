import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomIndexComponent } from './room-index/room-index.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomDetailsComponent } from './room-details/room-details.component';

@NgModule({
  declarations: [RoomIndexComponent, RoomCreateComponent, RoomDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }
