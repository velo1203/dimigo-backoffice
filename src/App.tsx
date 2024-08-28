import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main";
import Sidebar from "./components/sidebar/sidebar";

function App() {
    return (
        <>
            <Sidebar />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </>
    );
}

export default App;
