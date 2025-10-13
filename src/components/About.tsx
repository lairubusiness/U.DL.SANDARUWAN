import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Award, Download, Mail } from "lucide-react";

interface HighlightItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights: HighlightItem[] = [
    {
      icon: Code2,
      title: "Full Stack Expertise",
      description: "React, Next.js, Flutter & Cloud"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Responsive & User-Friendly"
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Firebase, AWS & GCP"
    },
    {
      icon: Award,
      title: "First Class Degree",
      description: "BSc Software Engineering"
    }
  ];

  return (
    <section className="relative py-32 px-[8%] bg-gradient-to-b from-[#141f38] to-[#192747] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#38569e] blur-[120px] opacity-30 top-0 left-0 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#4366bb] blur-[100px] opacity-20 bottom-0 right-0 animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      {/* Floating Code Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#6d89cb] font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${12 + Math.random() * 8}px`
            }}
          >
            {['{ }', '< >', '[ ]', '( )', '=>', '&&', '||'][Math.floor(Math.random() * 7)]}
          </div>
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
              About Me
            </span>
          </motion.div>
          
          <h2 className="font-forum text-white mb-6 section-title inline-block">
            Professional Summary
          </h2>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#1e2f55] to-[#243764] border border-[#38569e] hover:border-[#4366bb] transition-all duration-300 hover:shadow-[0_0_40px_rgba(67,102,187,0.3)] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4366bb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative">
                <div className="mb-4 inline-block p-3 rounded-xl bg-[#293f72] text-[#6d89cb] group-hover:bg-[#334e8f] group-hover:text-[#4366bb] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(67,102,187,0.4)]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white mb-2 group-hover:text-[#6d89cb] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#98acda]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative p-10 rounded-3xl bg-gradient-to-br from-[#1e2f55]/80 to-[#243764]/80 backdrop-blur-sm border border-[#38569e] shadow-[0_0_60px_rgba(67,102,187,0.2)]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4366bb] to-transparent" />
          
          <div className="text-[#a7b8e0] leading-relaxed space-y-6 max-w-5xl mx-auto">
            <p className="text-lg">
              Full Stack Developer with a strong academic foundation (<span className="text-[#6d89cb] font-medium">HND + BSc in Software Engineering</span>) 
              and hands-on experience in web, mobile, and system development. Skilled in <span className="text-[#6d89cb] font-medium">React, Next.js, 
              Flutter, Firebase, Supabase, and SQL</span>, with solid knowledge of Java, Python, C#, and PHP.
            </p>
            <p className="text-lg">
              Experienced in building <span className="text-[#6d89cb] font-medium">REST APIs</span>, deploying cloud-based solutions (<span className="text-[#6d89cb] font-medium">Firebase, AWS, GCP</span>), 
              and applying <span className="text-[#6d89cb] font-medium">Agile/Scrum</span> practices. Proven ability to deliver scalable, user-friendly 
              applications through freelance and academic projects.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-[#4366bb] opacity-10 blur-2xl" />
          <div className="absolute -top-2 -left-2 w-32 h-32 rounded-full bg-[#38569e] opacity-10 blur-2xl" />
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </section>
  );
}
