# another.js
## another way to build sites

### What is `another.js`?
`another.js` provides a set of components and tools to facilitate building websites. It is designed for you to see only TypeScript code. It minimizes the use of HTML and CSS by making all programatically.

### How to start?
You can start by creating two files in the root of your project:
 
`App.ts`:

```typescript
import AppLoader from "./src/Engine/AppLoader";
import Controller from "./src/Engine/Controller";

const App = new AppLoader();
App.register(new Controller());

export default App;
```

`index.ts`:

```typescript
import App from './App';

window.onload = () => {
    const container = document.body;

    App.run(container);
}
```

You can later replace `new Controller()` with the controller of your own creating like we explain next.

-- WIP --