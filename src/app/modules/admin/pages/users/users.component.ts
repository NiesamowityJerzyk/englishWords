import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  public isLoading = false;
  public users!: any[];
  public email!: any;
  private subscription$: Subscription = new Subscription();
  public formSearch: UntypedFormGroup = this.fb.group({
    search: '',
  });

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit() {}

  public handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
      let url = URL.createObjectURL(file);
      console.log(url);
    }
  }
}
