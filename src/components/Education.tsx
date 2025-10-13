import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const educationData = [
  {
    year: "2024 – 2025",
    degree: "BSc Software Engineering",
    institution: "Kingston University, UK",
    location: "Esoft Metro Campus",
    grade: "Class: First Class",
    icon: GraduationCap,
    highlight: true,
    color: "#4366bb"
  },
  {
    year: "2023 – 2024",
    degree: "Pearson Higher National Diploma in Software Engineering",
    institution: "Esoft Metro Campus",
    grade: "Grade: Merit",
    icon: Award,
    highlight: true,
    color: "#38569e"
  },
  {
    year: "2022 – 2023",
    degree: "Pearson Diploma in ICT (DITEC)",
    institution: "Esoft Metro Campus",
    grade: "Grade: Merit",
    icon: BookOpen,
    color: "#334e8f"
  },
  {
    year: "2022",
    degree: "Pearson Diploma in English (DIE)",
    institution: "Esoft Metro Campus",
    grade: "Grade: Merit",
    duration: "Duration: 4 months",
    icon: BookOpen,
    color: "#2e4681"
  },
  {
    year: "2022",
    degree: "UK My Class English Course",
    institution: "British Council, Sri Lanka",
    duration: "Duration: 6 months (Online)",
    icon: BookOpen,
    color: "#293f72"
  },
  {
    year: "2019",
    degree: "Certificate Course in Computer Applications",
    institution: "IHRA, University of Colombo",
    grade: "Grade: Merit Pass",
    duration: "Contact Hours: 120 hours",
    icon: BookOpen,
    color: "#243764"
  }
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-[8%] bg-gradient-to-b from-[#192747] to-[#1e2f55] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[#4366bb] blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#4366bb 1px, transparent 1px), linear-gradient(90deg, #4366bb 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="font-forum tracking-[4px] uppercase text-[#6d89cb] bg-[#243764] px-6 py-2 rounded-full border border-[#38569e]">
              Academic Journey
            </span>
          </motion.div>
          
          <h2 className="font-forum text-white mb-6 section-title inline-block">
            Education & Qualifications
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4366bb] via-[#38569e] to-[#243764] hidden lg:block" style={{
            boxShadow: '0 0 20px rgba(67, 102, 187, 0.5)'
          }} />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden lg:block">
                  <div className="relative">
                    <div className={`w-6 h-6 rounded-full ${edu.highlight ? 'bg-[#4366bb]' : 'bg-[#38569e]'} shadow-[0_0_30px_rgba(67,102,187,0.8)] border-4 border-[#1e2f55]`} />
                    <div className={`absolute inset-0 rounded-full ${edu.highlight ? 'bg-[#4366bb]' : 'bg-[#38569e]'} animate-ping opacity-75`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`group relative p-8 rounded-2xl bg-gradient-to-br ${edu.highlight ? 'from-[#243764] to-[#2e4681]' : 'from-[#1e2f55] to-[#243764]'} border-2 ${edu.highlight ? 'border-[#4366bb]' : 'border-[#38569e]'} hover:border-[#6d89cb] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(67,102,187,0.4)]`}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    <div className="relative">
                      {/* Icon and Year */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl ${edu.highlight ? 'bg-[#334e8f]' : 'bg-[#293f72]'} text-[#6d89cb] group-hover:bg-[#38569e] group-hover:text-[#4366bb] transition-all duration-300 shadow-lg`}>
                          <edu.icon className="w-6 h-6" />
                        </div>
                        
                        <div className="flex items-center gap-2 text-[#6d89cb] bg-[#1e2f55]/50 px-4 py-2 rounded-full border border-[#38569e]">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-white mb-3 group-hover:text-[#6d89cb] transition-colors">
                        {edu.degree}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2 text-[#98acda]">
                          <span className="text-[#4366bb] mt-1">•</span>
                          <span>{edu.institution}</span>
                        </div>
                        
                        {edu.location && (
                          <div className="flex items-start gap-2 text-[#7c95d0]">
                            <span className="text-[#4366bb] mt-1">•</span>
                            <span>{edu.location}</span>
                          </div>
                        )}
                      </div>

                      {/* Grade/Duration */}
                      <div className="flex flex-wrap gap-2">
                        {edu.grade && (
                          <span className={`px-4 py-2 rounded-full ${edu.highlight ? 'bg-[#4366bb]/20 text-[#6d89cb] border border-[#4366bb]' : 'bg-[#334e8f] text-[#98acda]'}`}>
                            {edu.grade}
                          </span>
                        )}
                        {edu.duration && (
                          <span className="px-4 py-2 rounded-full bg-[#293f72] text-[#7c95d0]">
                            {edu.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    {edu.highlight && (
                      <div className="absolute -top-1 -right-1 w-20 h-20">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#4366bb] to-transparent opacity-30 rounded-tr-2xl" />
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden lg:block lg:w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
