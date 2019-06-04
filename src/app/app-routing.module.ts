import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameResultsComponent } from './game-results/game-results.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WinnersComponent } from './winners/winners.component';
import { GameDetailComponent } from  './game-detail/game-detail.component';
import { SquareDetailComponent } from  './square-detail/square-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game-results', component: GameResultsComponent },
  { path: 'winners', component: WinnersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: GameDetailComponent },
  { path: 'square/:id', component: SquareDetailComponent },
  { path: 'delete/:id', component: GameResultsComponent },
  { path: 'api', redirectTo: 'api/ncaa' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
