import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {  getCategoriesActions } from '@org/category';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainNavComponent, AsyncPipe, AsyncPipe, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'lqvietworkspace';
  //private readonly store = inject(Store)

  constructor(private readonly store: Store) {
  }

  ngOnInit(){
    this.store.dispatch(getCategoriesActions());
  }

}
