import AppLoader from "./src/Engine/AppLoader";
import Controller from "./src/Engine/Controller";
import Column from "./src/Components/Column";
import Text from "./src/Components/Text";
import View from "./src/Components/View";

class HomeController extends Controller {

    protected _state = {
        title1: 'Column 1',
        title2: 'Column 2'
    }

    render(): HTMLElement {
        const title1 = new Text(this.state.title1, 18, 'white');
        const title2 = new Text(this.state.title2, 18, 'white');

        const column1 = new Column(title1);
        column1.style({
            backgroundColor: 'green',
            height: '100vh',
            padding: 20
        })

        const column2 = new Column(title2);
        column2.style({
            backgroundColor: 'blue',
            height: '100vh',
            padding: 20
        })

        this.view.child(column1, column2);

        return super.render();
    }
}

const App = new AppLoader();
App.register(new HomeController());

export default App;