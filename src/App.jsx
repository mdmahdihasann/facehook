import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import PraviteRouter from "./routes/PraviteRouter";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PraviteRouter />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProfilePage />} path="/em" />
        </Route>

        <Route element={<LoginPage />} path="/login" />

        <Route element={<RegisterPage />} path="/register" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
