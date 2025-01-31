import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { OperationComponent } from "./operation/operation.component";
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, OperationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  private modalInstance!: Modal;

  ngOnInit(): void {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      this.modalInstance = new Modal(modalElement);
    }else {
      console.error("Elemento modal não encontrado!");
    }
  }

  openModal() {
    this.modalInstance.show();
  }
}
