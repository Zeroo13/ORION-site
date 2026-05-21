import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { Activity, Map, Calendar } from 'lucide-react';

const missions = [
  {
    name: 'SELENE',
    status: 'OCCURRING',
    destination: 'Lunar Orbit',
    date: 'February 2026',
    description: 'ORION’s first active long-duration lunar mission focused on orbital infrastructure testing and advanced navigation systems around the Moon.',
    progress: 68,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    glow: 'shadow-[0_0_15px_rgba(96,165,250,0.3)]'
  },
  {
    name: 'JUNO',
    status: 'PLANNED',
    destination: 'Mars',
    date: 'Q4 2028',
    description: 'Future crewed Mars exploration mission intended to establish the first ORION deep-space expedition toward the Martian surface.',
    progress: 0,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    glow: 'shadow-[0_0_15px_rgba(251,146,60,0.3)]'
  },
  {
    name: 'HELIOS',
    status: 'COMPLETED',
    destination: 'Geostationary Orbit',
    date: 'November 2025',
    description: 'Communications and propulsion testing mission for next-generation satellite deployment systems.',
    progress: 100,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    glow: 'shadow-[0_0_15px_rgba(74,222,128,0.3)]'
  },
  {
    name: 'AETHER',
    status: 'COMPLETED',
    destination: 'Low Earth Orbit',
    date: 'August 2024',
    description: 'Early orbital systems validation mission that helped establish ORION’s launch architecture.',
    progress: 100,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    glow: 'shadow-[0_0_15px_rgba(74,222,128,0.3)]'
  }
];

const Missions: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Activity className="text-blue-400 animate-pulse" size={20} />
              <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">Mission Control Center</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Active Operations</h1>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">Last Update</p>
            <p className="text-sm font-mono text-gray-400 uppercase">2026-05-18 // 14:32:05 UTC</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {missions.map((mission, idx) => (
            <MissionCard key={mission.name} mission={mission} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MissionCard = ({ mission, index }: { mission: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={cn(
      "relative p-8 border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group",
      mission.status === 'OCCURRING' && "border-blue-500/30"
    )}
  >
    {mission.status === 'OCCURRING' && (
      <div className="absolute top-0 right-0 p-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">Live Feed Active</span>
        </div>
      </div>
    )}

    <div className="flex flex-col h-full">
      <div className="mb-8">
        <div className={cn("inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase rounded", mission.bg, mission.color)}>
          {mission.status}
        </div>
        <h3 className="text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
          {mission.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
          {mission.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8 pt-8 border-t border-white/5">
        <div>
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <Map size={14} />
            <span className="text-[10px] font-bold tracking-widest uppercase">Destination</span>
          </div>
          <p className="text-white font-medium">{mission.destination}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <Calendar size={14} />
            <span className="text-[10px] font-bold tracking-widest uppercase">Launch Date</span>
          </div>
          <p className="text-white font-medium">{mission.date}</p>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Mission Progress</span>
          <span className="text-sm font-mono text-white">{mission.progress}%</span>
        </div>
        <div className="h-1 bg-white/10 w-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${mission.progress}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className={cn("h-full", mission.status === 'COMPLETED' ? 'bg-green-500' : mission.status === 'PLANNED' ? 'bg-orange-500' : 'bg-blue-500')}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default Missions;
