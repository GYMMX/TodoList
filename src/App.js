import { Route } from "react-router-dom";
import Todo from "./pages/Todo";
import RestApi from "./pages/RestApi";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Todo} />
      <Route path="/restApi" exact component={RestApi} />
    </div>
  );
}

export default App;
