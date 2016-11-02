import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomeModule} from './home.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(HomeModule);
