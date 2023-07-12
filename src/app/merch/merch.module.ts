import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MerchComponent} from './merch.component';
import {MerchService} from './merch.service';
import {ConfigService} from "../../assets/js/config.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [MerchService, ConfigService]
})
export class MerchModule {
}
