import { Component } from '@angular/core';
import { AdminForm } from '../../admin.form';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
})
export class SuccessComponent {
  constructor(public adminForm: AdminForm) {}
}
