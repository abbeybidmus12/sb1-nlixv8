import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="mb-4">
          <strong>Email:</strong> {user.email}
        </div>
        {/* Add more profile information here */}
      </div>
    </div>
  );
};

export default Profile;