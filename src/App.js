import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utility/store"

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Body />
        </div>
      </Provider>
  );
}

export default App;
