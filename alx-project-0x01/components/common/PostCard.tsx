import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <article
      className="max-w-xl w-full mx-auto my-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
      aria-label={`Post by user ${userId}`}
    >
      <header className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{title || "Untitled Post"}</h2>
      </header>
      <section>
        <p className="text-gray-700">{body || "No content provided."}</p>
      </section>
      <footer className="mt-4 flex justify-between text-sm text-gray-500">
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </footer>
    </article>
  );
};

export default PostCard;
