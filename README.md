# React NPS

[![npm (scoped)](https://img.shields.io/npm/v/react-nps.svg)](https://www.npmjs.com/package/react-nps)
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
onClose = (event) => {
  event.preventDefault();

  this.setState({ open: false });
}

...

<NPS onClose={this.onClose} onSubmit={this.onSubmit} open={this.state.open} />
```

## Available props

- `animated: boolean default true`: whether the panel is animated or not
- `animationDuration: number default 2`: duration of the animation in second - works only if animated is `true`
- `message: string`: message displayed on the NPS component
- `onClose: function`: called when clicked on the close button or when a score is submitted
- `onSubmit: function`: function called when a score is submitted
- `open: boolean default true`: whether the panel is open or not
- `style: object`: the button style, possible keys are: `backgroundColor`, `backgroundActiveColor`, `textColor`, and `textActiveColor`
