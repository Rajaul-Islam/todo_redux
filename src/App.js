import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import Header from "./Component/Header";
import TodoList from "./Component/TodoList";
import { Footer } from "./Component/Footer";
import { Provider } from "react-redux";
import store from "./Component/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      {/* <!-- navbar --> */}
      <NavBar></NavBar>

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* <!-- header --> */}
        <Header></Header>
        <hr className="mt-4" />

      <TodoList></TodoList>

        <hr className="mt-4" />

        {/* <!-- footer --> */}
       <Footer></Footer>
      </div>
    </div>
    </Provider>
  );
}

export default App;
