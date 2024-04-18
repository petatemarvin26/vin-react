## VIN-REACT (DOCUMENTATION OUTDATED)

is React library that focus the simplest way to use component and utilize the powerful of Flexbox, Cutomizable and Simplicity.

#

### Table Contents

- [Installation](###Installation)
- [Features](###Features)
- [Examples](###Examples)

#

### Installation

```shell
npm install --save vin-react
```

#

### API

#### Components

- [Button](###Button)
- Counter
- HeaderText
- Image
- Indicator
- Input
- Pagination
- Text
- View

#### Floating Components

- [Modal](###Modal)
- Toast

#### Higher Order Component (HOC)

- [connectStyle](###connectStyle)

#

### Examples

### `Button`

```TSX
import {Button} from 'vin-react'

const App: React.FC = () => {
  return (
    <div>
      <Button onClick={() => console.log('HELLO WORLD')}>Click Me</Button>
      <Button title="Click Me" onClick={() => console.log('HELLO WORLD')}/>
    </div>
  )
}
```

### `Modal`

```JSX
// index.tsx
import {createRoot} from 'react-dom/client';
import {Modal} from 'vin-react';

const rootEl = document.getElementById('root');
const container = createRoot(rootEl)

container.render(
  <Modal.Provider>
    <App/>
  </Modal.Provider>
)

// App.tsx
const {showModal, hideModal} = useConext(Modal.Context);
const handleShowModal = () => {
  showModal(
    <div>
      <p>HI, THIS IS MODAL</p>
    </div>
  )
}
const handleHideModal = () => {
  hideModal()
}
```

### `connectStyle`

```JSX
// MyButton.tsx
import {ConnectStyleProps, connectStyle} from 'vin-react';
import styles from './styles.scss';

type Props = {
  children: any;
} & ConnectStyleProps;

const MyButton: React.FC<Props> = ({children, classNames = () => ''}) => {
  const btnStyle = classNames(
    'green',
    {red: undefined}, // display the red by default
    {red: false}, // will not display red if value false
    ['yellow']
  );

  return (
    <button className={btnStyle}>
      <p>{children}</p>
    </button>
  );
};
export default connectStyle(styles)(MyButton);

```

#

### Contributing

Unfortunately we are not accepting any contributors yet this is under probitionary, but for your concerns and possible suggestions you may raise the issue on our github

#

### Changelog

We're using github [release][github-release] and based on [semantic versioning][semantic-version]

#

### License

[ISC][license]

[ws]: https://www.npmjs.com/package/ws
[nodejs]: https://nodejs.org/en
[github-release]: https://github.com/petatemarvin26/vin-react/releases
[license]: ./LICENSE
[semantic-version]: https://semver.org/
