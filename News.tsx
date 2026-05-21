import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';

const newsArticles = [
  {
    title: "SELENE Mission Reaches Stable Lunar Orbit",
    date: "May 2, 2026",
    category: "Missions",
    description: "The SELENE mission successfully established a stable orbital trajectory around the Moon after a flawless insertion maneuver. The spacecraft is now beginning its first phase of orbital mapping and infrastructure validation.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "NideShip-IV Construction Officially Begins",
    date: "April 7, 2026",
    category: "Technology",
    description: "ORION confirmed the beginning of construction of the next-generation NideShip-IV launch vehicle designed for deep-space missions and heavy payload operations. The new vehicle features enhanced thermal protection systems for Mars atmosphere entry.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "ORION Announces Future Aerospace Museum",
    date: "March 18, 2026",
    category: "Company",
    description: "We are happy to anounce the begining of the construction of our new Museum! located near our launch and construction site at Cape Canaveral, we are building a new Museum that will have real-scale replicas of our retired and future ships! you do not want to lose this unique expirience! to learn more informations about the construction and some other things acces our website, https;/Museum-ORION-Cape-Canaveral.com",
    image: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.si.edu%2Fnewsdesk%2Fkits%2Fnational-air-and-space-museum-transforming&opi=89978449"
  }
];

const News: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <p className="text-xs font-bold tracking-[0.4em] text-blue-400 mb-6 uppercase">Newsroom</p>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">Latest from ORION.</h1>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH ARTICLES" 
              className="w-full bg-white/5 border border-white/10 py-4 pl-12 pr-4 text-xs font-bold tracking-widest text-white focus:outline-none focus:border-blue-400 transition-colors"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-20">
          {newsArticles.map((article, idx) => (
            <NewsItem key={article.title} article={article} index={idx} />
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <button className="px-12 py-5 border border-white/20 text-white font-bold tracking-widest text-sm hover:bg-white hover:text-black transition-all">
            LOAD MORE ARTICLES
          </button>
        </div>
      </div>
    </div>
  );
};

const NewsItem = ({ article, index }: { article: any; index: number }) => (
  <motion.article 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group flex flex-col lg:flex-row gap-12 items-start"
  >
    <div className="lg:w-2/5 aspect-video lg:aspect-[4/3] overflow-hidden bg-white/5 border border-white/10">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
      />
    </div>
    <div className="lg:w-3/5 pt-4">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{article.category}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">{article.date}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors leading-tight">
        {article.title}
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
        {article.description}
      </p>
      <Link to="#" className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-white hover:text-blue-400 transition-colors uppercase pb-2 border-b border-white/20 hover:border-blue-400">
        Read Full Story <ChevronRight size={14} />
      </Link>
    </div>
  </motion.article>
);

export default News;
