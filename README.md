## VIN-REACT

VIN-REACT is a React component library built around simple, flexbox-first UI primitives and lightweight floating overlays.

## Table Contents

- [Installation](#installation)
- [Features](#features)
- [Component Props](#component-props)
- [Examples](#examples)
- [Providers](#providers)

## Installation

```shell
npm install vin-react
```

## Features

#### Components

- Checkbox
- Dropdown
- Header
- Indicator
- InputText
- Pagination
- Text
- Touchable
- View

#### Floating Components

- Modal
- Toast

## Examples

##### `Checkbox`

```tsx
import {Checkbox} from 'vin-react';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Checkbox label='Accept terms' value={checked} onChange={setChecked} />
    </div>
  );
};
```

##### `Dropdown`

```tsx
import {Dropdown} from 'vin-react';

const items = [
  {label: 'One', value: 1},
  {label: 'Two', value: 2}
];

const App: React.FC = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div>
      <Dropdown
        items={items}
        selected={selected}
        onSelect={(item) => setSelected(item)}
      />
    </div>
  );
};
```

##### `Indicator`

```tsx
import {Indicator} from 'vin-react';

const App: React.FC = () => {
  return (
    <div>
      <Indicator.Bar width={250} height={10} cornerStyle='round' animating />
      <Indicator.Bar width={250} height={10} progress={0.5} />
      <Indicator.CircleSnail
        size={100}
        thickness={10}
        cornerStyle='round'
        animating
      />
      <Indicator.CircleSnail size={100} thickness={10} progress={0.5} />
    </div>
  );
};
```

##### `InputText`

```tsx
import {InputText} from 'vin-react';

const App: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <InputText placeholder='Enter text' onChangeText={setValue} />
    </div>
  );
};
```

##### `Pagination`

```tsx
import {Pagination} from 'vin-react';

const App: React.FC = () => {
  return (
    <div>
      <Pagination totalPages={10} maxDisplay={5} fontSize='1rem' />
    </div>
  );
};
```

##### `Touchable`

```tsx
import {Touchable} from 'vin-react';

const App: React.FC = () => {
  return (
    <div>
      <Touchable onClick={() => console.log('CLICK')}>Click Me</Touchable>
    </div>
  );
};
```

##### `View`

```tsx
import {View} from 'vin-react';

const App: React.FC = () => {
  return (
    <View className='container'>
      <p>Content inside a View</p>
    </View>
  );
};
```

## Providers

```tsx
import {Modal, Toast} from 'vin-react';

const App: React.FC = () => {
  return (
    <Modal.Provider>
      <Toast.Provider>
        <YourApp />
      </Toast.Provider>
    </Modal.Provider>
  );
};

const YourApp: React.FC = () => {
  const {showModal} = useContext(Modal.Context);
  const {showToast} = useContext(Toast.Context);
}
```

> NOTE: Wrap your app with `Modal.Provider` and `Toast.Provider` so floating overlays render correctly.
