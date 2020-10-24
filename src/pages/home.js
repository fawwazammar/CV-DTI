import React, { useState } from 'react';
import './styleHome.css';
// import { man, information, call, calll, gmail } from '../asset';
import { man, information, call } from '../asset';

const Home = () => {
  const [contact, setContact] = useState('082330625523');

  return (
    <div className="App">
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
        <img src={information} alt="information" className="icon" />
        <p>
          Saya
          <b> Ammar </b>
          dari Jember, Jawa Timur. Mahasiswa Telkom University semester 5
          jurusan D3 Rekayasa Perangkat Aplikasi. Saya berharap apa yang saya
          lakukan satu langkah menuju kesuksesan dan pastinya berguna bagi diri
          sendiri dan orang lain.
        </p>
      </div>
      <div className="contact" id="contact">
        <a
          href="#contact"
          onClick={() => {
            return setContact(
              contact === '082330625523'
                ? 'fawwazammar87@gmail.com'
                : '082330625523'
            );
          }}
        >
          <img src={call} alt="contact" className="icon" />
        </a>
        <p>{contact}</p>
        {/* <table className="identity">
          <tr id="email">
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
        </table> */}
      </div>
    </div>
  );
};

export default Home;
