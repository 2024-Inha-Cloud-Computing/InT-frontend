import logo from './InT.png';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 배포시 EC2 주소가 들어가는 자리이다.
    axios.get('http://localhost:8000')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <button className="login-button">로그인</button>
        <p>아직 회원이 아니신가요?</p>
        <button className="signup-button">회원가입</button>
      </header>
    </div>
  );
}

export default App;
