import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

// // material
 import {FormsModule} from '@angular/forms';
 import {HttpClientModule} from '@angular/common/http';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {FlexLayoutModule} from '@angular/flex-layout';
 import {
     MatButtonModule,
     MatCardModule,
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
 } from '@angular/material';
//
 import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
            {path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
        ]),
        TransferHttpCacheModule,
        // // For material
         FormsModule,
         HttpClientModule,
         BrowserAnimationsModule,
        // // Material
         MatButtonModule,
         MatCardModule,
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
         FlexLayoutModule


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
