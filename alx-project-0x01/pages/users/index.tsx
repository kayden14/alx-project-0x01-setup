import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Users Page</h1>
        <p className="mt-4">This is where user information will appear.</p>
      </main>
    </div>
  );
};

export default Users;
