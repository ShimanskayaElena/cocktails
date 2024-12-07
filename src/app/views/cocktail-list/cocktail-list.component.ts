import { Component,  inject, Input, DestroyRef, OnChanges } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { pipe } from 'rxjs';


import { DataHttpService } from '../../core/services/data-http.service';
import { NavigationConfig } from '../../config/navigation.config';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent implements OnChanges {

  @Input() s!: string;

  public cochtails!: Array<any>;

  private readonly router = inject(Router);
  private readonly dataHttpService = inject(DataHttpService);
  private readonly destroyRef = inject(DestroyRef);


  ngOnChanges() {
    const params = new HttpParams().set('s', this.s);
    this.dataHttpService.getAllCocktails(params)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe( value => {
      this.cochtails = value.drinks;
    });
  }

  public onShowDetailsCoktail(event: Event, id: string) {
    event.preventDefault();
    this.router.navigate([ NavigationConfig.CocktailDetails ], { 
      queryParams: { i: id }
    });
  }

}
