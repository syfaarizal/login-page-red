import { useState, useEffect } from 'react';
import { Moon, Sun, User, Lock, Mail, ArrowRight, Github, Chrome } from 'lucide-react';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [animate, setAnimate] = useState(false);

  // Efek animasi saat berpindah form
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimate(true), 0);
    const timer2 = setTimeout(() => setAnimate(false), 500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isLogin]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>

      {/* Main Container */}
      <div className="min-h-screen w-full flex items-center justify-center transition-colors duration-500 bg-gray-100 dark:bg-[#050505] relative overflow-hidden font-sans">
        
        {/* Background Decorative Blobs (Ambient Light) */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#800000] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 dark:opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#800000] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 dark:opacity-40 animate-pulse delay-1000"></div>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleMode}
          className="absolute top-6 right-6 p-3 rounded-full bg-white dark:bg-black shadow-lg border border-gray-200 dark:border-[#333] text-[#800000] hover:scale-110 transition-transform duration-300 z-50"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* The Card Wrapper */}
        <div className="relative group w-full max-w-[420px] mx-4">
          
          {/* Animated Gradient Border (The Neon Effect) - RESTORED */}
          <div className="absolute -inset-[3px] bg-gradient-to-r from-transparent via-[#800000] to-transparent rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-border-spin"></div>

          {/* Actual Card Content */}
          <div className="relative bg-white dark:bg-[#0a0a0a] rounded-2xl shadow-2xl overflow-hidden transition-colors duration-500 min-h-[550px] flex flex-col border border-gray-200 dark:border-[#333]">
            
            {/* Header Area */}
            <div className="pt-10 pb-6 px-10 text-center z-10">
              <h2 className="text-3xl font-bold tracking-tighter text-[#800000] dark:text-white mb-2 transition-colors">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {isLogin ? 'Enter your details to access your space' : 'Join us for an exclusive experience'}
              </p>
            </div>

            {/* Form Section */}
            <div className={`flex-1 px-10 pb-10 flex flex-col justify-center transition-all duration-500 ${animate ? 'opacity-50 scale-95 blur-[1px]' : 'opacity-100 scale-100 blur-0'}`}>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name Input (Sign Up Only) */}
                {!isLogin && (
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#800000] transition-colors duration-300" size={20} />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#333] text-gray-900 dark:text-white rounded-xl py-3 pl-10 pr-4 outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>
                )}

                {/* Email Input */}
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#800000] transition-colors duration-300" size={20} />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#333] text-gray-900 dark:text-white rounded-xl py-3 pl-10 pr-4 outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>

                {/* Password Input */}
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#800000] transition-colors duration-300" size={20} />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-[#333] text-gray-900 dark:text-white rounded-xl py-3 pl-10 pr-4 outline-none focus:border-[#800000] focus:ring-1 focus:ring-[#800000] transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>

                {/* Forgot Password (Login Only) */}
                {isLogin && (
                  <div className="flex justify-end">
                    <a href="#" className="text-xs font-medium text-gray-500 hover:text-[#800000] transition-colors">
                      Forgot Password?
                    </a>
                  </div>
                )}

                {/* Action Button */}
                <button className="w-full bg-[#800000] hover:bg-[#600000] text-white font-bold py-3.5 rounded-xl shadow-[0_10px_20px_-10px_rgba(128,0,0,0.5)] hover:shadow-[0_15px_25px_-5px_rgba(128,0,0,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                  {isLogin ? 'Sign In' : 'Sign Up'}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

              </form>

              {/* Social Login */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-[#333]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-[#0a0a0a] text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center py-2.5 border border-gray-200 dark:border-[#333] rounded-lg hover:bg-gray-50 dark:hover:bg-[#111] transition-colors group">
                    <Github size={20} className="text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="flex items-center justify-center py-2.5 border border-gray-200 dark:border-[#333] rounded-lg hover:bg-gray-50 dark:hover:bg-[#111] transition-colors group">
                    <Chrome size={20} className="text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer / Toggle Switch */}
            <div className="bg-gray-50 dark:bg-[#0f0f0f] py-4 text-center border-t border-gray-100 dark:border-[#222]">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="font-bold text-[#800000] hover:underline transition-all"
                >
                  {isLogin ? 'Sign Up' : 'Log In'}
                </button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;