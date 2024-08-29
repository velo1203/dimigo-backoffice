import { Route, Routes } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/sidebar/sidebar";
import Stay from "./pages/stay/stay";
import Header from "./components/header/header";

function App() {
    return (
        <div id="main">
            <Sidebar />
            <div id="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Stay />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
