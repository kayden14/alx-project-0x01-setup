import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData } from "@/interfaces";
import { useState } from "react";

// ✅ Correct interface for page props
interface PostsPageProps {
  posts: PostData[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postList, setPostList] = useState<PostData[]>(posts);
  const [post, setPost] = useState<PostData | null>(null); // ✅ Added line

  const handleAddPost = (newPost: PostData) => {
    const newId = postList.length + 1;
    setPostList([{ ...newPost, id: newId }, ...postList]);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {postList
            .filter((post) => post.id !== undefined)
            .map(({ title, body, userId, id }) => (
              <PostCard
                key={id}
                title={title}
                body={body}
                userId={userId}
                id={id as number}
              />
            ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
