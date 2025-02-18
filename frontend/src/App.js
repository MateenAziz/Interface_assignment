import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ProductList from "./screens/ProductList";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme";
import Login from "./screens/Login";
import SignUpScreen from "./screens/SignUpScreen";
import ProductView from "./screens/ProductView";

function App() {
  const isLoggedIn = () => {
    return !!localStorage.getItem("access_token");
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn() ? (
                <Navigate to="/products" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
