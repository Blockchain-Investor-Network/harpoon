import './App.css';
import LogoutButton from './components/LogoutButton';
import LoginButton from './components/LoginButton';
import Main from './components/Main';
import { useMoralis } from "react-moralis";
import SvgWelcome from './components/Welcome';

function App() {
  const { isAuthenticated } = useMoralis();

  return (
    <div className="App">
      <SvgWelcome />
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <Main />}
      {isAuthenticated && <LogoutButton />}
    </div>
  );
}

export default App;
