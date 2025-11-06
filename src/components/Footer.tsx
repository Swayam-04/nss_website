import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/nss-logo.png" alt="NSS Logo" className="w-12 h-12 object-contain bg-white rounded-full" />
              <div>
                <h3 className="font-bold">National Service Scheme</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering youth through community service and nation building since 1969.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about-trident-nss" className="text-gray-400 hover:text-white transition-colors">About NSS</a></li>
              <li><a href="#programmes" className="text-gray-400 hover:text-white transition-colors">Programmes</a></li>
              <li><a href="#volunteers" className="text-gray-400 hover:text-white transition-colors">Volunteers</a></li>
              <li><a href="#success-stories" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">RTI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tenders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Downloads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Annual Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                Technology Corridor, Infocity, Chandrasekharpur, Bhubaneswar, Odisha 751021
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91-11-23384163</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">nsstrident@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/NTrident36420?t=gM7Wtjzm71Tr3LkjEuxDEQ&s=08" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-400 hover:bg-blue-300 rounded-full flex items-center justify-center transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/nss_trident?igsh=NXNqNzJlNDlkbTgy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={20} />
                </a>
                {/* YouTube removed per request */}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 TRIDENT National Service Scheme. All rights reserved. | Ministry of Youth Affairs & Sports, Government of India
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
