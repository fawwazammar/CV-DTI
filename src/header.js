import React, { useState } from 'react';

const Header = () => {
  // const Header = (prop) => {
  const [nama, setNama] = useState('Fawwaz');
  // const { nama } = props;
  return (
    <>
      <h2>Header</h2>
      <h3>{`Nama saya ${nama}`}</h3>
      <button
        type="submit"
        onClick={() => {
          setNama('Ammar');
        }}
      >
        Ganti Nama
      </button>
    </>
  );
};

export default Header;
