"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Settings() {
  const { data: session } = useSession();
  const [username, setUsername] = useState(session?.user?.name || "");
  const [email, setEmail] = useState(session?.user?.email || "");

  const handleSaveChanges = () => {
    alert("Changes saved successfully!");
  };

  return (
    <div className="flex h-screen bg-gray-100 p-6">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
                General
              </Link>
            </li>
            <li>
              <button onClick={() => signOut()} className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200 rounded">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Settings Panel */}
      <div className="flex-1 p-10 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-6">General Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Username</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </div>
          
          <button
            onClick={handleSaveChanges}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
