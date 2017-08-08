import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdCell, MdCheckboxModule, MdHeaderCell, MdHeaderRow, MdInputModule, MdSelectionModule,
  MdSelectModule,
  MdTableModule,
  MdToolbarModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';
const modules =
  [MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdToolbarModule,
  MdSelectionModule,
  MdSelectModule,
  MdCardModule,
  MdTableModule,
    CdkTableModule
  ];
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MyOwnCustomMaterialModuleModule { }
