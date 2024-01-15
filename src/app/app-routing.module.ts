import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path : '',
    component: HomepageComponent

  },
  { 
    path: 'bookdetail/:id',
    component: BookDetailComponent 
  },
  { 
    path: 'cart',
    component: CartComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
