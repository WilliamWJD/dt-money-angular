import { Component, forwardRef, input, output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => InputComponent),
    //   multi: true
    // }
  ]
})
export class InputComponent {
  placeholder = input<string>("Busque uma transação");
}
