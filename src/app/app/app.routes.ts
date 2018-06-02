import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { HomeComponent } from "./components/home/home.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home", component: HomeComponent, children: [
      { path: "admin", loadChildren: "app/modules/admin/admin.module#AdminModule" },
      { path: "invoice", loadChildren: "app/modules/invoice/invoice.module#InvoiceModule" }
    ]
  },
  { path: "aboutus", component: AboutusComponent }
];