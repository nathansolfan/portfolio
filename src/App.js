import "./App.css";
import Register from "./Components/Register";

function App() {
  const handleRegistration = (email, password) => {
    console.log(email, password);
  };
  return (
    <div className="App">
      <h1>My portfolio</h1>
      <Register onRegister={handleRegistration} />
    </div>
  );
}

export default App;
