import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, Code2, Smartphone, Globe, MessageSquare, FileText, Bot } from "lucide-react";

const projects = [
  {
    title: "Green Grow Manager",
    description: "Agricultural management system with role-based access, PDF reporting, and climate data tracking. Features include crop monitoring, weather integration, and comprehensive analytics dashboard.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/lairubusiness/Green_Grow_Manager",
    icon: Globe,
    color: "from-emerald-500/20 to-green-600/20",
    borderColor: "border-emerald-500/50"
  },
  {
    title: "Game Lounge",
    description: "Mobile app for exploring and sharing games with Google Sign-in, media sharing, and real-time data. Complete social gaming platform with user profiles and game reviews.",
    tech: ["Flutter", "Firebase", "REST APIs"],
    github: "https://github.com/lairubusiness/Game-Lounge-app.git",
    icon: Smartphone,
    color: "from-purple-500/20 to-pink-600/20",
    borderColor: "border-purple-500/50"
  },
  {
    title: "Pizza Ordering System",
    description: "Desktop-based ordering and billing system with intuitive GUI. Features include menu management, order tracking, and automated receipt generation.",
    tech: ["Java", "Swing", "OOP"],
    github: "https://github.com/lairubusiness/com.pizza.system.git",
    icon: Code2,
    color: "from-orange-500/20 to-red-600/20",
    borderColor: "border-orange-500/50"
  },
  {
    title: "EASYNEWS App",
    description: "Cross-platform news aggregation app providing real-time feeds. Stay updated with breaking news, categorized content, and personalized news preferences.",
    tech: ["Flutter", "React Native", "REST APIs"],
    github: "https://github.com/lairubusiness/EASYNEWS-App",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-600/20",
    borderColor: "border-blue-500/50"
  },
  {
    title: "MySimpleNote",
    description: "Multi-platform note-taking app with offline data storage. Features rich text editing, categories, search functionality, and cloud sync capabilities.",
    tech: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/lairubusiness/MySimpleNote-.git",
    icon: FileText,
    color: "from-yellow-500/20 to-amber-600/20",
    borderColor: "border-yellow-500/50"
  },
  {
    title: "AI Chatbot",
    description: "Real-time AI chatbot with authentication, chat history, and responsive UI. Powered by OpenAI with context-aware conversations and user session management.",
    tech: ["Next.js", "Vercel", "Supabase", "OpenAI API"],
    github: "https://github.com/lairubusiness/nextjs-ai-chatbot",
    icon: Bot,
    color: "from-indigo-500/20 to-violet-600/20",
    borderColor: "border-indigo-500/50"
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-[8%] bg-gradient-to-b from-[#243764] to-[#293f72] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#38569e] blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '9s' }} />
      </div>

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
            <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="#4366bb" strokeWidth="0.5"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

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
              Portfolio
            </span>
          </motion.div>
          
          <h2 className="font-forum text-white mb-6 section-title inline-block">
            Featured Projects
          </h2>
          
          <p className="text-[#a7b8e0] max-w-2xl mx-auto">
            A showcase of my best work in full-stack development, mobile apps, and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#1e2f55] to-[#243764] border-2 ${project.borderColor} hover:border-[#4366bb] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(67,102,187,0.4)] overflow-hidden`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated Border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: `linear-gradient(90deg, transparent, #4366bb, transparent)`,
                    animation: hoveredIndex === index ? 'borderRotate 3s linear infinite' : 'none'
                  }} />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-4 rounded-xl bg-[#293f72] text-[#6d89cb] group-hover:bg-[#334e8f] group-hover:text-[#4366bb] transition-all duration-300 shadow-lg"
                    >
                      <project.icon className="w-7 h-7" />
                    </motion.div>
                    
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="p-3 rounded-lg bg-[#293f72]/50 text-[#7c95d0] hover:bg-[#334e8f] hover:text-[#4366bb] transition-all duration-300 backdrop-blur-sm"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Title */}
                  <h3 className="text-white mb-4 group-hover:text-[#6d89cb] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#a7b8e0] mb-6 leading-relaxed min-h-[120px]">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 rounded-full bg-[#293f72] text-[#98acda] border border-[#38569e] group-hover:border-[#4366bb] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#6d89cb] hover:text-[#4366bb] transition-colors group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4366bb] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Udlsandaru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#334e8f] to-[#4366bb] text-white hover:from-[#4366bb] hover:to-[#5f7dc6] transition-all duration-300 shadow-[0_8px_30px_rgba(67,102,187,0.3)] hover:shadow-[0_8px_40px_rgba(67,102,187,0.5)] hover:-translate-y-1 group"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes borderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
