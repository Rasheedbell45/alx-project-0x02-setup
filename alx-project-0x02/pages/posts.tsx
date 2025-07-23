import { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts: PostProps[] = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formattedPosts);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
}

import React from 'react';
import { GetStaticProps } from 'next';
import PostCard from '@/components/common/PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
