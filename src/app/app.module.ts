import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {ConfigService} from './app-config.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatSnackBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpServiceModule} from './shared/asyncServices/http';
import {reducers} from './shared/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AuthEffect} from './shared/store/effects/auth.effect';
import {AuthModule} from './auth';
import {OutcomeEffect} from './shared/store/effects/outcome.effect';
import {MetaDataEffects} from './shared/store/effects/meta-data.effects';
import {ProjectEffect} from './shared/store/effects/project.effect';
import {MAT_MOMENT_DATE_FORMATS} from '@angular/material-moment-adapter';
import {MomentUtcDateAdapter} from './shared/asyncServices/moment-utc-date-adapter';
import {FormDesignEffect} from './shared/store/effects/form-design.effect';
import {MyFormEffect} from './shared/store/effects/my-form.effect';
<<<<<<< HEAD
=======
import {OutputEffect} from './shared/store/effects/output.effect';
>>>>>>> 673aec5b843245a586238e95924ad5e973d86ccb
export function configServiceFactory(config: ConfigService) {
  return () => config.load();
}
const effects = [
  AuthEffect,
  OutcomeEffect,
<<<<<<< HEAD
=======
  OutputEffect,
>>>>>>> 673aec5b843245a586238e95924ad5e973d86ccb
  MetaDataEffects,
  ProjectEffect,
  FormDesignEffect,
  MyFormEffect
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    HttpServiceModule.forRoot(),
    AuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
