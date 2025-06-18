import React from 'react';

const ProfilePage = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mon profil</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Nom complet" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">Mettre à jour</button>
      </form>
    </div>
  );
};

export default ProfilePage;