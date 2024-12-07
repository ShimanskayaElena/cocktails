import { Routes } from '@angular/router';

import { NavigationConfig } from './config/navigation.config';
import { HomeComponent } from './views/home/home.component';
import { CocktailListComponent } from './views/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './views/cocktail-details/cocktail-details.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
        children: [
            {
                path: NavigationConfig.CocktailsList,
                title: 'Cocktails List',
                loadComponent: () => import('./views/cocktail-list/cocktail-list.component').then(m => m.CocktailListComponent)
            },
            {
               path: NavigationConfig.CocktailDetails,
               title: 'Cocktail Details',
               loadComponent: () => import('./views/cocktail-details/cocktail-details.component').then(m => m.CocktailDetailsComponent)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '', 
        pathMatch: 'full'
    }
];
