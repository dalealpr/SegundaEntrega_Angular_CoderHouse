import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos.component';
import { EquiposTableComponent } from './components/equipos-table/equipos-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EquiposDialogComponent } from './components/equipos-dialog/equipos-dialog.component';
import { EquiposDetailComponent } from './components/equipos-detail/equipos-detail.component';

@NgModule({
  declarations: [
    EquiposComponent,
    EquiposTableComponent,
    EquiposDialogComponent,
    EquiposDetailComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [EquiposComponent],
})
export class EquiposModule {}
