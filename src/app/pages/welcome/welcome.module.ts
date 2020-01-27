import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { TablesComponent } from '../../components/tables/tables.component';
import { CommonModule } from "@angular/common";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";

@NgModule({
  imports: [WelcomeRoutingModule,CommonModule,NzTableModule,NzDividerModule],
  declarations: [WelcomeComponent,TablesComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
