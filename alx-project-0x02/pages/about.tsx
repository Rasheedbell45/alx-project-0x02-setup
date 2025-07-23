import React from 'react';
import Button from '@/components/common/Button';

const About: React.FC = () => {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      
      <div className="flex flex-col gap-4">
        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Button</Button>
      </div>
    </main>
  );
};

export default About;
