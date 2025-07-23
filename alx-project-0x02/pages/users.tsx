import React from 'react';
import { GetStaticProps } from 'next';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';

interface UsersPageProps {
  users: UserProps[];
  
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
};
["getStaticProps()"]

export default UsersPage;
