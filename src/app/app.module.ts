import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentsComponent } from './components/students/students.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'courses', component: CoursesComponent },
    ]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
