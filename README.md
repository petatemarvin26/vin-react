## VIN-REACT

is React library that focus the simplest way to use component and utilize the powerful of Flexbox, Cutomizable and Simplicity.

## Table Contents

- [Installation](#Installation)
- [Features](#Features)
- [Examples](#Examples)

## Installation

```shell
npm install --save vin-react
```

## Features

#### Components

- [Counter](#Counter)
- [Dropdown](#Dropdown)
- HeaderText
- [Image](#Image)
- [Indicator](#indicator)
- [Input](#Input)
- [Pagination](#Pagination)
- Text
- [Touchable](#Touchable)
- [View](#View)

#### Floating Components

- [Modal](#Modal)
- Toast

#### Hooks

- [useModal](#Modal)
- useToast

#### Higher Order Component (HOC)

- [connectStyle](#connectStyle)

## Examples

##### `Counter`

```TSX
import {Counter} from 'vin-react'
...
const App: React.FC = () => {
  return (
    <div>
      <Counter
        max={10}
        onChange={nextNum => console.log(nextNum)}
      />
    </div>
  )
}
```

##### `Dropdown`

```TSX
import {Dropdown} from 'vin-react'
...
const App: React.FC = () => {
  return (
    <div>
      <Dropdown
        onChange={selected => console.log(selected)}
        data={[
          {label: 'One', value: 1},
          {label: 'Two', value: 2}
        ]}
      />
    </div>
  )
}
```

##### `Image`

```TSX
import {Image} from 'vin-react'
...
const App: React.FC = () => {
  const [imgProg, setImageProgress] = useState<number>(0)
  return (
    <div>
      {`Image render ${imgProg}%`}
      <Image onLoading={setImageProgress}/>
    </div>
  )
}
```

##### `Indicator`

```TSX
import {Indicator} from 'vin-react'
...
const App: React.FC = () => {
  return (
    <div>
      <Indicator.Bar
        width={250}
        height={10}
        cornerStyle='round'
        animating
      />
      <Indicator.Bar width={250} height={10} progress={0.5} />
      <Indicator.CircleSnail
        size={100}
        thickness={10}
        cornerStyle='round'
        animating
      />
      <Indicator.CircleSnail size={100} thickness={10} progress={0.5} />
    </div>
  )
}
```

##### `Input`

```TSX
import {Input, Indicator} from 'vin-react'
...
const App: React.FC = () => {
  return (
    <div>
      <Input
        placeholder='password'
        prefixComponent={<LockIcon/>}
        suffixComponent={<Indicator progress={0.5}/>}
      />
    </div>
  )
}
```

##### `Modal`

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
import {useModal} from 'vin-react';

const [showModal, hideModal] = useModal();
const handleShowModal = () => {
  showModal(
    <div>
      <p>HI, THIS IS MODAL</p>
    </div>,
    { isClosableOutside: false }
  )
}
const handleHideModal = () => {
  hideModal()
}
```

> NOTE: Make sure the Modal Provider is at the hierarchy position of dom

##### `Pagination`

```TSX
import {Pagination} from 'vin-react'
...
const App: React.FC = () => {
  return (
    <div>
      <Pagination
        maxPageDisplay={5}
        totalData={15}
        currentPage={2}
        onPageChange={(page, e) => {
          console.log(page, e);
        }}
      />
    </div>
  );
};
```

##### `Touchable`

```TSX
import {Touchable} from 'vin-react'
...
const App: React.FC = () => {
  return (
    <div>
      <Touchable onClick={() => console.log('CLICK')}>Click Me</Touchable>
      <Touchable title="Click Me" onClick={() => console.log('CLICK')}/>
    </div>
  )
}
```

##### `View`

```TSX
import {View} from 'vin-react'
...
const App: React.FC = () => {
  const myview = useRef<HTMLDivElement>();
  return (
    <View ref={myview}>
      <button>CLICK ME!</button>
    </View>
  )
}
```

##### `connectStyle`

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

## Contributing

Unfortunately we are not accepting any contributors yet this is under probitionary, but for your concerns and possible suggestions you may raise the issue on our github

## Changelog

We're using github [release][github-release] and based on [semantic versioning][semantic-version]

## Author

[Marvin Petate][marvin-petate]

## License

[ISC][license]

[ws]: https://www.npmjs.com/package/ws
[nodejs]: https://nodejs.org/en
[github-release]: https://github.com/petatemarvin26/vin-react/releases
[license]: ./LICENSE
[semantic-version]: https://semver.org/
[marvin-petate]: https://marvin-petate.web.app
