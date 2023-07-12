import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./promo.routes";
import {PromoComponent} from "./promo.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
    ],
    providers: [],
    declarations: [PromoComponent]
})
export class PromoModule {
}
