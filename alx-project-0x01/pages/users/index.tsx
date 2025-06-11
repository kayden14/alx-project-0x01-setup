// pages/users/index.tsx

import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  users: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>(users);

  const handleAddUser = (newUser: UserData) => {
    setUserList([newUser, ...userList]);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-full"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {userList.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <h3 className="font-bold text-lg">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm">{user.phone}</p>
              <p className="text-sm text-gray-400">{user.company.name}</p>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users },
  };
}

export default Users;
