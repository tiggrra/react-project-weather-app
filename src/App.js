import Weather from "./Weather";

import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather/>
     <footer>
     <div className="Footer">
      <p>
        Open-source code by{" "}
        <a href="https://github.com/tiggrra/react-project-weather-app" target="_blank" rel="noreferrer">
          tiggrra
        </a>
      </p>
    </div>
     </footer>
      </div>
    </div>
  );
}

export default App;
