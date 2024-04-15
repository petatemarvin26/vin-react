## VIN-REACT (DOCUMENTATION OUTDATED)

is React library that focus the simplest way to use component and utilize the powerful of Flexbox, Cutomizable and Simplicity

#

### Table Contents

- [Installation](#Installation)
- [Features](#Features)
- [Examples](#Examples)

#

### Installation

```shell
npm install vin-react
```

#

### Features

##### Components

- Button
- Counter
- HeaderText
- Image
- Indicator
- Input
- Pagination
- Text
- View

##### Floating Components

- Modal
- Toast

##### HOC

- connectStyle

#

### Examples

```JSX
//index.js
import {createRoot} from 'react-dom/client';
import {Modal} from 'vin-react';

const rootEl = document.getElementById('root');
const container = createRoot(rootEl)

container.render(
  <Modal.Provider>
    <App/>
  </Modal.Provider>
)

//App.js
const {onShowModal, onHideModal} = useConext(Modal.Context)
...
const handleShowModal = () => {
  onShowModal(
    <div>
      <p>HI THIS IS MODAL</p>
    </div>
  )
}
const handleHideModal = () => {
  onHideModal()
}
```

#

### Contributing

Unfortunately we are not accepting any contributors yet this is under probitionary, but for your concerns and possible suggestions just email me at petatemarvin26@gmail.com

#

### Changelog

We're using github [release][github-release] and based on [semantic versioning][semantic-version]

#

### License

[ISC][license]

[ws]: https://www.npmjs.com/package/ws
[nodejs]: https://nodejs.org/en
[github-release]: https://github.com/petatemarvin26/vin-socket.server/releases
[license]: ./LICENSE
[semantic-version]: https://semver.org/
[peer-lib]: https://www.npmjs.com/package/vin-socket.client
