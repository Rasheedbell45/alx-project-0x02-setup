import React from 'react';

const Home: React.FC = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to the Home Page</h1>
    </main>
  );
};

export default Home;

import React from 'react';
import Card from '@/components/common/Card';

const Home: React.FC = () => (
  <main style={{ padding: '2rem' }}>
    <h1>Welcome to the Home Page</h1>
    <Card title="Card 1" content="This is the content of card 1." />
    <Card title="Card 2" content="This card contains different content." />
    <Card title="Card 3" content="Cards are reusable components." />
  </main>
);

export default Home;
