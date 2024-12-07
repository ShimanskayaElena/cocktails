import { Component, inject, DestroyRef, OnInit, Input } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';

import { NavigationConfig } from '../../config/navigation.config';
import { DataHttpService } from '../../core/services/data-http.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    RouterOutlet, 
    ReactiveFormsModule, 
    InputTextModule, 
    ButtonModule, 
    BadgeModule, 
    DialogModule, 
    ToolbarModule, 
    CardModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public loading1: boolean = false;
  public loading2: boolean = false;
  public visible: boolean = false;
  public cocktail: any;
  public ingredients: Array<number> = [];

  protected search = new FormControl<string>('', {
    nonNullable: true,
    validators: [ Validators.required, Validators.pattern('^[a-zA-Z ]*$')]
  });

  private readonly router = inject(Router);
  private readonly dataHttpService = inject(DataHttpService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    for (let i = 1; i < 16; i++) {
      this.ingredients.push(i);
    }
  }

  public  onLoad(): void {
    this.loading1 = true;

    if (this.search.valid) {
      this.router.navigate([ NavigationConfig.CocktailsList ], { 
        queryParams: { s: this.search.value }
      });
    } else {
      console.log(this.search.errors);
    }

    setTimeout(() => {
      this.loading1 = false
    }, 2000);
  }

  public onShowRandomCocktail(): void {

    this.cocktail = null;
    this.visible = true;
    this.loading2 = true;
    setTimeout(() => {
      this.loading2 = false
    }, 2000);

    this.dataHttpService.getRandomCocktail()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(result => {
      this.cocktail = result.drinks[0];
    });
  }

}
