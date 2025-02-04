import {
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router";
import NotFound from "./pages/NotFound";
import RootLayout from "./layout/RootLayout";
import "./App.css";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductDetailLayout from "./layout/ProductDetailLayout";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route
                    path="/product/:id"
                    element={<ProductDetailLayout />}
                >
                    <Route
                        index
                        element={<ProductDetailPage />}
                    />
                    <Route
                        path="product/:id"
                        element={<ProductDetailPage />}
                    />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
