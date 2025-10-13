import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, CheckCircle2, Zap, Users, Code } from "lucide-react";

const responsibilities = [
  {
    icon: Code,
    text: "Developed and deployed full-stack applications using Next.js, Flutter, Firebase, and Supabase"
  },
  {
    icon: Zap,
    text: "Built and integrated REST APIs, optimized databases, and implemented responsive UI/UX designs"
  },
  {
    icon: Users,
    text: "Collaborated with clients to deliver e-commerce platforms, management systems, and mobile apps"
  },
  {
    icon: CheckCircle2,
    text: "Ensured quality via software testing, debugging, and documentation"
  }
];

const technologies = [
  "Next.js", "React", "Flutter", "Firebase", "Supabase",
  "Node.js", "REST APIs", "TypeScript", "Tailwind CSS",
  "MongoDB", "PostgreSQL", "AWS", "GCP", "Vercel"
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-[8%] bg-gradient-to-b from-[#1e2f55] to-[#243764] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#334e8f] blur-[120px] top-0 right-0 animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#4366bb] blur-[100px] bottom-0 left-0 animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#4366bb] to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
              animation: `slideRight ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
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
              Work History
            </span>
          </motion.div>
          
          <h2 className="font-forum text-white mb-6 section-title inline-block">
            Professional Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Experience Card */}
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-[#1e2f55] to-[#2e4681] border-2 border-[#4366bb] shadow-[0_0_60px_rgba(67,102,187,0.3)] overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4366bb] via-[#6d89cb] to-[#4366bb]" />
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#4366bb] opacity-10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#38569e] opacity-10 blur-3xl" />

            <div className="relative">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 rounded-2xl bg-[#334e8f] text-[#6d89cb] shadow-lg"
                  >
                    <Briefcase className="w-8 h-8" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-white mb-2">Freelance Full Stack Developer</h3>
                    <div className="text-[#98acda]">Remote • Worldwide</div>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#4366bb]/20 border-2 border-[#4366bb] text-[#6d89cb] backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-[#6d89cb] animate-pulse" />
                  <span>2023 – Present</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-10">
                <h4 className="text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#4366bb] rounded-full" />
                  Key Responsibilities
                </h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {responsibilities.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-[#243764]/50 border border-[#38569e] hover:border-[#4366bb] hover:bg-[#293f72]/50 transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-[#334e8f] text-[#6d89cb] group-hover:bg-[#4366bb] group-hover:text-white transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <p className="text-[#a7b8e0] leading-relaxed flex-1">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#4366bb] rounded-full" />
                  Technologies & Tools
                </h4>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-wrap gap-3"
                >
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#334e8f] to-[#38569e] text-[#a7b8e0] border border-[#4366bb]/30 hover:border-[#4366bb] hover:shadow-[0_0_20px_rgba(67,102,187,0.4)] transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Completed", value: "15+" },
              { label: "Happy Clients", value: "10+" }
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#243764] to-[#293f72] border border-[#38569e] text-center group hover:border-[#4366bb] transition-all duration-300 hover:shadow-[0_0_30px_rgba(67,102,187,0.3)]"
              >
                <div className="text-white mb-2 group-hover:text-[#6d89cb] transition-colors">
                  {stat.value}
                </div>
                <div className="text-[#98acda]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes slideRight {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
