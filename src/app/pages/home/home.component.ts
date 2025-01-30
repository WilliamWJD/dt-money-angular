import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, InputComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
