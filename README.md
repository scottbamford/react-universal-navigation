# react-universal-navigation
Universal access to navigation properties and methods for different react navigators including react-navigation (for react-native) and connected-react-router for react-redux.

## Installation

Install with npm:

```shell
npm install react-universal-navigation
```

Or with yarn:

```shell
yarn add react-universal-navigation
```

## Basic Usage

### Import
```ts
import { useUniversaNavigation } from 'react-universal-navigation';
```

### Getting a parameter of the navigation

```ts

export const MyComponent = (props: any) => {
    const navigation = useUniversalNavigation(props);
    const id = navigation.getParam('id', ''); // Will get id from the navigation's parameters, or '' if it has not been provided.
    
	// ...
};

```

### Navigating back to the previous screen

```ts

export const MyComponent = (props: any) => {
    const navigation = useUniversalNavigation(props);
    navigation.goBack();

	// ...
};

```

### Navigating to a new screen (unwinding the stack if the screen is already in the stack and the platform supports stacks)

```ts

export const MyComponent = (props: any) => {
    const navigation = useUniversalNavigation(props);
    navigation.navigate('new-route');

	// ...
};

```

You can also pass parameters to navigate() that will then be available via getParam().


```ts

export const MyComponent = (props: any) => {
    const navigation = useUniversalNavigation(props);
    navigation.navigate('new-route', { id: 'my_id', anotherParam: 43 });

	// ...
};

```

### Navigating to a new screen (always pushing to the stack)

```ts

export const MyComponent = (props: any) => {
    const navigation = useUniversalNavigation(props);
    navigation.push('new-route');

	// ...
};

```

You can also pass parameters to push() that will then be available via getParam().


```ts

export const MyComponent = (props: any) => {
    const navigation = useUniversalNavigation(props);
    navigation.push('new-route', { id: 'my_id', anotherParam: 43 });

	// ...
};

```


## connected-react-router

UniversalNavigation will auto-configure for most react navigation libraries, but for
connected-react-router you need to call useConnectedReactRouter() passing some redux actions and dispatch()
for it to work correctly.

```ts

import { universalNavigation } from 'react-universal-navigation';
import { goBack, push } from 'connected-react-router';

//...

const store = configureStore(history, initialState);

// Configure universalNavigation to use connected-react-router.
universalNavigation.useConnectedReactRouter(store.dispatch, goBack, push);

```


## Javascript Usage

react-universal-navigation works just as well with Javascript as Typescript.  All you need to do is
remove the type information from the above examples.

Here are the basic usage examples in plain Javascript:

### Import
```js
import { useUniversaNavigation } from 'react-universal-navigation';
```

### Getting a parameter of the navigation

```js

export const MyComponent = (props) => {
    const navigation = useUniversalNavigation(props);
    const id = navigation.getParam('id', ''); // Will get id from the navigation's parameters, or '' if it has not been provided.
    
	// ...
};

```

### Navigating back to the previous screen

```ts

export const MyComponent = (props) => {
    const navigation = useUniversalNavigation(props);
    navigation.goBack();

	// ...
};

```

### Navigating to a new screen (unwinding the stack if the screen is already in the stack and the platform supports stacks)

```js

export const MyComponent = (props) => {
    const navigation = useUniversalNavigation(props);
    navigation.navigate('new-route');

	// ...
};

```

You can also pass parameters to navigate() that will then be available via getParam().


```js

export const MyComponent = (props) => {
    const navigation = useUniversalNavigation(props);
    navigation.navigate('new-route', { id: 'my_id', anotherParam: 43 });

	// ...
};

```

### Navigating to a new screen (always pushing to the stack)

```js

export const MyComponent = (props) => {
    const navigation = useUniversalNavigation(props);
    navigation.push('new-route');

	// ...
};

```

You can also pass parameters to push() that will then be available via getParam().


```js

export const MyComponent = (props) => {
    const navigation = useUniversalNavigation(props);
    navigation.push('new-route', { id: 'my_id', anotherParam: 43 });

	// ...
};

```

## Typescript

This project is written in typescript and comes with its own bindings.

## License

Licensed under the MIT license.