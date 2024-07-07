"use client";
import React, { useState } from 'react';

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords and handle submission logic here
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Form submitted:', { currentPassword, newPassword });
    // You can add your logic to send data to the backend here
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
        <h1 className="font-bold text-2xl text-center mb-6">Change Password</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setCurrentPassword(e.target.value)}
            value={currentPassword}
            className="input input-bordered input-accent w-full"
            type="password"
            placeholder="Current Password"
          />
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            className="input input-bordered input-accent w-full"
            type="password"
            placeholder="New Password"
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="input input-bordered input-accent w-full"
            type="password"
            placeholder="Confirm New Password"
          />
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
