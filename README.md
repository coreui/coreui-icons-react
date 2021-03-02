### [@coreui/icons-react](https://coreui.io/) for [CoreUI for React](https://coreui.io/react/)

[![npm package][npm-badge]][npm]
[![NPM downloads][npm-download]][npm]
![react](https://img.shields.io/badge/react-^17.0.1-lightgrey.svg?style=flat-square&logo=react)


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

##### import: 
```jsx
import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';
```
or:
```scss
@import '~@coreui/icons/css/all.css';
```

##### usage:
```jsx
...
class CoreUIIcons extends Component {
...
render() {
    return (
      <CIcon name="cil-list" size="2xl"/>
    )
}
...
```

---

- bootstrapped with [nwb](https://github.com/insin/nwb) toolkit

##### `npm run` scripts

`package.json` is configured with `"scripts"` we can use with `npm run` while developing the project.

Command | Description |
--- | ---
`npm run build` | prepare for publishing to npm
`npm run clean` | delete built resources
`npm test` | run tests
`npm run test:coverage` | run tests and produce a code coverage report in `coverage/`
<del>`npm run test:watch`</del> | n/a ~~start a test server and re-run tests on every change~~
<del>`npm start`</del> | n/a ~~start a development server for the demo app~~

#### see also:
- [Developing React Components and Libraries with nwb](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb)
