import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/sass/global.sass'
import Layout from "./page/Layout";
import Home from "./page/Home"
import Search from "./page/Search"
import Detail from "./page/Detail"

function App() {
  const checkLogin = () => { }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} onEnter={checkLogin} />
          <Route element={<Layout />}>
            <Route path="search" element={<Search />} onEnter={checkLogin} />
            <Route path="detail" element={<Detail />} onEnter={checkLogin} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
