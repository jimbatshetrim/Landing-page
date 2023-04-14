import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CollabComponent } from './collab/collab.component';
import { CompanyWorkComponent } from './company-work/company-work.component';
import { ContainerBoxComponent } from './container-box/container-box.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderComponent,
    MainContainerComponent,
    ContainerBoxComponent,
    FooterComponent,
    CompanyWorkComponent,
    CollabComponent,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
