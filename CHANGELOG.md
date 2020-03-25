### [@coreui/icons-react](https://coreui.io/) changelog

##### `1.0.0-alpha.3`
- test: add missing tests
- refactor: cleanup 
- chore: dependencies update and cleanup

##### `1.0.0-alpha.0`
- initial version

install:
```bash
npm install @coreui/icons-react
```

import: 
```jsx
import { CIcon, CIconRaw } from '@coreui/icons-react';
import { cifAu } from '@coreui/icons';
```
```scss
@import '~@coreui/icons/css/all.css';
```

usage:
```jsx
...
class CoreUIIcons extends Component {
...
render() {
    return (
      <CIconRaw name='cifAu' size="2xl"/>
      <CIcon name="cil-list" size="2xl"/>
    )
}
...
```
