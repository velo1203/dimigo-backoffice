import { Route, Routes } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/sidebar/sidebar";
import Stay from "./pages/stay/stay";

function App() {
    return (
        <div id="main">
            <Sidebar />

            <Routes>
                <Route path="/" element={<Stay />} />
            </Routes>
        </div>
    );
}

export default App;
