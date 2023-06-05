import React,{useState,useEffect} from 'react';
import LoginForm from './LoginForm';
import NavBar from './NavBar';

function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
const token = localStorage.getItem('token');
if (token) {
setIsLoggedIn(true);
}
}, []);

const handleLogin = (token) => {
localStorage.setItem('token', token);
setIsLoggedIn(true);
};

const handleLogout = () => {
localStorage.removeItem('token');
setIsLoggedIn(false);
};

  return(
  <div>
{isLoggedIn ? (
<NavBar onLogout={handleLogout} />
) : (
<LoginForm onLogin={handleLogin} />
)}
</div>
  );
}
export default App;
