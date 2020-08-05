import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { ProductsComponent } from './components/products/products.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes=[
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'admin/view/:id',
        component: ViewRegistrationComponent 
    },
    {
        path:'admin',
        component: AdminComponent
    },
    {
        path:'products',
        component: ProductsComponent
    },
    {
        path:'gallary',
        component: GallaryComponent
    }
    ,
    {
        path:'contact',
        component: ContactComponent
    }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports:[RouterModule]
    })

export class AppRoutingModule{}