import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Main2Component } from './main2/main2.component';
import { Main3Component } from './main3/main3.component';


export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: 'main2', component: Main2Component },
    { path: 'main3', component: Main3Component },

];
