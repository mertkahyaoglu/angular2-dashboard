import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SidebarService {
  @Output() event: EventEmitter<any> = new EventEmitter();

  toggleSidebar() {
    this.event.emit(true);
  }

}
