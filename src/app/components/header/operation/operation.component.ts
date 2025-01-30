import { Component, input } from '@angular/core';

@Component({
  selector: 'app-operation',
  imports: [],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.scss'
})
export class OperationComponent {
  title = input<string>();
  icon = input<string>();
  balance = input<string>();
}
