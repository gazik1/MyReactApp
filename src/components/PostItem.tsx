import { MyButton } from "./UI/button/MyButton";
type IPost={
  id: number; title: string; body: string 
}
type Post = {
  number: number;
  post: IPost;
  remove:(post:IPost)=>void
};
export const PostItem = (props: Post) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={()=>props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};
