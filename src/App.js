import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./screens/login/login";
import SignUp from "./screens/signup/signup";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cadastrar" element={<SignUp/>}/>
                <Route path="/" element={<Login/>}>
                    <Route path="*" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);