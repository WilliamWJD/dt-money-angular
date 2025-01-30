import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { OperationComponent } from "./operation/operation.component";

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, OperationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
