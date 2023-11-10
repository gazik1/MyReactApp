import { PostItem } from './PostItem';
import { TransitionGroup,CSSTransition  } from 'react-transition-group';
type Post = {
  id: number;
  title: string;
  body: string;
};
type Posts = {
  posts: Post[];
  title: string;
  remove: (post: Post) => void;
};
export const PostList = ({ posts, title, remove }: Posts) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}> Посты не были найдены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition  key={post.id} timeout={500} classNames="post">
              <PostItem 
                remove={remove}
                number={index + 1}
                post={post}
               
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};
