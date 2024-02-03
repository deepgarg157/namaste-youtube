import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utility/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Downloads from "./components/Downloads";
import History from "./components/History";

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Body />,
      children : [
        {
          path : "/",
          element : <MainContainer />
        },
        {
          path : "/watch",
          element : <WatchPage />
        },
        {
          path : '/demo',
          element : <Demo />
        },
        {
          path : '/downloads',
          element : <Downloads />
        },
        {
          path : '/history',
          element : <History />
        }

      ]
    }
  ])

  return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
  );
}

export default App;
