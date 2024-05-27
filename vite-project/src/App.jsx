import "./App.css";
import Login from "./components/login/Login";
import Cars from "./components/car/Cars";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Login />
      <Cars />
    </>
  );
}

export default App;
