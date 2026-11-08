import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./component/layout";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Overview from "./pages/Overview";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/overview" element={<Overview />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;