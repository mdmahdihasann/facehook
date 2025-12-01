import PostsHeader from "./PostsHeader";
import PostsBody from "./PostsBody";
import PostsAction from "./PostsAction";
import PostsComment from "./PostsComment";

const PostsCard = ({post}) => {
  return (
    <>
    <article class="card mt-6 lg:mt-8">
      <PostsHeader post={post} />
      <PostsBody post={post} />
      <PostsAction post={post}/>
      <PostsComment post={post} />
      </article>
    </>
  );
};

export default PostsCard;
