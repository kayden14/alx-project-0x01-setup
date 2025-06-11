const PostCard: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{body}</p>
  </div>
);

export default PostCard;
