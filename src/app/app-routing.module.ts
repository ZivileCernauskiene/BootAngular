import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CipherComponent } from './cipher/cipher.component';
import { MainComponent } from './main/main.component';
import { MemoryComponent } from './memory/memory.component';
import { NotepadComponent } from './notepad/notepad.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path:'memory', component:MemoryComponent},
  {path: 'code', component:CipherComponent},
  {path:'note', component:NotepadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
