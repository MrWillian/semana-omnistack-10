import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">            
            <label htmlFor="github_username">Usuário do Github</label>
            <input type="text" name="github_username" id="github_username" 
            value={github_username} onChange={e => setGithubUsername(e.target.value)}
            required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" 
            value={techs} onChange={e => setTechs(e.target.value)}
            required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" 
              value={latitude} onChange={e => setLatitude(e.target.value)} required />
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" 
              value={longitude} onChange={e => setLongitude(e.target.value)} required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50757994?v=4" alt="MrWillian" />
              <div className="user-info">
                <strong>Willian Marciel</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>Mobile Developer</p>
            <a href="https://github.com/MrWillian">Acessar Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50757994?v=4" alt="MrWillian" />
              <div className="user-info">
                <strong>Willian Marciel</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>Mobile Developer</p>
            <a href="https://github.com/MrWillian">Acessar Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50757994?v=4" alt="MrWillian" />
              <div className="user-info">
                <strong>Willian Marciel</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>Mobile Developer</p>
            <a href="https://github.com/MrWillian">Acessar Perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50757994?v=4" alt="MrWillian" />
              <div className="user-info">
                <strong>Willian Marciel</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>Mobile Developer</p>
            <a href="https://github.com/MrWillian">Acessar Perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
