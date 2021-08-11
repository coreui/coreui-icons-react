### [@coreui/icons-react](https://icons.coreui.io/) for [CoreUI for React](https://coreui.io/react/)

[![npm package][npm-badge]][npm]
[![NPM downloads][npm-download]][npm]
![react](https://img.shields.io/badge/react-^17.0.2-lightgrey.svg?style=flat-square&logo=react)


[npm-badge]: https://img.shields.io/npm/v/@coreui/icons-react/latest?style=flat-square
[npm]: https://www.npmjs.com/package/@coreui/icons-react
[npm-download]: https://img.shields.io/npm/dm/@coreui/icons-react.svg?style=flat-square

##### docs:
- https://coreui.io/react/docs/components/CIcon  
- https://icons.coreui.io/docs/using-coreui-icons-with/react/  

##### install:
```bash
npm install @coreui/icons
npm install @coreui/icons-react
```

or

```bash
yarn add @coreui/icons
yarn add @coreui/icons-react
```

##### import: 
```jsx
import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';
```

##### usage:
```jsx
...
class CoreUIIcons extends Component {
...
render() {
    return (
      <CIcon name="cil-list" size="xxl"/>
    )
}
...
```
##### scripts:

`package.json` is configured with `"scripts"` we can use with `npm run` while developing the project.

Command | Description |
--- | ---
`yarn build` | prepare for publishing to npm
`yarn lint` | run eslint
