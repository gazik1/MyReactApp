import React, { useState } from 'react';

import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

type INewPost={
  id: number;
    title: string;
    body: string;
}
export const PostForm = ({create}:{create:(newPost: INewPost) => void}) => {
  const [post, setPost] = useState({ title: '', body: '' });
  
  const addNewPost = (event: React.MouseEvent) => {
    event.preventDefault();

    const newPost={
      ...post,id:Date.now()
    }

    create(newPost)
    setPost({ title: '', body: '' });
  };


  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPost({ ...post, title: event.target.value });
        }}
      />

      <MyInput
        value={post.body}
        type="text"
        placeholder="Описание поста"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPost({ ...post, body: event.target.value });
        }}
      />

      <MyButton onClick={addNewPost}> Создать пост</MyButton>
    </form>
  );
};
