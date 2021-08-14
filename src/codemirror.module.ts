import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CodeMirrorComponent } from "./codemirror.component";

/**
 * CodeMirrorModule
 */
@NgModule({
  imports: [CommonModule],
  declarations: [CodeMirrorComponent],
  exports: [CodeMirrorComponent],
})
export class CodeMirrorModule {}
