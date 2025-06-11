// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<Omit<UserData, "id">>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const [_, key] = name.split(".");
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith("company.")) {
      const [_, key] = name.split(".");
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const [_, key] = name.split(".");
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    onSubmit({ ...user, id: Date.now() });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <div className="grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto">
          <input name="name" placeholder="Name" value={user.name} onChange={handleChange} className="border p-2 rounded" />
          <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="border p-2 rounded" />
          <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="border p-2 rounded" />
          <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="border p-2 rounded" />
          <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="border p-2 rounded" />

          {/* Address Fields */}
          <input name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="border p-2 rounded" />
          <input name="address.suite" placeholder="Suite" value={user.address.suite} onChange={handleChange} className="border p-2 rounded" />
          <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="border p-2 rounded" />
          <input name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={handleChange} className="border p-2 rounded" />

          {/* Geo */}
          <input name="geo.lat" placeholder="Latitude" value={user.address.geo.lat} onChange={handleChange} className="border p-2 rounded" />
          <input name="geo.lng" placeholder="Longitude" value={user.address.geo.lng} onChange={handleChange} className="border p-2 rounded" />

          {/* Company */}
          <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="border p-2 rounded" />
          <input name="company.catchPhrase" placeholder="Catchphrase" value={user.company.catchPhrase} onChange={handleChange} className="border p-2 rounded" />
          <input name="company.bs" placeholder="BS" value={user.company.bs} onChange={handleChange} className="border p-2 rounded" />
        </div>

        <div className="flex justify-end mt-4 gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
