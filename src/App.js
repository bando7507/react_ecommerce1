import Pages from "./home/views/Pages";
import '../src/style/main.scss'
import { Provider } from "react-redux";
// import store2 from "./controller2/store";
import store from "./controller/store";


function App() {
  return (
    <>
    <Provider store={store}>
      <Pages />
    </Provider>
    </>
  );
}

export default App;
