import { Component, OnInit, Input } from '@angular/core';
import { Welcome } from '../../shared/models';

@Component({
  selector: 'app-welcomeitem',
  templateUrl: './welcomeitem.component.html',
  styleUrls: ['./welcomeitem.component.scss']
})
export class WelcomeitemComponent implements OnInit {
  @Input() welcome: Welcome;

  constructor() { }

  ngOnInit() {
  }

}
