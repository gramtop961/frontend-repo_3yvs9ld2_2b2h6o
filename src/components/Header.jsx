import { useState } from 'react';
import { Search, ChevronDown, LogIn, User, BookOpen } from 'lucide-react';

export default function Header({ isLoggedIn, user, onLoginClick, onNavigateHome }) {
  const [scope, setScope] = useState('All Resources');
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const scopes = [
    'All Resources',
    'Books & E-books',
    'Journals',
    'Databases',
  ];

  return (
    <header className="w-full border-b border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-20">
      <div className="mx-auto max-w-[1200px] px-6 py-3 flex items-center gap-4">
        {/* Logo & Title */}
        <button onClick={onNavigateHome} className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-md bg-red-600 text-white flex items-center justify-center font-bold">
            TU
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-neutral-900">Telkom University</span>
            <span className="text-sm text-neutral-500 -mt-0.5">Open Library</span>
          </div>
        </button>

        {/* Search */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[680px] flex items-stretch rounded-lg border border-neutral-300 focus-within:border-neutral-400 overflow-hidden bg-white">
            {/* Scope dropdown */}
            <div className="relative">
              <button
                className="h-11 px-3 flex items-center gap-2 text-sm text-neutral-700 hover:bg-neutral-50"
                onClick={() => setMenuOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={menuOpen}
              >
                <span className="hidden sm:block">{scope}</span>
                <ChevronDown className="w-4 h-4 text-neutral-500" />
              </button>
              {menuOpen && (
                <ul
                  className="absolute z-30 mt-1 w-56 rounded-md border border-neutral-200 bg-white shadow-lg"
                  role="listbox"
                >
                  {scopes.map((s) => (
                    <li key={s}>
                      <button
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-neutral-50 ${
                          scope === s ? 'text-red-600 font-medium' : 'text-neutral-700'
                        }`}
                        onClick={() => {
                          setScope(s);
                          setMenuOpen(false);
                        }}
                        role="option"
                        aria-selected={scope === s}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${scope.toLowerCase()}...`}
              className="h-11 flex-1 px-3 outline-none text-neutral-800 placeholder:text-neutral-400"
            />
            <button className="h-11 px-4 bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 shrink-0">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* User Area */}
        <div className="ml-auto relative">
          {!isLoggedIn ? (
            <button
              onClick={onLoginClick}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50"
              >
                <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center">
                  <User className="w-4 h-4 text-neutral-600" />
                </div>
                <span className="text-sm text-neutral-800">Hi, {user?.name || 'User'}</span>
                <ChevronDown className="w-4 h-4 text-neutral-500" />
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md border border-neutral-200 bg-white shadow-lg z-30">
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-neutral-50 flex items-center gap-2">
                    <User className="w-4 h-4" /> My Account
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-neutral-50 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> My Borrows
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm hover:bg-neutral-50 text-red-600">Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
