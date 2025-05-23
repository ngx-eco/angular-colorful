<div align="center">
  <a href="https://fil0157.github.io/angular-colorful">
    <img src="projects/app/src/assets/design.png" width="242" height="242" alt="angular-colorful" />
  </a>
</div>

<div align="center">
  <a href="https://npmjs.org/package/angular-colorful">
    <img alt="npm" src="https://img.shields.io/npm/v/angular-colorful.svg?labelColor=da248d&color=6ead0a" />
  </a>
  <a href="https://travis-ci.org/fil0157/angular-colorful">
    <img alt="build" src="https://img.shields.io/travis/fil0157/angular-colorful/master.svg?branch=master&labelColor=da248d&color=6ead0a" />
  </a>
  <a href="https://npmjs.org/package/angular-colorful">
    <img alt="no dependencies" src="https://img.shields.io/david/fil0157/angular-colorful.svg?labelColor=da248d&color=6ead0a" />
  </a>
  <a href="https://bundlephobia.com/result?p=angular-colorful">
    <img alt="tree-shakeable" src="https://badgen.net/bundlephobia/tree-shaking/angular-colorful?labelColor=da248d&color=6ead0a" />
  </a>
  <a href="https://npmjs.org/package/angular-colorful">
    <img alt="types included" src="https://badgen.net/npm/types/angular-colorful?labelColor=da248d&color=6ead0a" />
  </a>
</div>

<div align="center">
  <strong>Angular-colorful</strong> is a tiny color picker component for modern Angular apps.
</div>

## Table of Contents

