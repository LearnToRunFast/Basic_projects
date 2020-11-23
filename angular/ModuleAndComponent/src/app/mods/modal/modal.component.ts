import { Component, ElementRef, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter(); // event output to parent

  constructor(private el: ElementRef) { }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
  onCloseClick() {
    this.close.emit();
  }
}
