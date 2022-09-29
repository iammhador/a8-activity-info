import "./App.css";
import Activities from "./Components/Activities/Activities";
import Blog from "./Components/Blog/Blog";
import BreakTime from "./Components/BreakTime/BreakTime";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Activities />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
