import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Stethoscope, 
  Calendar, 
  MapPin, 
  Phone, 
  ChevronRight,
  Award,
  BookOpen
} from 'lucide-react';

// --- Types ---
interface ExpertiseItem {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const DrNishantProfile = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const expertise: ExpertiseItem[] = [
    { id: 1, title: "Hip & Knee Replacement", icon: <Activity size={20} /> },
    { id: 2, title: "Arthroscopy – Knee/Shoulder", icon: <Stethoscope size={20} /> },
    { id: 3, title: "Pelvis & Acetabulum Trauma", icon: <Activity size={20} /> },
    { id: 4, title: "Foot & Ankle Surgery", icon: <Activity size={20} /> },
    { id: 5, title: "Illizarov & Limb Salvage", icon: <Activity size={20} /> },
    { id: 6, title: "Complex Trauma Reconstruction", icon: <Activity size={20} /> },
  ];

  return (
    <section className="min-h-screen bg-[#f7f9f8] py-16 px-6 md:px-12 font-['DM_Sans'] text-[#0f1e1c]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/3 sticky top-8"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#2D8C7F] opacity-10 blur-xl group-hover:opacity-20 transition duration-500"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#e1e8e6] border border-[#2D8C7F]/20">
                {/* Image Placeholder - Replace 'src' with actual photo */}
                <div className="w-full h-full bg-gradient-to-tr from-[#2D8C7F]/20 to-transparent flex items-center justify-center">
                  <span className="text-[#2D8C7F] font-serif italic text-2xl">Dr. Nishant Verma</span>
                </div>
              </div>
            </div>
            
            <div
  className={`dp-contact-row dp-fade${hero.inView ? " in" : ""}`}
  style={{ transitionDelay: "0.42s" }}
>

  {/* Phone */}
  <a href="tel:+918837667062" className="dp-contact-pill">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
    +91 88376 67062
  </a>

  {/* Google Maps */}
  <a
    href="https://maps.app.goo.gl/X3u7poRoyjuLQEzi8?g_st=aw"
    target="_blank"
    className="dp-contact-pill"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
    Sarvodaya Hospital, Hisar
  </a>

  {/* Email */}
  <a
    href="mailto:drnishantverma422@gmail.com"
    className="dp-contact-pill"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M22 6l-10 7L2 6"/>
    </svg>
    Email
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/orthodr.nishant/"
    target="_blank"
    className="dp-contact-pill"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="18" cy="6" r="1"/>
    </svg>
    Instagram
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61588053463769"
    target="_blank"
    className="dp-contact-pill"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
    Facebook
  </a>

  {/* YouTube */}
  <a
    href="https://youtube.com/@nishantverma36?si=YEkCbCO9WhQvDRDT"
    target="_blank"
    className="dp-contact-pill"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <polygon points="10,9 16,12 10,15"/>
    </svg>
    YouTube
  </a>

</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full md:w-2/3"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#2D8C7F]/10 text-[#2D8C7F] text-xs font-bold tracking-widest uppercase mb-4">
            10+ Years Experience
            </span>
            <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] font-bold mb-2 leading-tight">
              Dr. Nishant Verma
            </h1>
            <p className="text-xl text-[#2D8C7F] font-medium mb-8">
              Consultant Orthopaedic Surgeon – Joint Replacement & Arthroscopy
            </p>
            
            <p className="text-[#4a5e5b] leading-relaxed text-lg mb-10 max-w-2xl">
              Currently posted at Sarvodaya Hospital, Hisar, Dr. Verma specializes in trauma, 
              arthroplasty, and complex limb reconstruction. His philosophy centers on 
              <span className="text-[#0f1e1c] font-medium"> evidence-based surgical planning</span> and 
              compassionate, whole-patient care.
            </p>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {expertise.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white border-l-4 border-[#2D8C7F] shadow-sm"
                >
                  <div className="text-[#2D8C7F]">{item.icon}</div>
                  <span className="font-medium text-sm">{item.title}</span>
                </motion.div>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-[#2D8C7F] hover:bg-[#1f6860] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-[#2D8C7F]/30 group">
              Book Appointment
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#2D8C7F]/5">
          <div className="flex gap-8 border-b border-[#f7f9f8] mb-8">
            <button 
              onClick={() => setActiveTab('experience')}
              className={`pb-4 text-sm uppercase tracking-[0.2em] font-bold relative transition-colors ${activeTab === 'experience' ? 'text-[#2D8C7F]' : 'text-[#4a5e5b]'}`}
            >
              Professional Path
              {activeTab === 'experience' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2D8C7F]" />}
            </button>
            <button 
              onClick={() => setActiveTab('education')}
              className={`pb-4 text-sm uppercase tracking-[0.2em] font-bold relative transition-colors ${activeTab === 'education' ? 'text-[#2D8C7F]' : 'text-[#4a5e5b]'}`}
            >
              Background
              {activeTab === 'education' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2D8C7F]" />}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div 
                key="exp"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Award className="text-[#2D8C7F] shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#0f1e1c]">Reputed Affiliations</h4>
                      <p className="text-[#4a5e5b] text-sm mt-1">Sant Parmanand Hospital (Delhi), MAMC (Agroha), and Geetanjali Hospital (Hisar).</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#f7f9f8] rounded-2xl border border-[#2D8C7F]/10 italic text-[#4a5e5b]">
                  "Focusing on accurate diagnosis and structured post-operative rehabilitation for long-term mobility."
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="edu"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <BookOpen className="text-[#2D8C7F] mt-1" />
                  <div>
                    <h4 className="font-bold text-[#0f1e1c]">MBBS, MS/MD (Orthopaedics)</h4>
                    <p className="text-[#4a5e5b] mt-2 leading-relaxed">
                      Specialized in age-related bone diseases, sports injuries, and complex fractures. 
                      Dr. Verma combines academic excellence with a patient-first approach to medicine.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DrNishantProfile;