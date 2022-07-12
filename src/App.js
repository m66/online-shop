import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Content />}>

        </Route>
      </Routes>
       */}
      <Header />
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;
