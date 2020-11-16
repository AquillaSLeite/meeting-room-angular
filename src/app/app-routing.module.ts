import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { RoomIndexComponent } from './room/room-index/room-index.component';

const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomIndexComponent },
  { path: 'rooms/create', component: RoomCreateComponent },
  { path: 'rooms/:id/details', component: RoomDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
