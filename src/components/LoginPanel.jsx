import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';

export default function LoginPanel({ onBackToHome, onSuccess }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Visual */}
      <div className="relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1974&auto=format&fit=crop"
          alt="Telkom University Library"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-red-700/60" />
        <div className="absolute inset-0 p-10 flex flex-col justify-between text-white">
          <div>
            <div className="w-12 h-12 rounded-md bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold">TU</div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Telkom University Open Library</h1>
            <p className="mt-2 text-white/90 max-w-lg">Access books, journals, databases, and more. Your gateway to research excellence.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 opacity-90">
            <div className="h-20 rounded-lg bg-white/10 border border-white/20" />
            <div className="h-20 rounded-lg bg-white/10 border border-white/20" />
            <div className="h-20 rounded-lg bg-white/10 border border-white/20" />
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <button onClick={onBackToHome} className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-700">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>

          <div className="mt-6 text-center">
            <div className="mx-auto w-12 h-12 rounded-md bg-red-600 text-white flex items-center justify-center font-bold">TU</div>
            <h2 className="mt-4 text-2xl font-semibold text-neutral-900">Telkom University Open Library</h2>
            <p className="mt-1 text-sm text-neutral-600">Sign in to access all resources.</p>
          </div>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-800">Email / Student ID</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="you@telkomuniversity.ac.id"
                  className="w-full h-11 px-3 pl-9 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                  required
                />
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-neutral-800">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full h-11 px-3 pr-10 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                  required
                />
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-neutral-500 hover:text-neutral-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-right">
                <a href="#" className="text-sm text-red-600 hover:text-red-700">Forgot Password?</a>
              </div>
            </div>

            <button
              type="submit"
              onClick={onSuccess}
              className="w-full h-11 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium"
            >
              Sign In
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px bg-neutral-200 flex-1"></div>
              <span className="text-xs text-neutral-500">or</span>
              <div className="h-px bg-neutral-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button type="button" className="h-11 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 flex items-center justify-center gap-2 text-sm font-medium">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Sign in with Google
              </button>
              <button type="button" className="h-11 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 flex items-center justify-center gap-2 text-sm font-medium">
                <img src="https://images.unsplash.com/photo-1570063578733-6a33b69d1439?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnR8ZW58MHwwfHx8MTc2MjMyNDU2OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Microsoft" className="w-5 h-5" />
                Sign in with Microsoft
              </button>
            </div>

            <div className="pt-4 text-center text-sm text-neutral-600">
              <a href="#" className="hover:text-neutral-800">Need Help?</a>
              <span className="mx-2">·</span>
              <a href="#" className="hover:text-neutral-800">Library Support</a>
              <span className="mx-2">·</span>
              <a href="#" className="hover:text-neutral-800">Browse as Guest</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
