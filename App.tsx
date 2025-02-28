import {Provider} from "react-redux";
import {store} from "./store/store";
import RootLayout from "./app/_layout";
import TabLayout from "./app/(tabs)/_layout";
import Login from "./app";

const App = () => {
  return (
    <Login/>
  )
}

export default App