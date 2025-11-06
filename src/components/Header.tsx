import { Menu, Search, Globe, X, User, LogOut, RefreshCw, Contrast } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Login from './Login';

export default function Header() {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [fontSize, setFontSize] = useState(16);

  const navItems = [
    'Home',
    'About NSS',
    'Organisation',
    'Programmes',
    'Volunteers',
    'Photo Gallery',
    'Success Stories',
    'Newsletter',
    'Contact'
  ];

  const increaseFontSize = () => {
    if (fontSize < 20) {
      setFontSize(fontSize + 2);
      document.documentElement.style.fontSize = `${fontSize + 2}px`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
      document.documentElement.style.fontSize = `${fontSize - 2}px`;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-8">
              <div className="text-sm">
                <div className="text-gray-700 font-semibold">भारत सरकार</div>
                <div className="text-xs text-gray-600">GOVERNMENT OF INDIA</div>
              </div>
              <div className="hidden md:block text-sm">
                <div className="text-gray-700 font-semibold">राष्ट्रीय सेवा योजना</div>
                <div className="text-xs text-gray-600">NATIONAL SERVICE SCHEME</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Social Media Icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/NTrident36420?t=gM7Wtjzm71Tr3LkjEuxDEQ&s=08" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://www.instagram.com/nss_trident?igsh=NXNqNzJlNDlkbTgy" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              {/* YouTube link removed per request */}

              <div className="hidden lg:flex items-center space-x-2 ml-4 border-l pl-4 border-gray-300">
                <button className="text-gray-600 hover:text-blue-600" title="Refresh">
                  <RefreshCw size={20} />
                </button>
                <button className="text-gray-600 hover:text-blue-600" title="High Contrast">
                  <Contrast size={20} />
                </button>
                <button className="text-gray-600 hover:text-blue-600" title="Search">
                  <Search size={20} />
              </button>
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="text-gray-600 hover:text-blue-600" 
                  title="Login"
                >
                  <User size={20} />
              </button>
                <button 
                  onClick={toggleLanguage}
                  className="text-sm text-gray-700 hover:text-blue-600 font-medium px-2 py-1 border border-gray-300 rounded"
                >
                  {language === 'en' ? 'हिन्दी' : 'English'}
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b-2 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              {/* NSS Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="/nss-logo.png" 
                  alt="NSS Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Title */}
              <div>
                <h1 className="text-blue-900 text-xl font-bold">राष्ट्रीय सेवा योजना</h1>
                <h2 className="text-blue-800 text-2xl font-bold">National Service Scheme</h2>
                <p className="text-sm text-gray-700">युवा कार्यक्रम और खेल मंत्रालय</p>
                <p className="text-sm font-semibold text-gray-800">Ministry of Youth Affairs and Sports</p>
                <p className="text-xs text-gray-600">भारत सरकार</p>
                <p className="text-xs font-medium text-gray-700">Government of India</p>
              </div>
            </div>

            {/* Campaign Logos */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Azadi Ka Amrit Mahotsav */}
              <div className="text-center">
                <div className="text-xs font-semibold text-orange-600">75 Years</div>
                <div className="text-xs text-gray-700">Azadi Ka</div>
                <div className="text-xs text-gray-700">Amrit Mahotsav</div>
                <div className="text-xs text-orange-600">08th-16th August 2023</div>
              </div>

              {/* Meri Maati Mera Desh */}
              <div className="text-center border-l pl-4 border-gray-300">
                <div className="flex items-center space-x-1">
                  <div className="text-xs font-semibold text-green-700">मेरी माटी</div>
                  <div className="text-xs font-semibold text-orange-600">मेरा देश</div>
                </div>
                <div className="text-xs text-gray-700">Meri Maati Mera Desh</div>
              </div>

              {/* Ek Bharat Shreshtha Bharat */}
              <div className="text-center border-l pl-4 border-gray-300">
                <div className="text-xs font-semibold text-blue-800">एक भारत श्रेष्ठ भारत</div>
                <div className="text-xs text-gray-700">Ek Bharat Shreshtha Bharat</div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-blue-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
            </div>
          </div>

      {/* Navigation Bar */}
      <nav className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:space-x-1 py-2`}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 hover:bg-blue-700 rounded transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            {user && (
              <li className="lg:ml-auto">
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-700 rounded transition-colors text-sm"
                >
                  <LogOut size={16} />
                  <span>Sign Out ({user.email})</span>
                </button>
              </li>
            )}
            </ul>
        </div>
      </nav>

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
