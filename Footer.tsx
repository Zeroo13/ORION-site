import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Rocket, Navigation } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold tracking-[0.3em] mb-6">ORION</h2>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Humanity was never meant to remain on Earth. We are pioneers of the new frontier, 
            dedicated to the exploration of the stars and the preservation of human curiosity.
          </p>
          <div className="flex space-x-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Rocket size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Navigation size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest text-white mb-6 uppercase">Exploration</h4>
          <ul className="space-y-4">
            <li><Link to="/missions" className="text-gray-400 hover:text-white transition-colors text-sm">Missions</Link></li>
            <li><Link to="/rockets" className="text-gray-400 hover:text-white transition-colors text-sm">Rockets</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">Technology</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-widest text-white mb-6 uppercase">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Orion</Link></li>
            <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors text-sm">News</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-widest uppercase">
        <p>© 2026 ORION AEROSPACE CORPORATION. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
