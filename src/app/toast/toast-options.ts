import { Injectable } from '@angular/core';

@Injectable()
export class ToastOptions {
  positionClass = 'toast-top-right';
  maxShown = 10;
  newestOnTop = true;
  animate = 'fade';

  // override-able properties
  dismiss = 'click'; // 'auto' | 'click' | 'controlled'
  toastLife = 5000;
  enableHTML = false;
  titleClass = 'toast-title';
  messageClass = 'toast-message';
  showCloseButton = false;

  constructor() {}

}
