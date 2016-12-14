import { Component, OnInit, Input } from '@angular/core';
import { Count } from '../../shared/models';

@Component({
  selector: 'app-countitem',
  templateUrl: './countitem.component.html',
  styleUrls: ['./countitem.component.scss']
})
export class CountItemComponent implements OnInit {
  @Input() count: Count;

  constructor() { }

  ngOnInit() {
  }

}
