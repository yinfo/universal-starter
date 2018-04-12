import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {PlayerComponent} from './components/player/player.component';
import {PlayerService} from './components/player/player.service';
import {TimingPipe } from './shared/pipes/timing.pipe';
import { HttpClientModule } from '@angular/common/http';

// // material
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import {HttpClientModule} from '@angular/common/http';
 // import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {FlexLayoutModule} from '@angular/flex-layout';
//  import {
//      MatButtonModule,
 //    MatCardModule,
//     MatCheckboxModule,
//     MatDialogModule,
//     MatIconModule,
//     MatInputModule,
//     MatListModule,
//     MatMenuModule,
//     MatSelectModule,
//     MatSidenavModule,
//     MatSlideToggleModule,
//     MatTabsModule,
//     MatToolbarModule
//  } from '@angular/material';
//
 // import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PlayerComponent,
        TimingPipe,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        RouterModule.forRoot([
            {path: '', component: PlayerComponent, pathMatch: 'full'},
            {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
            {path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
        ]),
        TransferHttpCacheModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        // // For material

         //  HttpClientModule,
         //  BrowserAnimationsModule,
        // // Material
          //  MatButtonModule,
          //  MatCardModule,
        // MatCheckboxModule,
        // MatDialogModule,
        // MatIconModule,
        // MatInputModule,
        // MatListModule,
        // MatMenuModule,
        // MatSelectModule,
        // MatSidenavModule,
        // MatSlideToggleModule,
        // MatTabsModule,
        // MatToolbarModule,
        //
        // // Flex-layout
         // FlexLayoutModule


    ],
    providers: [PlayerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
