import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoutes from "./routes/PageRoutes";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth top="450" style={{boxShadow: "0 0 15px grey"}}/>
      <PageRoutes />
    </div>
  );
}

export default App;
