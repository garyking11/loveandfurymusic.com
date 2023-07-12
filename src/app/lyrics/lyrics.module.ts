import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LyricsComponent} from "./lyrics.component";
import {ROUTES} from "./lyrics.routes";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [LyricsComponent]
})
export class LyricsModule {
}
