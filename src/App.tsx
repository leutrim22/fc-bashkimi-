/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Users, 
  Flame, 
  Handshake, 
  MapPin, 
  Calendar, 
  Clock, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  ChevronRight,
  Menu,
  X,
  Play
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Values', href: '#values' },
    { name: 'Team', href: '#team' },
    { name: 'Matches', href: '#matches' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-bashkimi-dark/95 backdrop-blur-md py-3 border-b border-bashkimi-green/30' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="w-12 h-12 bg-bashkimi-green rounded-lg flex flex-col items-center justify-center font-display font-black text-white text-xl leading-none shadow-[0_0_15px_rgba(21,128,61,0.4)]">
              <Handshake size={16} className="mb-0.5" />
              <span className="text-xs">1947</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tighter uppercase italic leading-none">KF BASHKIMI</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-bashkimi-green uppercase">Kumanovo</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold text-white/70 hover:text-bashkimi-green transition-all uppercase tracking-[0.2em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bashkimi-green transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-bashkimi-dark z-[60] p-12 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black text-white hover:text-bashkimi-green transition-colors uppercase italic"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Stadium Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/stadium-crowd/1920/1080?grayscale" 
          alt="Stadium background" 
          className="w-full h-full object-cover opacity-30 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bashkimi-dark via-bashkimi-dark/60 to-bashkimi-dark/90"></div>
        <div className="absolute inset-0 bashkimi-stripes opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-bashkimi-green"></div>
            <span className="text-bashkimi-green text-sm font-black uppercase tracking-[0.4em]">KRENARIA E QYTETIT</span>
            <div className="h-px w-12 bg-bashkimi-green"></div>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black mb-4 leading-[0.8] uppercase italic tracking-tighter text-balance">
            VEÇ <br />
            <span className="text-bashkimi-green">BASHKIMI</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12">
             <span className="text-3xl sm:text-4xl md:text-6xl font-black text-outline italic">1947</span>
             <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center">
               <Handshake className="text-bashkimi-green" size={20} />
             </div>
             <span className="text-3xl sm:text-4xl md:text-6xl font-black text-outline italic">2026</span>
          </div>

          <p className="text-base md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-medium uppercase tracking-widest leading-relaxed px-4">
            Representing Kumanovo with heart, discipline, and dedication on and off the pitch.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-bashkimi-green text-white font-black rounded-none hover:bg-bashkimi-accent transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group uppercase italic tracking-widest">
              View Team <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white text-white font-black rounded-none hover:bg-white hover:text-bashkimi-dark transition-all flex items-center justify-center gap-3 uppercase italic tracking-widest">
              Match Schedule <Calendar size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Motto Rail */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 bg-bashkimi-green/10 border-t border-bashkimi-green/20 backdrop-blur-sm">
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-[10px] sm:text-sm font-black uppercase tracking-[0.5em] text-white/40 italic">KRENARIA E QYTETIT</span>
              <span className="text-[10px] sm:text-sm font-black uppercase tracking-[0.5em] text-bashkimi-green italic">KF BASHKIMI 1947</span>
              <span className="text-[10px] sm:text-sm font-black uppercase tracking-[0.5em] text-white/40 italic">KUMANOVO</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-bashkimi-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bashkimi-stripes opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-none overflow-hidden border-4 border-bashkimi-green shadow-[20px_20px_0px_rgba(21,128,61,0.2)]">
            <img 
              src="https://picsum.photos/seed/bashkimi-about/800/1000" 
              alt="Club history" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-bashkimi-green"></div>
            <span className="text-bashkimi-green font-black uppercase tracking-widest">SINCE 1947</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-8 uppercase italic leading-none">KRENARIA E <br /><span className="text-bashkimi-green">QYTETIT</span></h2>
          <div className="space-y-6 text-base sm:text-lg text-white/70 leading-relaxed font-medium">
            <p>
              KF Bashkimi is a football club based in Kumanovo, built on passion, teamwork, and strong community values.
            </p>
            <p>
              Our mission is to develop talented players, compete with pride, and represent our city with respect and commitment in every match we play.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-bashkimi-green mb-1 italic">1947</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">FOUNDED</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-bashkimi-green mb-1 italic">10K+</div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">LOYAL FANS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    { title: 'Teamwork & Discipline', icon: <Users className="text-bashkimi-green" />, desc: 'Working together as one unit with strict adherence to our principles.' },
    { title: 'Passion for Football', icon: <Flame className="text-bashkimi-green" />, desc: 'Every touch, every run, every goal is fueled by our love for the game.' },
    { title: 'Competitive Spirit', icon: <Trophy className="text-bashkimi-green" />, desc: 'We play to win, pushing our limits in every single competition.' },
    { title: 'Respect & Fair Play', icon: <Handshake className="text-bashkimi-green" />, desc: 'Honoring the game, our opponents, and the community we represent.' },
  ];

  return (
    <section id="values" className="py-24 bg-white/[0.02] relative">
      <div className="absolute inset-0 bashkimi-stripes opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase italic mb-4">Our Values</h2>
          <div className="w-20 sm:w-24 h-1 sm:h-2 bg-bashkimi-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 sm:p-10 hover:bg-bashkimi-green group transition-all duration-500 rounded-none border-l-4 border-l-bashkimi-green"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-none bg-bashkimi-green/10 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-white/20 transition-colors">
                {React.cloneElement(v.icon as React.ReactElement, { size: 24, className: "group-hover:text-white transition-colors" })}
              </div>
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:text-white transition-colors">{v.title}</h3>
              <p className="text-xs sm:text-sm text-white/50 group-hover:text-white/80 leading-relaxed font-medium transition-colors">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const players = [
    { name: 'Besnik Aliti', pos: 'Goalkeeper', num: '1' },
    { name: 'Ilir Meta', pos: 'Defender', num: '4' },
    { name: 'Arben Krasniqi', pos: 'Midfielder', num: '8' },
    { name: 'Driton Selmani', pos: 'Forward', num: '10' },
    { name: 'Valon Berisha', pos: 'Forward', num: '7' },
    { name: 'Liridon Luma', pos: 'Defender', num: '5' },
  ];

  return (
    <section id="team" className="py-24 bg-bashkimi-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl uppercase italic mb-4">First Team <span className="text-bashkimi-green">Squad</span></h2>
            <p className="text-white/40 max-w-xl font-bold uppercase tracking-widest text-xs sm:text-sm">The heart of KF Bashkimi. Meet the warriors who represent our city on the pitch.</p>
          </div>
          <button className="w-full sm:w-auto px-8 py-4 border-2 border-bashkimi-green text-bashkimi-green font-black flex items-center justify-center gap-2 hover:bg-bashkimi-green hover:text-white transition-all uppercase tracking-[0.2em] text-[10px] sm:text-xs italic">
            Full Squad List <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {players.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden bg-bashkimi-dark aspect-[3/4] border border-white/5"
            >
              <img 
                src={`https://picsum.photos/seed/player-${i}/600/800`} 
                alt={p.name} 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bashkimi-dark via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="text-bashkimi-green font-black text-7xl mb-2 italic opacity-30 group-hover:opacity-100 group-hover:text-outline transition-all">#{p.num}</div>
                <h3 className="text-3xl font-black uppercase italic leading-none mb-2">{p.name}</h3>
                <p className="text-xs text-bashkimi-green font-bold uppercase tracking-[0.3em]">{p.pos}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Matches = () => {
  const upcoming = [
    { opponent: 'Opponent FC', stadium: 'Kumanovo City Stadium', date: 'Oct 15, 2026', time: '16:00' },
    { opponent: 'Vardar Skopje', stadium: 'National Arena Toshe Proeski', date: 'Oct 22, 2026', time: '18:30' },
  ];

  const results = [
    { opponent: 'Sileks Kratovo', score: '2 – 1', status: 'W' },
    { opponent: 'Shkupi', score: '0 – 0', status: 'D' },
    { opponent: 'Pobeda Prilep', score: '3 – 2', status: 'W' },
  ];

  return (
    <section id="matches" className="py-24 bg-white/[0.02] relative">
      <div className="absolute inset-0 bashkimi-stripes opacity-[0.02]"></div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
        {/* Upcoming */}
        <div>
          <h2 className="text-4xl uppercase italic mb-10 flex items-center gap-4">
            Upcoming <span className="text-bashkimi-green">Matches</span>
          </h2>
          <div className="space-y-4">
            {upcoming.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 flex flex-col md:flex-row items-center gap-8 text-center md:text-left rounded-none border-l-4 border-l-bashkimi-green"
              >
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-bashkimi-green font-black mb-2 italic">MATCHDAY</div>
                  <h3 className="text-3xl font-black mb-4 italic leading-none">KF BASHKIMI <span className="text-bashkimi-green">VS</span> {m.opponent}</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs font-bold uppercase tracking-widest text-white/40">
                    <span className="flex items-center gap-2"><MapPin size={14} className="text-bashkimi-green" /> {m.stadium}</span>
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-bashkimi-green" /> {m.date}</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-bashkimi-green" /> {m.time}</span>
                  </div>
                </div>
                <button className="px-8 py-4 bg-bashkimi-green text-white font-black rounded-none text-xs uppercase tracking-widest hover:bg-bashkimi-accent transition-colors italic">
                  Tickets
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          <h2 className="text-4xl uppercase italic mb-10 flex items-center gap-4">
            Latest <span className="text-bashkimi-green">Results</span>
          </h2>
          <div className="space-y-2">
            {results.map((r, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 flex items-center justify-between border border-white/5 hover:bg-white/10 transition-all rounded-none"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 flex items-center justify-center font-black text-white italic text-xl ${r.status === 'W' ? 'bg-bashkimi-green' : 'bg-white/10'}`}>
                    {r.status}
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black mb-1 italic">VS {r.opponent}</div>
                    <div className="text-2xl font-black italic uppercase leading-none">KF BASHKIMI</div>
                  </div>
                </div>
                <div className="text-4xl font-black italic tracking-tighter text-bashkimi-green">
                  {r.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-bashkimi-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl uppercase italic mb-4">Match Day <span className="text-bashkimi-green">Moments</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto font-bold uppercase tracking-[0.2em] text-sm">A look at our matches, players, and unforgettable moments on the pitch.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`relative overflow-hidden aspect-square border border-white/5 ${n === 1 || n === 6 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img 
                src={`https://picsum.photos/seed/gallery-${n}/800/800`} 
                alt="Gallery" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bashkimi-green/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="text-white fill-white" size={48} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const News = () => {
  const news = [
    { title: 'New season preparation underway', date: 'Sept 28, 2026', category: 'Training' },
    { title: 'Matchday announcement: Big derby ahead', date: 'Oct 02, 2026', category: 'Matchday' },
    { title: 'Player spotlight: The rise of our youth', date: 'Oct 05, 2026', category: 'Feature' },
  ];

  return (
    <section id="news" className="py-24 bg-white/[0.02] relative">
      <div className="absolute inset-0 bashkimi-stripes opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-5xl md:text-7xl uppercase italic">Club <span className="text-bashkimi-green">News</span></h2>
          <button className="hidden md:block px-10 py-4 border-2 border-white text-white font-black uppercase tracking-widest text-xs italic hover:bg-white hover:text-bashkimi-dark transition-all">
            View All News
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden mb-8 border-b-4 border-bashkimi-green relative">
                <img 
                  src={`https://picsum.photos/seed/news-${i}/800/500`} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                   <span className="text-[10px] uppercase tracking-[0.3em] font-black px-3 py-1.5 bg-bashkimi-green text-white italic">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black">{item.date}</span>
              </div>
              <h3 className="text-3xl font-black group-hover:text-bashkimi-green transition-colors leading-none italic uppercase">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-bashkimi-dark relative">
      <div className="absolute inset-0 bashkimi-stripes opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-bashkimi-dark border-4 border-bashkimi-green overflow-hidden grid md:grid-cols-2 shadow-[20px_20px_0px_rgba(21,128,61,0.1)] md:shadow-[40px_40px_0px_rgba(21,128,61,0.1)]">
          <div className="p-8 sm:p-12 md:p-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl uppercase italic mb-8 leading-none">JOIN THE <br /><span className="text-bashkimi-green">LEGACY</span></h2>
            <p className="text-white/50 mb-12 leading-relaxed font-bold uppercase tracking-widest text-xs sm:text-sm">
              For partnerships, sponsorships, or general inquiries, feel free to contact us. We are always open to community engagement.
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bashkimi-green/10 flex items-center justify-center text-bashkimi-green group-hover:bg-bashkimi-green group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/40 font-black mb-1 italic">LOCATION</div>
                  <div className="font-black italic uppercase text-lg sm:text-xl">Kumanovo, North Macedonia</div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bashkimi-green/10 flex items-center justify-center text-bashkimi-green group-hover:bg-bashkimi-green group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/40 font-black mb-1 italic">EMAIL</div>
                  <div className="font-black italic uppercase text-lg sm:text-xl">info@fcbashkimi.mk</div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bashkimi-green/10 flex items-center justify-center text-bashkimi-green group-hover:bg-bashkimi-green group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/40 font-black mb-1 italic">PHONE</div>
                  <div className="font-black italic uppercase text-lg sm:text-xl">+389 XX XXX XXX</div>
                </div>
              </div>
            </div>

            <button className="mt-12 sm:mt-16 w-full md:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-bashkimi-green text-white font-black uppercase tracking-[0.2em] hover:bg-bashkimi-accent transition-all transform hover:-translate-y-1 italic shadow-lg text-sm sm:text-base">
              Contact Us
            </button>
          </div>
          
          <div className="relative hidden md:block">
            <img 
              src="https://picsum.photos/seed/bashkimi-contact/1000/1200" 
              alt="Contact background" 
              className="w-full h-full object-cover opacity-30 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-bashkimi-dark via-bashkimi-dark/40 to-transparent"></div>
            <div className="absolute bottom-12 right-12 text-right">
               <div className="text-8xl font-black text-outline italic leading-none opacity-20">1947</div>
               <div className="text-2xl font-black text-bashkimi-green italic uppercase tracking-widest">KUMANOVO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-bashkimi-dark border-t-8 border-bashkimi-green relative overflow-hidden">
      <div className="absolute inset-0 bashkimi-stripes opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-bashkimi-green flex items-center justify-center font-display font-black text-white text-2xl italic">B</div>
              <span className="font-display font-black text-3xl tracking-tighter uppercase italic">KF BASHKIMI 1947</span>
            </div>
            <p className="text-white/40 max-w-sm font-bold uppercase tracking-widest text-xs leading-loose">
              Krenaria e qytetit të Kumanovës. Një histori e gjatë, një pasion i pashuar. Bashkimi bën fuqinë.
            </p>
          </div>
          
          <div>
            <h4 className="text-bashkimi-green font-black uppercase italic tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              <li><a href="#about" className="hover:text-bashkimi-green transition-colors">About Club</a></li>
              <li><a href="#team" className="hover:text-bashkimi-green transition-colors">First Team</a></li>
              <li><a href="#matches" className="hover:text-bashkimi-green transition-colors">Match Center</a></li>
              <li><a href="#news" className="hover:text-bashkimi-green transition-colors">Latest News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-bashkimi-green font-black uppercase italic tracking-widest mb-6">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-bashkimi-green transition-all group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-bashkimi-green transition-all group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} KF BASHKIMI KUMANOVO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            <a href="#" className="hover:text-bashkimi-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bashkimi-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-bashkimi-green selection:text-bashkimi-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Team />
        <Matches />
        <Gallery />
        <News />
        <Contact />
      </main>
      <Footer />
      
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-bashkimi-green/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-bashkimi-green/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
