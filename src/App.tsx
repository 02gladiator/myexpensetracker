import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExpenseTracker } from "./components/ExpenseTracker";
import { Home } from "./components/Home";

function App() {
    return (
            <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/expenses" element={<ExpenseTracker />} />
                    </Routes>
            </Router>
    );
}

export default App;