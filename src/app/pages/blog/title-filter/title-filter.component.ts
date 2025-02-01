import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title-filter',
  imports: [],
  templateUrl: './title-filter.component.html',
  styleUrl: './title-filter.component.css',
})
export class TitleFilterComponent {
  @Output() inputTitle: EventEmitter<string> = new EventEmitter();

  onInput(event: any) {
    this.inputTitle.emit(event.target.value);
  }
}
