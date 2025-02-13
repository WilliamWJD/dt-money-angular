import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { OperationComponent } from './operation/operation.component';
import { Modal } from 'bootstrap';
import { ModalComponent } from '../modal/modal.component';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from '../modal/generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';
import { Transaction } from '../../services/transactions/transaction';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, OperationComponent, ModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  private modalInstance!: Modal;

  transaction: Transaction;
  formResult: string = "";

  transactionsForm: FormGroup;
  genericValidator: GenericValidator;
  validationsMessages: ValidationMessages;
  displayMessage: DisplayMessage = {};

  constructor(private formBuilder: FormBuilder) {
    this.validationsMessages = {
      description: {
        required: 'A descrição é obrigatória',
        maxlength: 'A descrição deve ter no máximo 255 caracteres',
      },
      value: {
        required: 'O valor é obrigatório',
        min: 'O valor deve ser maior que zero',
      },
    };

    this.genericValidator = new GenericValidator(this.validationsMessages);
  }

  ngOnInit(): void {
    this.newInstanceModal();
    this.transactionsForm = this.formBuilder.group({
      descritpion: ['', [Validators.required, Validators.maxLength(255)]],
      value: ['', [Validators.required, Validators.min(0.01)]],
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(
        this.transactionsForm
      );
    });
  }

  openModal() {
    this.modalInstance.show();
  }

  private newInstanceModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      this.modalInstance = new Modal(modalElement);
    } else {
      console.error('Elemento modal não encontrado!');
    }
  }

  adicionarUsuario(){
    if (this.transactionsForm.dirty && this.transactionsForm.valid) {
      this.transaction = Object.assign({}, this.transaction, this.transactionsForm.value);
      this.formResult = JSON.stringify(this.transactionsForm.value)
      console.log(this.transaction);
    }else{
      this.formResult = "Não foi possível adicionar o usuário"
    }
  }
}