- [Features](#Features)
- [Demo](#Demo)
- [Quickstart](#Quickstart)
- [Usage](#Usage)
- [Supported color models](#Supported-color-models)

<!-- - [Overriding styles](#Overriding-styles) -->
<!-- - [How to paste or type a color?](#How-to-paste-or-type-a-color?) -->

- [TypeScript support](#TypeScript-support)

<!-- - [Why angular-colorful?](#Why-angular-colorful?) -->
<!-- - [Projects using angular-colorful](#Projects-using-angular-colorful) -->
<!-- - [Browser support](#Browser-support) -->

- [Ports](#Ports)
- [Roadmap](#Roadmap)
- [Changelog](#Changelog)
- [Copyright](#Copyright)
- [MIT License](#MIT-License)

## Features

- **Small**: Just 2,6 KB (minified and gzipped). [Size Limit](https://github.com/ai/size-limit) controls the size.
- **Tree-shakeable**: Only the parts you use will be imported into your app's bundle.

<!-- - **Fast**: Built with hooks and functional components only. -->
<!-- - **Bulletproof**: Written in strict TypeScript and covered by 40+ tests. -->

- **Simple**: The interface is straight forward and easy to use.
- **Mobile-friendly**: Works well on mobile devices and touch screens.

<!-- - **Accessible**: Follows the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) guidelines to support users of assistive technologies. -->

- **No dependencies**

## Demo

- [Website](https://angular-colorful.ru/)

<!-- - [HEX Color Picker (CodeSandbox)](https://codesandbox.io/s/react-colorful-demo-u5vwp)
- [RGBA Color Picker (CodeSandbox)](https://codesandbox.io/s/react-colorful-rgb-o9q0t) -->

## Quickstart

**Install with [npm](https://www.npmjs.com):**

``` bash
npm install angular-colorful --save
```

**Install with [yarn](https://yarnpkg.com/):**

``` bash
yarn add angular-colorful
```

**Clone the repo:**

``` bash
git clone https://github.com/fil0157/angular-colorful.git
```

## Usage

### app.module.ts

```ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {AngularColorfulModule} from 'angular-colorful';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularColorfulModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

### app.component.ts

```ts
import {Component} from '@angular/core';

import {RgbaColor} from 'angular-colorful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  color: RgbaColor = {r: 255, g: 255, b: 255};

  colorChanged(color): void {
    this.color = color;
  }

}
```

### app.component.html

```html

<rgba-color-picker
  [color]="color"
  (colorChanged)="colorChanged($event)">
</rgba-color-picker>
```

## Supported color models

We provide 13 additional color picker components for different color models, unless your app needs a HEX string as an
input/output format.

<details>
  <summary>How to use another color model</summary>

#### Available pickers

| Import                      | Value example                      |
|-----------------------------|------------------------------------|
| `{ HexColorPicker }`        | `"#ffffff"`                        |
| `{ RgbColorPicker }`        | `{ r: 255, g: 255, b: 255 }`       |
| `{ RgbaColorPicker }`       | `{ r: 255, g: 255, b: 255, a: 1 }` |
| `{ RgbStringColorPicker }`  | `"rgb(255, 255, 255)"`             |
| `{ RgbaStringColorPicker }` | `"rgba(255, 255, 255, 1)"`         |
| `{ HslColorPicker }`        | `{ h: 0, s: 0, l: 100 }`           |
| `{ HslaColorPicker }`       | `{ h: 0, s: 0, l: 100, a: 1 }`     |
| `{ HslStringColorPicker }`  | `"hsl(0, 0%, 100%)"`               |
| `{ HslaStringColorPicker }` | `"hsla(0, 0%, 100%, 1)"`           |
| `{ HsvColorPicker }`        | `{ h: 0, s: 0, v: 100 }`           |
| `{ HsvaColorPicker }`       | `{ h: 0, s: 0, v: 100, a: 1 }`     |
| `{ HsvStringColorPicker }`  | `"hsv(0, 0%, 100%)"`               |
| `{ HsvaStringColorPicker }` | `"hsva(0, 0%, 100%, 1)"`           |

<!-- [Live demo →](https://codesandbox.io/s/react-colorful-rgb-o9q0t) -->

</details>

<!-- ## Overriding styles

The easiest way to tweak react-colorful is to create another stylesheet to override the default styles.

```css
.react-colorful {
  height: 250px;
}
.react-colorful__saturation {
  border-radius: 3px 3px 0 0;
}
.react-colorful__hue {
  height: 30px;
  border-radius: 0 0 3px 3px;
}
.react-colorful__saturation-pointer {
  border-radius: 5px;
}
.react-colorful__hue-pointer {
  border-radius: 2px;
  width: 15px;
  height: inherit;
}
```

[See examples →](https://codesandbox.io/s/react-colorful-customization-demo-mq85z?file=/src/styles.css) -->

<!-- ## How to paste or type a color?

As you probably noticed the color picker itself does not include an input field, but do not worry if you need one. **react-colorful** is a modular library that allows you to build any picker you need. Since `v2.1` we provide an additional component that works perfectly in pair with our color picker.

<details>
  <summary>How to use <code>HexColorInput</code></summary><br />

```js
import { HexColorPicker, HexColorInput } from "react-colorful";
import "react-colorful/dist/index.css";

const YourComponent = () => {
  const [color, setColor] = useState("#aabbcc");
  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
      <HexColorInput color={color} onChange={setColor} />
    </div>
  );
};
```

[Live demo →](https://codesandbox.io/s/react-colorful-hex-input-demo-0k2fx)

`HexColorInput` does not have any default styles, but accepts all properties that a regular `input` tag does (such as `className`, `placeholder` and `autoFocus`). That means you can place and modify this component as you like. Also, that allows you to combine the color picker and input in different ways.

</details> -->

## TypeScript support

**angular-colorful** supports TypeScript and ships with types in the library itself; no need for any other install.

<details>
  <summary>How you can get the most from our TypeScript support</summary><br />

While not only typing its own functions and variables, it can also help you type yours. Depending on the component you
are using, you can also import the type that is associated with the component. For example, if you are using our HSL
color picker component, you can also import the `HSL` type.

```ts
import {HslColorPicker, HslColor} from "angular-colorful";

const myHslValue: HslColor = {h: 0, s: 0, l: 0};
```

Take a look at [Supported Color Models](#supported-color-models) for more information about the types and color formats
you may want to use.

</details>

<!-- ## Why angular-colorful?

Today each dependency drags more dependencies and increases your project’s bundle size uncontrollably. But size is very important for everything that intends to work in a browser.

**angular-colorful** is a simple color picker for those who care about their bundle size and client-side performance. It is fast and lightweight because:

- has no dependencies (no risks in terms of vulnerabilities, no unexpected bundle size changes);
- built with hooks and functional components only (no classes and polyfills for them);
- ships only a minimal amount of manually optimized color conversion algorithms (while most of the popular pickers import entire color manipulation libraries that increase the bundle size by more than 10 KB and make your app slower).

To show you the problem that **angular-colorful** is trying to solve, we have performed a simple benchmark (using [bundlephobia.com](https://bundlephobia.com)) against popular React color picker libraries:

| Name               | Bundle size                                                                                                                        | Bundle size (gzip)                                                                                                                    | Dependencies                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **react-colorful** | [![](https://badgen.net/bundlephobia/min/react-colorful?color=6ead0a&label=)](https://bundlephobia.com/result?p=react-colorful)    | [![](https://badgen.net/bundlephobia/minzip/react-colorful?color=6ead0a&label=)](https://bundlephobia.com/result?p=react-colorful)    | [![](https://badgen.net/bundlephobia/dependency-count/react-colorful?color=6ead0a&label=)](https://bundlephobia.com/result?p=react-colorful)    |
| react-color        | [![](https://badgen.net/bundlephobia/min/react-color?color=red&label=)](https://bundlephobia.com/result?p=react-color)             | [![](https://badgen.net/bundlephobia/minzip/react-color?color=red&label=)](https://bundlephobia.com/result?p=react-color)             | [![](https://badgen.net/bundlephobia/dependency-count/react-color?color=red&label=)](https://bundlephobia.com/result?p=react-color)             |
| react-input-color  | [![](https://badgen.net/bundlephobia/min/react-input-color?color=red&label=)](https://bundlephobia.com/result?p=react-input-color) | [![](https://badgen.net/bundlephobia/minzip/react-input-color?color=red&label=)](https://bundlephobia.com/result?p=react-input-color) | [![](https://badgen.net/bundlephobia/dependency-count/react-input-color?color=red&label=)](https://bundlephobia.com/result?p=react-input-color) |
| rc-color-picker    | [![](https://badgen.net/bundlephobia/min/rc-color-picker?color=red&label=)](https://bundlephobia.com/result?p=rc-color-picker)     | [![](https://badgen.net/bundlephobia/minzip/rc-color-picker?color=red&label=)](https://bundlephobia.com/result?p=rc-color-picker)     | [![](https://badgen.net/bundlephobia/dependency-count/rc-color-picker?color=red&label=)](https://bundlephobia.com/result?p=rc-color-picker)     | -->

<!-- ## Projects using angular-colorful

<details>
  <summary><a href="https://resume.io">Resume.io</a> — online resume builder with over 7,800,000 users worldwide</summary>

  <a href="https://resume.io/">
    <img src="demo/src/assets/resume-io.png" width="873" alt="resume.io" />
  </a>
</details>

<details>
  <summary><a href="https://omatsuri.app">Omatsuri.app</a> — progressive web application with a lot of different frontend focused tools</summary>

  <a href="https://omatsuri.app">
    <img src="demo/src/assets/omatsuri-app.png" width="1223" alt="omatsuri.app" />
  </a>
</details> -->

<!-- ## Browser support

It would be an easier task to list all of the browsers and versions that **react-colorful** does not support! We regularly test against browser versions going all the way back to 2013 and this includes IE11.

**react-colorful** works out-of-the-box for most browsers, regardless of version, and only requires an `Object.assign` polyfill be provided for full IE11 support. -->

## Ports

Not using Angular? No problem! Angular-colorful ported from react-colorful. All the ported projects can be
viewed [here](https://github.com/omgovich/react-colorful#ports).

## Roadmap

- [x] Additional modules to support RGB, HSL and HSV color models
- [x] TypeScript support
- [x] Rewrite the codebase to TypeScript
- [x] Alpha channel support (RGBA, HSLA and HSVA color models)
- [ ] HEX input component
- [ ] Accessibility

## Changelog

For changelogs, check
out [the Releases section of angular-colorful](https://github.com/fil0157/angular-colorful/releases)
or the [CHANGELOG.md](CHANGELOG.md).

## Copyright

Code Copyright 2020 angular-colorful.

## MIT License

Copyright (c) 2020 angular-colorful

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
