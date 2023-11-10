import { useEffect, useState } from 'react';

import { PostList } from './components/PostList';

import { PostForm } from './components/PostForm';

import './styles/App.css';
import { PostFilter } from './components/PostFilter';
import { MyModal } from './components/UI/MyModal/MyModal';
import { MyButton } from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import { PostService } from './API/PostService';
import { Loader } from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
type INewPost = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState<never[] | INewPost[]>([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const responce = await PostService.getAll();
    setPosts(responce.data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost: INewPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: INewPost) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
        <h1>
          Произошла ошибка ${postError}
        </h1>}
      {isPostsLoading
        ? <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 50
            }}>
            <Loader />
          </div>
        : <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="Посты по JS"
          />}
    </div>
  );
}
export { App };
