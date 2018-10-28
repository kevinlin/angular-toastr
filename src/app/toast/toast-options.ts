import { Injectable } from '@angular/core';

@Injectable()
export class ToastOptions {
  positionClass = 'toast-top-right';
  maxShown = 5;
  newestOnTop = true;
  animate = 'fade';

  // override-able properties
  toastLife = 5000;
  enableHTML = false;
  dismiss = 'click'; // 'auto' | 'click' | 'controlled'
  messageClass = 'toast-message';
  titleClass = 'toast-title';
  showCloseButton = false;

  constructor() {}

}
