import "./App.css";
import Background from "./components/Background";
import Collectible from "./components/Collectible";
import Divider from "./components/Divider";
import Explore from "./components/Explore";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Background />
      <div className="main-content">
        <Explore />
        <Divider />
        <Collectible />
      </div>
    </div>
  );
}

export default App;
