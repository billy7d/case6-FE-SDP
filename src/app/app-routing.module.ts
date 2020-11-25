import { EditPlaylistComponent } from './components/playlist/edit-playlist/edit-playlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'users',pathMatch:'full'},
  // {path:'playlists',component:ListUserComponent},
  // {path:'playlists/details/:id',component:DetailedUserComponent},
  // {path:'playlists/create',component:CreateUserComponent},
  {path:'playlists/edit/:id',component:EditPlaylistComponent},
  // {path:'playlists/view/:id',component:DetailedUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
