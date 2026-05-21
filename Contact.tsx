import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Globe, Rocket, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <p className="text-xs font-bold tracking-[0.4em] text-blue-400 mb-6 uppercase">Contact Us</p>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">Connect with ORION.</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">First Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 py-4 px-4 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Last Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 py-4 px-4 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Email Address</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 py-4 px-4 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Subject</label>
                <select className="w-full bg-black/50 border border-white/10 py-4 px-4 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Media Relations</option>
                  <option>Careers</option>
                  <option>Partnerships</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Message</label>
                <textarea rows={6} className="w-full bg-black/50 border border-white/10 py-4 px-4 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-white text-black font-bold tracking-[0.2em] text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-3">
                SEND MESSAGE <Send size={16} />
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h3 className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase mb-8">Corporate Headquarters</h3>
              <div className="flex gap-6 items-start mb-8">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-gray-400" size={20} />
                </div>
                <div>
                  <p className="text-xl font-bold text-white mb-2">Detroit, Michigan</p>
                  <p className="text-gray-400 leading-relaxed">
                    1200 Innovation Way, Suite 500<br />
                    Detroit, MI 48226<br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start mb-8">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-gray-400" size={20} />
                </div>
                <div>
                  <p className="text-xl font-bold text-white mb-2">Electronic Communication</p>
                  <p className="text-gray-400">info@orion-aerospace.com</p>
                  <p className="text-gray-400">media@orion-aerospace.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-gray-400" size={20} />
                </div>
                <div>
                  <p className="text-xl font-bold text-white mb-2">Voice</p>
                  <p className="text-gray-400">+1 (313) 555-0198</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10">
              <h3 className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase mb-8">Follow Our Journey</h3>
              <div className="flex gap-4">
                <SocialLink icon={<Globe size={20} />} label="Website" />
                <SocialLink icon={<Rocket size={20} />} label="Fleet" />
                <SocialLink icon={<Navigation size={20} />} label="Missions" />
              </div>
            </div>

            <div className="mt-auto p-8 border border-blue-500/20 bg-blue-500/5">
              <h4 className="text-lg font-bold text-white mb-4">Careers at ORION</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Interested in shaping the future of space exploration? We're always looking for talented individuals to join our team.
              </p>
              <button className="text-xs font-bold tracking-widest text-blue-400 hover:text-white transition-colors uppercase">
                View Open Positions →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, label }: { icon: any; label: string }) => (
  <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
    <span className="sr-only">{label}</span>
    {icon}
  </a>
);

export default Contact;
