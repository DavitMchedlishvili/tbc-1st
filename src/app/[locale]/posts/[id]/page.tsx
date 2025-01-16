// import NotFoundPage from "../../../../not-found";
// import "./index.css";
// import Like from "../../../../../../public/assets/like.png"
// import Dislike from "../../../../../../public/assets/dislike.png";
// import ReturnButton from "../../../components/ReturnButton/ReturnButton";

// const getPosts = async (id) => {
//   let res = await fetch(`https://dummyjson.com/posts/${id}`);
//   if (!res.ok) {
//     return null;
//   }
//   let post = await res.json();
//   return post || null;
// };

// export async function generateStaticParams() {
//   let postsData = await fetch("https://dummyjson.com/posts").then((res) =>
//     res.json()
//   );
//   let posts = postsData.posts;

//   return posts.map((post) => ({
//     params: { id: post.id }
//   }));
// }

// export default async function PostsDetails({ params }) {
//   let post = await getPosts(params.id);

//   if (!post) {
//     return <NotFoundPage />;
//   }

//   return (
//     <div className="single-PostContainer container">
//       <h1 className="single-PostTitle">{post.title}</h1>
//       <p className="single-PostBody">{post.body}</p>
//       <div className="single-PostReactions">
//         <div className="single-PostLike">
//           <img src={Like.src} alt="like" />
//           <p>{post.reactions.likes}</p>
//         </div>
//         <div className="single-PostDislike">
//           <img src={Dislike.src} alt="dislike" />
//           <p>{post.reactions.dislikes}</p>
//         </div>
//       </div>
//       <p className="single-PostTags">
//         Tags:{" "}
//         {post.tags.map((tag, index) => (
//           <span key={index}>#{tag}</span>
//         ))}{" "}
//       </p>
//       <p className="single-PostViews">views: {post.views}</p>
//       <div>
//         <ReturnButton />
//       </div>
//     </div>
//   );
// }



import NotFoundPage from "../../../not-found";
import "./index.css";
import Like from "../../../../../public/assets/like.png";
import Dislike from "../../../../../public/assets/dislike.png";
import ReturnButton from "../../components/ReturnButton/ReturnButton";

// Type definitions
interface Post {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: string[];
  views: number;
}

interface Params {
  params: {
    id: string; // The ID from the route will be a string
  };
}

// Fetch single post
const getPosts = async (id: string): Promise<Post | null> => {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) {
    return null;
  }
  const post: Post = await res.json();
  return post || null;
};

// Generate static paths for posts
export async function generateStaticParams(): Promise<{ params: { id: string } }[]> {
  const postsData = await fetch("https://dummyjson.com/posts").then((res) =>
    res.json()
  );
  const posts: Post[] = postsData.posts;

  return posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
}

// Post details component
const PostsDetails: React.FC<Params> = async ({ params }) => {
  const post = await getPosts(params.id);

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <div className="single-PostContainer container">
      <h1 className="single-PostTitle">{post.title}</h1>
      <p className="single-PostBody">{post.body}</p>
      <div className="single-PostReactions">
        <div className="single-PostLike">
          <img src={Like.src} alt="like" />
          <p>{post.reactions.likes}</p>
        </div>
        <div className="single-PostDislike">
          <img src={Dislike.src} alt="dislike" />
          <p>{post.reactions.dislikes}</p>
        </div>
      </div>
      <p className="single-PostTags">
        Tags:{" "}
        {post.tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}{" "}
      </p>
      <p className="single-PostViews">Views: {post.views}</p>
      <div>
        <ReturnButton />
      </div>
    </div>
  );
};

export default PostsDetails;
