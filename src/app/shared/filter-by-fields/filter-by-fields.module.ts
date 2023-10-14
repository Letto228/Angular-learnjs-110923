import {NgModule} from '@angular/core';
import {FilterByFieldsPipe} from './filter-by-fields.pipe';

@NgModule({
    declarations: [FilterByFieldsPipe],
    exports: [FilterByFieldsPipe],
})
export class FilterByFieldsModule {}
