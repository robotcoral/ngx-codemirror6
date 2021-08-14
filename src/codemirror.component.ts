import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { EditorState } from "@codemirror/basic-setup";
import { EditorView } from "@codemirror/view";

type EditorStateConfig = Parameters<typeof EditorState.create>[0];

@Component({
  selector: "ngx-codemirror",
  template: `<div #codemirrorhost></div>`,
})
export class CodeMirrorComponent implements AfterViewInit {
  @Input() config: EditorStateConfig;
  @Output() editor: EditorView;

  @ViewChild("codemirrorhost") codemirrorhost: ElementRef = null;

  ngAfterViewInit(): void {
    this.config = this.config || {};
    const state = EditorState.create(this.config);
    this.init(state);
  }

  init(state: EditorState) {
    this.editor = new EditorView({
      state,
      parent: this.codemirrorhost.nativeElement,
    });
  }
}
