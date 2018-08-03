# React NPS

[![npm (scoped)](https://img.shields.io/npm/v/react-nps.svg)](https://www.npmjs.com/package/react-nps)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-nps.svg)](https://www.npmjs.com/package/react-nps)

## Install

```
$ npm install react-nps
```

or

```
$ yarn add react-nps
```

## Usage

```js
import NPS from "react-nps";
```

Then in your render :

```js
<NPS onClose={this.onClose} onSubmit={this.onSubmit} />
```

## Props

- `function onClose`: called when clicked on the close button or when a score is submitted
- `function onSubmit`: function called when a score is submitted
- `string message`: message displayed on the NPS component
