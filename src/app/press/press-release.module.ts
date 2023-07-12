import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {PressReleaseComponent} from "./press-release.component";
import {ROUTES} from "./press-release.routes";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
    ],
    providers: [],
    declarations: [PressReleaseComponent],
    exports: []
})
export class PressReleaseModule {
}
