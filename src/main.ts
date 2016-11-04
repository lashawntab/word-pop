import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/Rx';
import { MainModule } from './main.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModule);