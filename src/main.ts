import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {BoardView} from './board-view';

document.addEventListener("DOMContentLoaded", function(event) {
  bootstrap(BoardView, [HTTP_PROVIDERS]);
});
