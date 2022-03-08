import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CipherComponent } from './cipher/cipher.component';
import { FireAuthService } from './fire-auth.service';

import { LoginRegisterComponent } from './login-register/login-register.component';
import { MainComponent } from './main/main.component';
import { MemoryComponent } from './memory/memory.component';
import { NotepadComponent } from './notepad/notepad.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component:MainComponent},
  {path:'memory', component:MemoryComponent},
  {path: 'code', component:CipherComponent},
  {path:'note', component:NotepadComponent, canActivate:[FireAuthService]},
  {path: 'login', component:LoginRegisterComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
