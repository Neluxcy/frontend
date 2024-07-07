"use client";
import React, { useState } from 'react';

export default function ChangeProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null); // State for storing the uploaded image file

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic, including handling file upload (profileImage)
    console.log('Form submitted:', { name, email, profileImage });
    // You can add your logic to send data to the backend here
  };

  // Function to handle file upload and update state
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
        <h1 className="font-bold text-2xl text-center mb-6">Change Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="input input-bordered input-accent w-full"
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input input-bordered input-accent w-full"
            type="email"
            placeholder="Email Address"
          />
          <div className="flex items-center gap-4">
            <label htmlFor="profileImage" className="btn btn-outline btn-accent">
              Upload Profile Image
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            {profileImage && (
              <span>{profileImage.name}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
