import AppLoader from "./src/Engine/AppLoader";
import Controller from "./src/Engine/Controller";
import Text from "./src/Components/Text";
import Column from "./src/Components/Column";
import View from "./src/Components/View";
import Link from "./src/Components/Link";

class HomeController extends Controller {

    render(): HTMLElement {
        const title = new Text("another.js", 18);
        const subtitle = new Text("another way to build sites");
        const titleStack = new Column(title, subtitle);

        const about = new Link('/about', 'About');
        const tutorials = new Link('/tutorials', 'Tutorials');
        const linkStack = new View(about, tutorials);

        this.view.child(titleStack, linkStack)

        return super.render();
    }
}

const App = new AppLoader();
App.register(new HomeController(), new HomeController());

export default App;