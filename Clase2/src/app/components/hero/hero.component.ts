import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroe: Heroe;

  constructor(private _activatedRoute: ActivatedRoute, private _heroService: HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => this.heroe = this._heroService.getHero(params['id']));
  }

}
