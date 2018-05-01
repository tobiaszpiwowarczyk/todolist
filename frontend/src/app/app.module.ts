import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./pages/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertComponent} from "./components/alert/alert.component";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./pages/home/home.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoListPageComponent} from "./pages/todo-list-page/todo-list-page.component";
import {TodoComponent} from "./components/todo/todo.component";
import {ModalComponent} from "./components/modal/modal.component";
import {SafeStylePipe} from "./pipes/safe-style/safe-style.pipe";
import {RegisterComponent} from "./pages/register/register.component";
import {InputComponent} from "./components/input/input.component";
import { DropdownComponent } from './components/dropdown/dropdown.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    TodoListComponent,
    TodoListPageComponent,
    TodoComponent,
    ModalComponent,
    SafeStylePipe,
    RegisterComponent,
    InputComponent,
    DropdownComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
