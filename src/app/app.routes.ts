import type { Routes } from "@angular/router";
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

export const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "customers", component: CustomerListComponent },
  { path: "**", redirectTo: "" },
];
