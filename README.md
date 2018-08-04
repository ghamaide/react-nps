# React NPS

[![npm (scoped)](https://img.shields.io/npm/v/react-nps.svg)](https://www.npmjs.com/package/react-nps)
[![npm (scoped)](https://img.shields.io/npm/l/react-nps.svg)](https://github.com/ghamaide/react-nps/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/l/react-nps.svg)](https://github.com/ghamaide/react-nps/blob/master/LICENSE)

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

## Available props

- `animated: boolean default true`: whether the panel is animated or not
- `animationDuration: number default 2`: duration of the animation in second - works only if animated is `true`
- `buttonColor string`: the button color
- `buttonHoveredColor string`: the button color when hovered
- `function onClose`: called when clicked on the close button or when a score is submitted
- `function onSubmit`: function called when a score is submitted
- `string message`: message displayed on the NPS component
