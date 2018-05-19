import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutusComponent } from "./components/aboutus/aboutus.component";

import {routes} from './app.routes';
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes),

    CoreModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
