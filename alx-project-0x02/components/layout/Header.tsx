import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <nav>
        <Link href="/home" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
