import { Provider } from 'react-redux';
import { store} from "./components/store";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExpenseTracker } from "./components/ExpenseTracker";
import { Home } from "./components/Home";

function App() {
    return (
        <Provider store={store}>
            <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/expenses" element={<ExpenseTracker />} />
                    </Routes>
            </Router>
        </Provider>
    );
}

export default App;