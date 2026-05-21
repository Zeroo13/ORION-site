import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Users, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.4em] text-blue-400 mb-6 uppercase font-bold"
          >
            The Orion Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white mb-12 tracking-tight"
          >
            Pioneering the <br /> New Frontier.
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Founded with the belief that humanity's destiny lies among the stars, ORION has grown 
              from a small aerospace startup to a global leader in orbital infrastructure and 
              deep-space exploration. Our journey began with a single vision: to make space 
              accessible, sustainable, and the next home for human civilization.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="text-blue-400" size={24} />
                <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">Headquarters</h3>
              </div>
              <p className="text-2xl font-bold text-white mb-2">Detroit, Michigan</p>
              <p className="text-gray-400 text-sm">United States of America</p>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-500 tracking-widest uppercase mb-2">Operational Centers</p>
                <p className="text-sm text-white font-medium">Cape Canaveral, Houston, Mojave</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white/5 border-y border-white/10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Target className="mx-auto text-blue-400 mb-8" size={48} />
          <h2 className="text-sm font-bold tracking-[0.4em] text-gray-500 mb-8 uppercase">Mission Statement</h2>
          <p className="text-2xl md:text-4xl font-medium text-white leading-tight italic">
            "To accelerate humanity's transition into a multi-planetary species through innovation, 
            scientific excellence, and the relentless pursuit of the unknown."
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <History className="text-blue-400" size={24} />
            <h2 className="text-sm font-bold tracking-[0.3em] text-white uppercase">Timeline of Achievements</h2>
          </div>
          
          <div className="space-y-12">
            <TimelineItem year="2018" title="ORION Founded" description="Adrian Vale and Eleanor Hayes establish ORION in a small facility in Detroit." />
            <TimelineItem year="2020" title="NideShip-I Prototype" description="First successful vertical takeoff and landing of the NideShip-I experimental vehicle." />
            <TimelineItem year="2022" title="First Orbital Launch" description="NideShip-II successfully delivers its first commercial payload to Low Earth Orbit." />
            <TimelineItem year="2024" title="Deep Space Initiative" description="Announcement of the JUNO mission and the development of the NideShip-III platform." />
            <TimelineItem year="2026" title="SELENE Mission" description="Current active mission establishing permanent lunar orbital presence." />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Users className="text-blue-400" size={24} />
            <h2 className="text-sm font-bold tracking-[0.3em] text-white uppercase">Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LeaderCard name="Adrian Vale" role="Chief Executive Officer" />
            <LeaderCard name="Eleanor Hayes" role="Chief Technical Officer" />
            <LeaderCard name="Marcus Halden" role="Chief Operating Officer" />
            <LeaderCard name="Victor Soren" role="Lead Systems Architect" />
          </div>
        </div>
      </section>
    </div>
  );
};

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex gap-8 md:gap-16 items-start"
  >
    <div className="text-3xl font-bold text-blue-400/40 tabular-nums w-24 pt-1">{year}</div>
    <div className="flex-1 pb-12 border-b border-white/5">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const LeaderCard = ({ name, role }: { name: string; role: string }) => (
  <div className="group">
    <div className="aspect-[3/4] bg-white/5 border border-white/10 mb-6 relative overflow-hidden">
      {/* Placeholder for portrait */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{name}</h3>
          <p className="text-[10px] tracking-widest text-gray-500 uppercase font-bold">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
