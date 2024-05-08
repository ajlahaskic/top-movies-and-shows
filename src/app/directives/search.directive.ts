import { Directive, Host, HostListener, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Directive({
  selector: '[appSearch]',
  standalone: true
})
export class SearchDirective {
  constructor() {}
}
