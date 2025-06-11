import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-sm text-gray-500">{email}</p>
      <p className="text-sm text-gray-500">{phone}</p>
      <p className="text-sm text-blue-500 underline">{website}</p>
      <div className="mt-2 text-sm text-gray-700">
        <strong>Company:</strong> {company.name} <br />
        <strong>Address:</strong> {address.street}, {address.city}
      </div>
    </div>
  );
};

export default UserCard;
