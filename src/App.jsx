import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppRoutes from "./Routes"; // Import dynamic routes

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">🎮 Fun Games Hub 🎮</h1>
      </header>

      <Container fluid className="main-content">
        <AppRoutes />  
      </Container>

      <footer className="app-footer">
        <p>© 2024 Fun Games Hub | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
