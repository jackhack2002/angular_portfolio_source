import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ForcontactComponent } from './forcontact/forcontact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  { path: '',   redirectTo: '/profile', pathMatch: 'full' },
  {path:'education',component:EducationComponent},
  {path:'project',component:ProjectsComponent},
  {path:'skill',component:SkillsComponent},
  {path:'activities',component:ActivitiesComponent},
  {path:'forcontact',component:ForcontactComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
