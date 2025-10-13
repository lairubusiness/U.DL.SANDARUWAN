import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Database, Cloud, Wrench, Users, Target, Lightbulb, TrendingUp } from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "Java", level: 88 },
      { name: "C#", level: 80 },
      { name: "Dart", level: 90 },
      { name: "PHP", level: 82 },
      { name: "SQL", level: 87 }
    ],
    color: "#4366bb"
  },
  {
    category: "Frameworks & Libraries",
    icon: Wrench,
    skills: [
      { name: "Next.js", level: 92 },
      { name: "React", level: 95 },
      { name: "Flutter", level: 93 },
      { name: "Bootstrap", level: 88 },
      { name: "Tailwind CSS", level: 90 }
    ],
    color: "#38569e"
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 87 },
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 92 },
      { name: "Supabase", level: 88 }
    ],
    color: "#334e8f"
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 80 },
      { name: "GCP", level: 78 },
      { name: "Vercel", level: 90 },
      { name: "Firebase Hosting", level: 92 },
      { name: "Git & GitHub", level: 93 }
    ],
    color: "#2e4681"
  }
];

const softSkills = [
  { icon: Users, name: "Leadership & Team Collaboration", color: "#4366bb" },
  { icon: Target, name: "Communication & Problem-Solving", color: "#38569e" },
  { icon: Lightbulb, name: "Project Management", color: "#334e8f" },
  { icon: Code2, name: "Prototype & Diagram Design", color: "#2e4681" },
  { icon: TrendingUp, name: "Agile & Scrum", color: "#293f72" },
  { icon: Database, name: "REST APIs", color: "#243764" },
  { icon: Wrench, name: "UI/UX Design", color: "#4366bb" },
  { icon: Cloud, name: "Software Testing", color: "#38569e" }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-[8%] bg-gradient-to-b from-[#293f72] to-[#2e4681] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#4366bb] blur-[120px] top-0 left-0 animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#334e8f] blur-[100px] bottom-0 right-0 animate-pulse" style={{ animationDuration: '11s' }} />
      </div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #4366bb 1px, transparent 1px),
            linear-gradient(0deg, #4366bb 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#4366bb]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
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
              Expertise
            </span>
          </motion.div>
          
          <h2 className="font-forum text-white mb-6 section-title inline-block">
            Technical Skills
          </h2>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1e2f55] to-[#243764] border-2 border-[#38569e] hover:border-[#4366bb] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(67,102,187,0.4)] overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4366bb]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-xl bg-[#293f72] text-[#6d89cb] group-hover:bg-[#334e8f] group-hover:text-[#4366bb] transition-all duration-300 shadow-lg"
                  >
                    <skillGroup.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-white group-hover:text-[#6d89cb] transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-4">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#a7b8e0]">{skill.name}</span>
                        <span className="text-[#6d89cb]">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-[#1e2f55] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                          className="absolute top-0 left-0 h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skillGroup.color}, #6d89cb)`,
                            boxShadow: `0 0 10px ${skillGroup.color}80`
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" style={{ backgroundColor: skillGroup.color }} />
            </motion.div>
          ))}
        </div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="font-forum text-white mb-6 section-title inline-block">
              Professional Skills
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#1e2f55] to-[#243764] border border-[#38569e] hover:border-[#4366bb] transition-all duration-300 text-center overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`
                }} />
                
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-4 rounded-xl bg-[#293f72] text-[#6d89cb] group-hover:bg-[#334e8f] group-hover:text-[#4366bb] transition-all duration-300 mb-4 shadow-lg"
                  >
                    <skill.icon className="w-6 h-6" />
                  </motion.div>
                  
                  <p className="text-[#a7b8e0] group-hover:text-[#98acda] transition-colors leading-snug">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
