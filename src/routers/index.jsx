import { Route, Routes } from "react-router-dom";
import Layout from "../page/Layout";
import Home from "../page/Home"
import Search from "../page/Search"
import Detail from "../page/Detail"

const Routers = props => {
    const checkLogin = () => { }
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} onEnter={checkLogin} />
                <Route element={<Layout />}>
                    <Route exact path="/search" element={<Search />} onEnter={checkLogin} />
                    <Route exact path="/detail/:id" element={<Detail />} onEnter={checkLogin} />
                </Route>
            </Routes>
        </div>
    );
}

export default Routers