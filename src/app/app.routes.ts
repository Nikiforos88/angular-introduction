import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDerictiveExampleComponent } from './components/for-derictive-example/for-derictive-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';

export const routes: Routes = [
    {path: 'event-bind-example', component:EventBindExampleComponent},
    {path: 'component-input-example', component:ComponentInputExampleComponent},
    {path: 'for-directive-example', component:ForDerictiveExampleComponent},
    {path: 'simple-datatable-example', component:SimpleDatatableExampleComponent},
    {path: '', component: WelcomeComponent}
];
