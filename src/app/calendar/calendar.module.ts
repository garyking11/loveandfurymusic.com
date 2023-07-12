import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// import {CalendarComponent} from './calendar.component';
import {ROUTES} from './calendar.routes';
import {CalendarService} from './calendar.service';
/*import {SortableModule} from 'ngx-bootstrap';
import {DragulaModule} from 'ng2-dragula';
import {DndModule} from 'ng2-dnd';
import {MaterialModule} from '../material/material.module';
import {SortPipe} from '../pipes/sort.pipe';*/

@NgModule({
  declarations: [], // CalendarComponent
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ],
    providers: [], // CalendarService
})
export class CalendarModule {
}
