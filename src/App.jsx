import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DiscoveryHub from './components/DiscoveryHub';
import LoginPanel from './components/LoginPanel';

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'login'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = { name: 'Budi' };

  if (view === 'login') {
    return (
      <LoginPanel
        onBackToHome={() => setView('home')}
        onSuccess={() => {
          setIsLoggedIn(true);
          setView('home');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen w-full bg-neutral-50">
      <Header
        isLoggedIn={isLoggedIn}
        user={user}
        onLoginClick={() => setView('login')}
        onNavigateHome={() => setView('home')}
      />
      <div className="mx-auto max-w-[1440px] flex">
        <Sidebar />
        <DiscoveryHub isLoggedIn={isLoggedIn} user={user} />
      </div>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-6 text-sm text-neutral-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Telkom University Open Library</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-neutral-700" href="#">Privacy</a>
            <a className="hover:text-neutral-700" href="#">Terms</a>
            <a className="hover:text-neutral-700" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
