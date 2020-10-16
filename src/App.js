/* eslint-disable react/style-prop-object */
import React from 'react';
// import logo from './asset/logo.png';
import logo from './asset/logo.png';
import man from './asset/man.png';
import info from './asset/information.png';
import call from './asset/call.png';
import gmail from './asset/gmail.png';
import calll from './asset/calll.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="nav">
        <li>
          <a href="0">
            <img src={logo} id="logo" alt="" />
          </a>
        </li>
        <li>
          <h3 className="top">m_thwm24</h3>
          {/* <img src={logo} alt="" /> */}
        </li>
      </div>
      <div className="main">
        <div className="col a">
          <span id="text-a">
            <b>Hai,</b>
          </span>
          saya....
          <br />
          <span id="text-b">M. Fathin Fawwaz Ammar</span>
          <br />
          sebagai
          <span id="text-c">
            <b> Front End Developer</b>
          </span>
          <a href="#about" className="a">
            <div className="button">Tentang Saya</div>
          </a>
        </div>
        <div className="col">
          <img src={man} id="poto" alt="" />
        </div>
      </div>
      <div id="about" className="about">
        <img src={info} alt="information" className="icon" />
        <p>
          Saya
          <b> Ammar </b>
          dari Jember, Jawa Timur. Mahasiswa Telkom University semester 5
          jurusan D3 Rekayasa Perangkat Aplikasi. Saya berharap apa yang saya
          lakukan satu langkah menuju kesuksesan dan pastinya berguna bagi diri
          sendiri dan orang lain.
        </p>
      </div>
      <div className="contact">
        <img src={call} alt="contact" className="icon" />
        <table className="identity">
          <tr>
            <td>
              <img src={gmail} alt="contact" className="icona" />
            </td>
            <td>fawwazammar87@gmail.com</td>
          </tr>
          <tr>
            <td>
              <img src={calll} alt="contact" className="icona" />
            </td>
            <td>+62 823 3062 5523</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default App;
