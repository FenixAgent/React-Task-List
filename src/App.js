import "./styles.css";
import Menu from "./pages/Menu";
import Header from "./components/Headers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      {document.body.addEventListener("keypress", (e) => {
        console.log("You pushed enter");
      })}
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </Router>
      {/* <Header /> */}
    </div>
  );
}
