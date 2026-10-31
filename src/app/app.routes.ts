import { Routes } from '@angular/router';

import { Home } from './page/home/home';
import { Skills } from './page/skills/skills';
import { Aboutus } from './page/aboutus/aboutus';
import { Project } from './page/project/project';
import { Contactus } from './page/contactus/contactus';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'skills', component: Skills },
  { path: 'about', component: Aboutus },
  { path: 'projects', component: Project },
  { path: 'contact', component: Contactus },
  { path: '**', redirectTo: '' }
];