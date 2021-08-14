# ngx-codemirror6 [![npm](https://badgen.net/npm/v/@robotcoral/ngx-codemirror6)](https://badgen.net/npm/v/@robotcoral/ngx-codemirror6) [![npm](https://badgen.net/github/license/robotcoral/ngx-codemirror6)](https://badgen.net/github/license/robotcoral/ngx-codemirror6)

Angular Component for CodeMirror 6

## Installation

To use this component in your project install it via npm

```
npm i @robotcoral/ngx-codemirror6 @codemirror/basic-setup --save
```

## Using the component

Include `CodeMirrorModule` in your main module:

```javascript
import { CodeMirrorModule } from "@robotcarol/ngx-codemirror6";

@NgModule({
  // ...
  imports: [CodeMirrorModule],
  // ...
})
export class AppModule {}
```

and add the `ngx-codemirror` selector to your feature component:

```javascript
import { Component } from "@angular/core";

@Component({
  selector: "sample",
  template: ` <ngx-codemirror [config]="{...}"> </ngx-codemirror> `,
})
export class Sample {
  // ...
}
```

## Configuration

You can pass an object of the type [`EditorStateConfig`](https://codemirror.net/6/docs/ref/#state.EditorStateConfig) to the ngx-codemirror component via the `[config]` input.
