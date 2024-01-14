import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './pages/users/users.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'success', component: SuccessComponent },
      { path: '**', redirectTo: '/admin/users' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class AdminRouter {}
