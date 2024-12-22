import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <>
      <div>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </div>
    </>
  );
}
export default App;
