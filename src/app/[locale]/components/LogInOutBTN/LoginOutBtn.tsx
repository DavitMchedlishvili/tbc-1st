"use client"
import { useLocale } from 'next-intl';
import React, { useEffect, useState } from 'react'

export const LoginOutBtn = () => {

  const [session, setSession] = useState<boolean | null>(null); 
  const locale = useLocale();

  useEffect(() => {
  
    const checkAuthStatus = async () => {
      const response = await fetch(`/${locale}/api/auth/status`);
      const data = await response.json();

      if (data.authenticated) {
        setSession(true);
      } else {
        setSession(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    const response = await fetch(`/${locale}/api/auth/logout`, {
      method: "POST",
    });

    const data = await response.json();

    if (!response.ok) {
      console.log('Logout failed. Error message:', data.message);
    } else {
      console.log('Logout successful:', data.message);
      // Redirect to the login page
      window.location.href = `/${locale}/login`; 
    }
  };

  return (
    <div data-cy="login-logout" className='profile-btn'>
    {session ? (
      <button onClick={handleLogout} className="btn-logout">
        Logout
      </button>
    ) : (
      <a href={`/${locale}/login`} className="btn-login">
        Login
      </a>
    )}
  </div>
  )
}
