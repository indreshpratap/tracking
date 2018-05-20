import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MATERIAL } from "./mat-material";

const IMP_EXP = [CommonModule, FormsModule, ...MATERIAL];
@NgModule({
  imports: IMP_EXP,
  exports: IMP_EXP,
  declarations: []
})
export class UiToolkitModule {}
