import './App.css';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import Main from './components/Main';
import { useMoralis } from "react-moralis";

function App() {
  const { isAuthenticated } = useMoralis();

  return (
    <div className="App">
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <Main />}
      {isAuthenticated && <LogoutButton />}
    </div>
  );
}

export default App;
