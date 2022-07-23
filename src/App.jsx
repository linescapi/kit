import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

export const App = () => {
  return (
    <Router>
      <MainPage />
    </Router>
  );
};
