import {Routes} from '@angular/router';
import {OverviewComponent} from './pages/overview';
import {PlatformsComponent} from './pages/platforms';
import {ProjectsComponent} from './pages/projects';
import {ResearchComponent} from './pages/research';
import {AboutComponent} from './pages/about';

export const routes: Routes = [
  {path: '', component: OverviewComponent, pathMatch: 'full'},
  {path: 'platforms', component: PlatformsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: ''}
];

