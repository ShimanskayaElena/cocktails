import { Component, Input, inject, OnInit, DestroyRef } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { pipe } from 'rxjs';

import { DataHttpService } from '../../core/services/data-http.service';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.css'
})
export class CocktailDetailsComponent implements OnInit {

  @Input() i!: string;

  public cocktail: any;
  public ingredients: Array<number> = [];

  private readonly dataHttpService = inject(DataHttpService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {

    for (let i = 1; i < 16; i++) {
      this.ingredients.push(i);
    }

    const params = new HttpParams().set('i', this.i);

    this.dataHttpService.getDetailsCocktail(params)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(result => {
      this.cocktail = result.drinks[0];
    });
  
  }

}
