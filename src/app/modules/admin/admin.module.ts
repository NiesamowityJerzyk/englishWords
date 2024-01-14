import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './pages/users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRouter } from './admin.router';
import { QuizComponent } from './pages/quiz/quiz.component';
import { SuccessComponent } from './pages/success/success.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    SuccessComponent,
    QuizComponent,
  ],
  imports: [SharedModule, AdminRouter],
})
export class AdminModule {}
