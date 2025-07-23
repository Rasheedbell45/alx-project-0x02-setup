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

import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      </main>
    </>
  );
}
