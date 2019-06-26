import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    OverlayModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    OverlayModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class SharedModule {}
