import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background Placeholder - in a real app this would be a video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2072" 
            alt="Space Hero" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm md:text-base tracking-[0.5em] text-blue-400 mb-6 uppercase"
          >
            Born to Enter the Stars
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight"
          >
            Humanity was never meant <br className="hidden md:block" /> to remain on Earth.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/missions" className="group relative px-8 py-4 bg-white text-black font-bold tracking-widest text-sm overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">EXPLORE MISSIONS</span>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
            </Link>
            <Link to="/rockets" className="px-8 py-4 border border-white/20 text-white font-bold tracking-widest text-sm hover:bg-white/10 transition-all">
              VIEW FLEET
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </motion.div>
      </section>

      {/* Countdown & Stats Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">Next Launch</h2>
              <div className="flex flex-col">
                <div className="flex gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-bold text-white mb-2">04</div>
                    <div className="text-[10px] tracking-widest text-gray-500 uppercase">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-bold text-white mb-2">12</div>
                    <div className="text-[10px] tracking-widest text-gray-500 uppercase">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-bold text-white mb-2">45</div>
                    <div className="text-[10px] tracking-widest text-gray-500 uppercase">Minutes</div>
                  </div>
                </div>
                <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Mission: SELENE</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest rounded">OCCURRING</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Lunar orbital insertion maneuver scheduled. SELENE is currently maintaining stable trajectory toward the Moon.
                  </p>
                  <Link to="/missions" className="text-xs font-bold tracking-widest text-white hover:text-blue-400 transition-colors uppercase flex items-center gap-2">
                    Mission Control <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 border-l border-white/10">
                <div className="text-4xl font-bold text-white mb-2">42</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Total Launches</div>
              </div>
              <div className="p-8 border-l border-white/10">
                <div className="text-4xl font-bold text-white mb-2">12</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Mars Modules</div>
              </div>
              <div className="p-8 border-l border-white/10">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Recovery Rate</div>
              </div>
              <div className="p-8 border-l border-white/10">
                <div className="text-4xl font-bold text-white mb-2">0</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Lives Lost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Preview */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] text-gray-500 mb-4 uppercase">Latest News</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Updates from the Frontier.</h3>
            </div>
            <Link to="/news" className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest text-white hover:text-blue-400 transition-all uppercase">
              View All News <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard 
              title="ORION Announces Future Aerospace Museum"
              date="March 18, 2026"
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
            />
            <NewsCard 
              title="NideShip-IV Construction Officially Begins"
              date="April 7, 2026"
              image="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800"
            />
            <NewsCard 
              title="SELENE Mission Reaches Stable Lunar Orbit"
              date="May 2, 2026"
              image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 tracking-tight">Become part of the mission.</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            We are looking for the best minds in engineering, science, and operations to help us build the future of space exploration.
          </p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold tracking-widest text-sm hover:bg-gray-200 transition-all">
            JOIN ORION
          </Link>
        </div>
      </section>
    </div>
  );
};

const NewsCard = ({ title, date, image }: { title: string; date: string; image: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group cursor-pointer"
  >
    <div className="relative aspect-[16/9] overflow-hidden mb-6">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
    </div>
    <p className="text-[10px] tracking-[0.2em] text-blue-400 mb-2 uppercase">{date}</p>
    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-4">{title}</h4>
    <Link to="/news" className="text-[10px] font-bold tracking-widest text-white border-b border-white/20 pb-1 group-hover:border-blue-400 transition-all uppercase">
      Read More
    </Link>
  </motion.div>
);

export default Home;
