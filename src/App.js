import "./App.css";
// import Coin from "./features/coin/Coin";
import Counter from "./features/counter/Counter";
import Theme from "./features/theme/Theme";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Coin /> */}
      <Theme />
    </div>
  );
}

export default App;
