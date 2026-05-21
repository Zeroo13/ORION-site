import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Target } from 'lucide-react';
import { cn } from '../utils/cn';

const rockets = [
  {
    name: 'NideShip-III',
    status: 'ACTIVE',
    tagline: 'Multi-Role Heavy Lift Vehicle',
    description: 'Advanced multi-role orbital launch vehicle currently supporting the SELENE mission and future deep-space operations. Designed for maximum reusability and payload efficiency.',
    specs: {
      height: '70m',
      diameter: '5.2m',
      thrust: '9,200 kN',
      payload: '22,800 kg to LEO'
    },
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'NideShip-II',
    status: 'RETIRED',
    tagline: 'Next-Gen Reusable Platform',
    description: 'Second-generation heavy launch system with improved orbital capability and autonomous landing technology. It served as the primary workhorse for orbital infrastructure.',
    specs: {
      height: '62m',
      diameter: '4.8m',
      thrust: '7,500 kN',
      payload: '18,500 kg to LEO'
    },
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'NideShip-I',
    status: 'RETIRED',
    tagline: 'Experimental Pathfinder',
    description: 'The first experimental launch vehicle developed by ORION. It established the foundation of the company’s reusable launch technology and vertical landing systems.',
    specs: {
      height: '45m',
      diameter: '3.7m',
      thrust: '4,800 kN',
      payload: '8,200 kg to LEO'
    },
    image: 'https://images.unsplash.com/photo-1457364559154-aa2644600ebb?auto=format&fit=crop&q=80&w=1000'
  }
];

const Rockets: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-[0.4em] text-blue-400 mb-6 uppercase"
          >
            Our Fleet
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Engineering the <br /> Future of Launch.
          </motion.h1>
        </header>

        <div className="space-y-32">
          {rockets.map((rocket, idx) => (
            <RocketSection key={rocket.name} rocket={rocket} reversed={idx % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RocketSection = ({ rocket, reversed }: { rocket: any; reversed: boolean }) => (
  <div className={cn(
    "flex flex-col gap-12 lg:gap-24 items-center",
    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
  )}>
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex-1 w-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-white/5 border border-white/10 group">
        <img 
          src={rocket.image} 
          alt={rocket.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-6 left-6">
          <div className={cn(
            "px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded backdrop-blur-md border",
            rocket.status === 'ACTIVE' ? "bg-green-500/20 border-green-500/30 text-green-400" : "bg-gray-500/20 border-gray-500/30 text-gray-400"
          )}>
            {rocket.status}
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, x: reversed ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">{rocket.name}</h2>
      <p className="text-xl text-blue-400/80 mb-8 font-medium tracking-wide">{rocket.tagline}</p>
      <p className="text-gray-400 leading-relaxed text-lg mb-12">
        {rocket.description}
      </p>

      <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
        <SpecItem icon={<Rocket size={18} />} label="Height" value={rocket.specs.height} />
        <SpecItem icon={<Shield size={18} />} label="Diameter" value={rocket.specs.diameter} />
        <SpecItem icon={<Zap size={18} />} label="Thrust" value={rocket.specs.thrust} />
        <SpecItem icon={<Target size={18} />} label="LEO Payload" value={rocket.specs.payload} />
      </div>

      <div className="mt-12 pt-12">
        <button className="px-10 py-4 border border-white/20 text-white font-bold tracking-widest text-sm hover:bg-white hover:text-black transition-all">
          TECHNICAL GUIDE (PDF)
        </button>
      </div>
    </motion.div>
  </div>
);

const SpecItem = ({ icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2 text-gray-500 uppercase tracking-widest text-[10px] font-bold">
      {icon}
      <span>{label}</span>
    </div>
    <div className="text-2xl font-bold text-white tabular-nums">{value}</div>
  </div>
);

export default Rockets;
