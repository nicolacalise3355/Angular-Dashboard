import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClient } from "@angular/common/http";
import { EmptyLayout } from "./core/layout/empty-layout/empty-layout.component";
import { MainLayout } from "./core/layout/main-layout/main-layout.component";
import { StatsPage } from "./features/stats/page/stats.component";
import { LoginPage } from "./features/login/page/login.component";

// @NgModule({
//   declarations: [
//     AppComponent,
//     EmptyLayout,
//     MainLayout,
//     StatsPage,
//     LoginPage
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule, 
//     HttpClient
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }