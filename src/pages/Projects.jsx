import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Clock, Search, ExternalLink, Sparkles, Navigation, Layers } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Project locations data
const ongoingProjects = [
  { 
    id: 'ong-1',
    name: "Kolkata",
    state: "West Bengal",
    coord: [22.5726, 88.3639],
    type: "ongoing",
    focus: "AI & Cloud Architecture Cohort",
    students: "320+ Active Learners",
    statusText: "Active Cohort (Phase 2)"
  },
  { 
    id: 'ong-2',
    name: "Delhi",
    state: "National Capital Region",
    coord: [28.7041, 77.1025],
    type: "ongoing",
    focus: "Full-Stack Enterprise & GenAI Lab",
    students: "450+ Active Learners",
    statusText: "Active Cohort (Phase 3)"
  },
  { 
    id: 'ong-3',
    name: "Mumbai",
    state: "Maharashtra",
    coord: [19.0760, 72.8777],
    type: "ongoing",
    focus: "FinTech & Data Engineering Center",
    students: "500+ Active Learners",
    statusText: "Active Cohort (Phase 4)"
  },
  { 
    id: 'ong-4',
    name: "Kakinada",
    state: "Andhra Pradesh",
    coord: [16.9891, 82.2475],
    type: "ongoing",
    focus: "IoT & Embedded Software Academy",
    students: "240+ Active Learners",
    statusText: "Active Cohort (Phase 1)"
  },
  { 
    id: 'ong-5',
    name: "Indore",
    state: "Madhya Pradesh",
    coord: [22.7196, 75.8577],
    type: "ongoing",
    focus: "Full-Stack Web3 & Systems",
    students: "280+ Active Learners",
    statusText: "Active Cohort (Phase 2)"
  },
  { 
    id: 'ong-6',
    name: "Greater Noida",
    state: "Uttar Pradesh",
    coord: [28.4744, 77.5040],
    type: "ongoing",
    focus: "Applied Machine Learning Center",
    students: "360+ Active Learners",
    statusText: "Active Cohort (Phase 2)"
  },
  { 
    id: 'ong-7',
    name: "Kanpur",
    state: "Uttar Pradesh",
    coord: [26.4499, 80.3319],
    type: "ongoing",
    focus: "Industrial Tech & Edge Computing",
    students: "220+ Active Learners",
    statusText: "Active Cohort (Phase 1)"
  },
  { 
    id: 'ong-8',
    name: "Nagpur",
    state: "Maharashtra",
    coord: [21.1458, 79.0882],
    type: "ongoing",
    focus: "DevOps & Cloud Native Systems",
    students: "290+ Active Learners",
    statusText: "Active Cohort (Phase 2)"
  }
];

const completedProjects = [
  { id: 'cmp-1', name: "Bangalore", state: "Karnataka", coord: [12.9716, 77.5946], type: "completed", focus: "Advanced Distributed Systems", students: "1,200+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-2', name: "Hyderabad", state: "Telangana", coord: [17.3850, 78.4867], type: "completed", focus: "Cloud Architecture & Security", students: "980+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-3', name: "Ghaziabad", state: "Uttar Pradesh", coord: [28.6692, 77.4538], type: "completed", focus: "Full Stack & Microservices", students: "420+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-4', name: "Dehradun", state: "Uttarakhand", coord: [30.3165, 78.0322], type: "completed", focus: "Data Science & Big Data", students: "380+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-5', name: "Rajampet", state: "Andhra Pradesh", coord: [14.1957, 79.1596], type: "completed", focus: "Core Software Engineering", students: "310+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-6', name: "Pune", state: "Maharashtra", coord: [18.5204, 73.8567], type: "completed", focus: "System Design & AI Labs", students: "850+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-7', name: "Chandigarh", state: "Punjab/Haryana", coord: [30.7333, 76.7794], type: "completed", focus: "Mobile & Web Engineering", students: "560+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-8', name: "Rajpura", state: "Punjab", coord: [30.4863, 76.5946], type: "completed", focus: "Enterprise Applications", students: "270+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-9', name: "Ropar", state: "Punjab", coord: [30.9686, 76.5275], type: "completed", focus: "Applied AI Algorithms", students: "240+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-10', name: "Faridabad", state: "Haryana", coord: [28.4089, 77.3178], type: "completed", focus: "Frontend Engineering & UI/UX", students: "490+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-11', name: "Ajmer", state: "Rajasthan", coord: [26.4499, 74.6399], type: "completed", focus: "Cloud Foundation & Python", students: "310+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-12', name: "Mysore", state: "Karnataka", coord: [12.2958, 76.6394], type: "completed", focus: "Backend API Systems", students: "430+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-13', name: "Hosur", state: "Tamil Nadu", coord: [12.7400, 77.8253], type: "completed", focus: "Industrial Automation & Code", students: "290+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-14', name: "Ballari", state: "Karnataka", coord: [15.1394, 76.9214], type: "completed", focus: "Foundational Software Engineering", students: "260+ Alumni", statusText: "Successfully Graduated" },
  { id: 'cmp-15', name: "Tirupati", state: "Andhra Pradesh", coord: [13.6288, 79.4192], type: "completed", focus: "Data Analytics & Engineering", students: "350+ Alumni", statusText: "Successfully Graduated" }
];

const allProjects = [
  ...ongoingProjects.map(p => ({ ...p, status: 'ongoing' })),
  ...completedProjects.map(p => ({ ...p, status: 'completed' }))
];

export default function Projects() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'ongoing' | 'completed'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);

  // Filtered projects list
  const filteredProjects = allProjects.filter(project => {
    const matchesType = 
      activeFilter === 'all' ? true : project.status === activeFilter;
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.focus.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // Initialize Leaflet Map centered on India
    const map = L.map(mapContainerRef.current, {
      center: [22.0, 78.9],
      zoom: 5,
      minZoom: 4,
      maxZoom: 14,
      scrollWheelZoom: true,
      zoomControl: false
    });

    // Custom Zoom Control top-right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Dark Matter CartoDB Basemap for luxury dark aesthetic
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    mapInstanceRef.current = map;
    markersRef.current = {};

    // Render Markers
    allProjects.forEach((proj) => {
      const isOngoing = proj.status === 'ongoing';
      
      const customHtml = isOngoing 
        ? `
          <div class="custom-marker-wrapper group">
            <div class="marker-pulse"></div>
            <div class="marker-pin ongoing">
              <span class="marker-dot"></span>
            </div>
            <div class="marker-label">${proj.name}</div>
          </div>
        `
        : `
          <div class="custom-marker-wrapper group">
            <div class="marker-pin completed">
              <span class="marker-dot-completed"></span>
            </div>
            <div class="marker-label">${proj.name}</div>
          </div>
        `;

      const customIcon = L.divIcon({
        className: 'custom-leaflet-div-icon',
        html: customHtml,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -18]
      });

      const popupContent = `
        <div class="p-1 font-outfit text-white">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              isOngoing 
                ? 'bg-gold/20 text-gold border border-gold/40' 
                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
            }">
              ${isOngoing ? '● Ongoing TechCity Hub' : '✓ Completed Cohort'}
            </span>
            <span class="text-[11px] text-zinc-400">${proj.state}</span>
          </div>
          <h4 class="text-base font-bold text-white mb-1">${proj.name}</h4>
          <p class="text-xs text-zinc-300 mb-2">${proj.focus}</p>
          <div class="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
            <span>${proj.students}</span>
            <span class="text-gold font-medium">${isOngoing ? 'Active In-Person Lab' : 'Alumni Network'}</span>
          </div>
        </div>
      `;

      const marker = L.marker(proj.coord, { icon: customIcon })
        .addTo(map)
        .bindPopup(popupContent, {
          className: 'techcity-dark-popup',
          closeButton: true,
          offset: [0, -8]
        });

      marker.on('click', () => {
        setSelectedCity(proj.name);
      });

      markersRef.current[proj.id] = { marker, data: proj };
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update visible markers when filters change
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    
    allProjects.forEach((proj) => {
      const item = markersRef.current[proj.id];
      if (!item) return;
      
      const matchesType = activeFilter === 'all' || proj.status === activeFilter;
      const matchesSearch = 
        proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.state.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (matchesType && matchesSearch) {
        if (!mapInstanceRef.current.hasLayer(item.marker)) {
          item.marker.addTo(mapInstanceRef.current);
        }
      } else {
        if (mapInstanceRef.current.hasLayer(item.marker)) {
          item.marker.remove();
        }
      }
    });
  }, [activeFilter, searchQuery]);

  // Jump and zoom to a project on the map
  const handleCityClick = (project) => {
    setSelectedCity(project.name);
    if (!mapInstanceRef.current) return;

    mapInstanceRef.current.flyTo(project.coord, 9, {
      duration: 1.5,
      easeLinearity: 0.25
    });

    const item = markersRef.current[project.id];
    if (item && item.marker) {
      setTimeout(() => {
        item.marker.openPopup();
      }, 900);
    }
  };

  const handleResetMap = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([22.0, 78.9], 5, { duration: 1.2 });
    setSelectedCity(null);
  };

  return (
    <main className="pt-32 pb-28 px-6 lg:px-20 max-w-[1440px] w-full mx-auto min-h-screen">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 mb-6 bg-gold/5 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-gold uppercase">
            Pan-India Training & Innovation Ecosystem
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          TechCity Skills <span className="text-gold">Project Footprint</span>
        </h1>
        
        <p className="text-lg text-text-secondary font-light leading-relaxed max-w-2xl mx-auto">
          Explore our real-world training centers and institutional deployments powering skilled engineers across major technology hubs and tier-1/2 cities.
        </p>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="bg-surface/80 border border-white/10 rounded-xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-gold/30 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="text-3xl font-bold text-white mb-1">23+</div>
            <div className="text-xs text-text-secondary uppercase tracking-wider">Nationwide Locations</div>
          </div>

          <div className="bg-surface/80 border border-gold/30 rounded-xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-gold/60 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="text-3xl font-bold text-gold mb-1 flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping"></span>
              {ongoingProjects.length}
            </div>
            <div className="text-xs text-gold uppercase tracking-wider font-semibold">Active Ongoing Hubs</div>
          </div>

          <div className="bg-surface/80 border border-white/10 rounded-xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="text-3xl font-bold text-emerald-400 mb-1">{completedProjects.length}</div>
            <div className="text-xs text-text-secondary uppercase tracking-wider">Completed Centers</div>
          </div>

          <div className="bg-surface/80 border border-white/10 rounded-xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="text-3xl font-bold text-white mb-1">10k+</div>
            <div className="text-xs text-text-secondary uppercase tracking-wider">Skilled Engineers</div>
          </div>
        </div>
      </motion.div>

      {/* Map & Controls Main Container */}
      <div className="bg-surface/90 border border-white/10 rounded-2xl p-4 lg:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden mb-16">
        
        {/* Top Control Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
          
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              All Projects ({allProjects.length})
            </button>

            <button
              onClick={() => setActiveFilter('ongoing')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 ${
                activeFilter === 'ongoing'
                  ? 'bg-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] font-bold'
                  : 'bg-white/5 text-gold hover:bg-gold/10 border border-gold/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
              Ongoing Hubs ({ongoingProjects.length})
            </button>

            <button
              onClick={() => setActiveFilter('completed')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 ${
                activeFilter === 'completed'
                  ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] font-bold'
                  : 'bg-white/5 text-emerald-400 hover:bg-emerald-500/10 border border-emerald-500/20'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Completed ({completedProjects.length})
            </button>
          </div>

          {/* Search and Reset Buttons */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 lg:w-64">
              <Search className="w-4 h-4 text-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, state, skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#080808] border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-text-secondary/60 focus:outline-none focus:border-gold transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-secondary hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={handleResetMap}
              title="Reset Map View"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-text-secondary hover:text-white hover:border-gold/40 transition-colors shrink-0 flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Map</span>
            </button>
          </div>
        </div>

        {/* Map View Frame */}
        <div className="relative w-full h-[550px] lg:h-[640px] rounded-xl overflow-hidden border border-white/10 shadow-inner bg-[#080808]">
          <div ref={mapContainerRef} className="w-full h-full z-0" />

          {/* Floating Dark Glass Legend */}
          <div className="absolute bottom-5 right-5 z-[400] bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 rounded-xl p-3.5 shadow-2xl pointer-events-auto">
            <div className="text-[11px] font-bold tracking-wider text-zinc-300 uppercase mb-2">Map Legend</div>
            <div className="space-y-2 text-xs font-light">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold shadow-[0_0_8px_#D4AF37]"></span>
                </span>
                <span className="text-white font-medium">Ongoing Projects ({ongoingProjects.length})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34D399]"></span>
                <span className="text-zinc-300">Completed Projects ({completedProjects.length})</span>
              </div>
            </div>
          </div>

          {/* Selected City Notification Indicator */}
          {selectedCity && (
            <div className="absolute top-5 left-5 z-[400] bg-[#0A0A0A]/90 backdrop-blur-md border border-gold/40 rounded-lg px-4 py-2.5 shadow-xl flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 animate-bounce" />
              <div>
                <div className="text-xs font-bold text-white">Viewing {selectedCity}</div>
                <div className="text-[10px] text-text-secondary">Click cards below or map markers for more</div>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Projects Directory & Details Section */}
      <div className="mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Project Centers Directory</h2>
            <p className="text-sm text-text-secondary font-light">
              Showing {filteredProjects.length} active and completed centers across India.
            </p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="px-3 py-1.5 bg-gold/10 border border-gold/30 text-gold rounded-full flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 8 Ongoing
            </span>
            <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> 15 Completed
            </span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isOngoing = project.status === 'ongoing';
            const isSelected = selectedCity === project.name;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCityClick(project)}
                className={`bg-surface border rounded-xl p-6 relative cursor-pointer transition-all duration-300 hover:-translate-y-1 group ${
                  isSelected 
                    ? 'border-gold shadow-[0_0_30px_rgba(212,175,55,0.2)] bg-[#141414]' 
                    : 'border-white/10 hover:border-white/20 hover:shadow-xl'
                }`}
              >
                {/* Status Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 ${
                    isOngoing 
                      ? 'bg-gold/15 text-gold border border-gold/30' 
                      : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {isOngoing ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                        Ongoing Hub
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Completed Center
                      </>
                    )}
                  </span>
                  <span className="text-xs text-text-secondary font-mono">
                    {project.coord[0].toFixed(2)}° N, {project.coord[1].toFixed(2)}° E
                  </span>
                </div>

                {/* City and State */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors flex items-center justify-between">
                  <span>{project.name}</span>
                  <MapPin className="w-4 h-4 text-text-secondary group-hover:text-gold transition-colors opacity-60 group-hover:opacity-100" />
                </h3>
                <div className="text-xs text-text-secondary font-light mb-4">{project.state}</div>

                {/* Focus / Track */}
                <div className="bg-[#080808] border border-white/5 rounded-lg p-3.5 mb-4">
                  <div className="text-[10px] text-text-secondary uppercase tracking-widest mb-1">Key Curriculum & Focus</div>
                  <div className="text-xs font-medium text-white/90">{project.focus}</div>
                </div>

                {/* Footer details & Action */}
                <div className="flex items-center justify-between text-xs pt-3 border-t border-white/5 text-text-secondary">
                  <span className="font-light">{project.students}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCityClick(project);
                    }}
                    className="text-gold hover:text-gold-light font-medium flex items-center gap-1 group-hover:underline"
                  >
                    View on Map →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-surface border border-white/5 rounded-xl">
            <p className="text-text-secondary">No project centers match your search term "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="mt-4 px-6 py-2 rounded-full bg-gold text-black text-xs font-bold uppercase tracking-wider"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Enterprise / Institution Partnership CTA */}
      <div className="mt-20 bg-gradient-to-br from-surface to-[#0A0A0A] border border-gold/20 rounded-2xl p-8 lg:p-14 relative overflow-hidden text-center">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-4">
            Partner With Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Launch a TechCity Skills Center at Your Campus
          </h2>
          <p className="text-sm text-text-secondary font-light mb-8 leading-relaxed">
            We partner with leading universities, state technical boards, and enterprise tech hubs across India to deliver accredited, hands-on engineering programs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="mailto:partnerships@techcityskills.com" 
              className="bg-gold text-black font-semibold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider hover:bg-gold-light transition-all shadow-[0_0_25px_rgba(212,175,55,0.2)]"
            >
              Request Institutional Partnership
            </a>
            <a 
              href="/#courses" 
              className="border border-white/20 text-white font-medium px-8 py-3.5 rounded-full text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-all"
            >
              Explore Academic Programs
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
