import AppLoader from "./src/Engine/AppLoader";
import Controller from "./src/Engine/Controller";
import Column from "./src/Components/Column";

class HomeController extends Controller {
    render(): HTMLElement {
        const column1 = new Column();
        column1.style({
            backgroundColor: 'green',
            height: '100vh'
        })

        const column2 = new Column();
        column2.style({
            backgroundColor: 'blue',
            height: '100vh'
        })

        this.view.child(column1, column2);

        return super.render();
    }
}

const App = new AppLoader();
App.register(new HomeController());

export default App;