import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send, MessageSquare, Copy, Check } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: ["+94 70 284 2715", "+94 76 278 3426"],
    color: "#4366bb"
  },
  {
    icon: Mail,
    label: "Email",
    value: ["udlsandaruwan@gmail.com"],
    link: "mailto:udlsandaruwan@gmail.com",
    color: "#38569e"
  },
  {
    icon: MapPin,
    label: "Address",
    value: ["54/1 Vitanamulla, Marbodala, Vayangoda"],
    color: "#334e8f"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/lahiru-sandaruwan-633781225",
    color: "#0077b5",
    username: "lahiru-sandaruwan"
  },
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/Udlsandaru",
    color: "#333",
    username: "@Udlsandaru"
  },
  {
    icon: ExternalLink,
    label: "Portfolio",
    url: "https://udls-portfoliosite-uase.vercel.app",
    color: "#4366bb",
    username: "Live Site"
  }
];

const references = [
  {
    name: "Thanuja Dissanyake",
    title: "Deputy Head of Academic Affairs",
    institution: "ESOFT Metro Campus",
    phone: "+94 77 317 1270"
  },
  {
    name: "Ruchitha Wickramasinghe",
    title: "Center Manager",
    institution: "ESOFT Metro Campus",
    phone: "+94 77 003 9540",
    email: "ruchitha.wickramasinghe@esoft.lk"
  }
];

const languages = [
  { name: "Sinhala", level: "Native", flag: "🇱🇰" },
  { name: "English", level: "Fluent", flag: "🇬🇧" }
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("udlsandaruwan@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative py-32 px-[8%] bg-gradient-to-b from-[#2e4681] to-[#141f38] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] rounded-full bg-[#4366bb] blur-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle, #4366bb 1px, transparent 1px)',
        backgroundSize: '30px 30px'
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
              Let's Connect
            </span>
          </motion.div>
          
          <h2 className="font-forum text-white mb-6 section-title inline-block">
            Get In Touch
          </h2>
          
          <p className="text-[#a7b8e0] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1e2f55] to-[#243764] border-2 border-[#38569e] hover:border-[#4366bb] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(67,102,187,0.4)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: `radial-gradient(circle at top left, ${info.color}20, transparent 70%)`
              }} />
              
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block p-4 rounded-xl bg-[#293f72] text-[#6d89cb] group-hover:bg-[#334e8f] group-hover:text-[#4366bb] transition-all duration-300 mb-6 shadow-lg"
                  style={{ boxShadow: `0 0 20px ${info.color}40` }}
                >
                  <info.icon className="w-7 h-7" />
                </motion.div>
                
                <h4 className="text-[#7c95d0] mb-4">{info.label}</h4>
                
                <div className="space-y-2">
                  {info.value.map((val, valIndex) => (
                    <div key={valIndex}>
                      {info.link ? (
                        <div className="flex items-center gap-2">
                          <a
                            href={info.link}
                            className="text-[#a7b8e0] hover:text-[#4366bb] transition-colors flex-1"
                          >
                            {val}
                          </a>
                          <button
                            onClick={copyEmail}
                            className="p-2 rounded-lg bg-[#293f72] text-[#6d89cb] hover:bg-[#334e8f] hover:text-[#4366bb] transition-all"
                            title="Copy email"
                          >
                            {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      ) : (
                        <p className="text-[#a7b8e0]">{val}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-white text-center mb-8">Connect With Me</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#1e2f55] to-[#243764] border-2 border-[#38569e] hover:border-[#4366bb] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(67,102,187,0.4)] min-w-[200px] overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: `radial-gradient(circle at center, ${social.color}15, transparent 70%)`
                }} />
                
                <div className="relative flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#293f72] text-[#6d89cb] group-hover:bg-[#334e8f] group-hover:text-[#4366bb] transition-all duration-300">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white mb-1">{social.label}</div>
                    <div className="text-[#7c95d0]">{social.username}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* References and Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* References */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#6d89cb]" />
              References
            </h3>
            
            <div className="space-y-4">
              {references.map((ref, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#1e2f55] to-[#243764] border border-[#38569e] hover:border-[#4366bb] transition-all duration-300"
                >
                  <h4 className="text-white mb-2">{ref.name}</h4>
                  <div className="text-[#98acda] mb-1">{ref.title}</div>
                  <div className="text-[#7c95d0] mb-3">{ref.institution}</div>
                  <div className="space-y-1">
                    <div className="text-[#a7b8e0] flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#6d89cb]" />
                      {ref.phone}
                    </div>
                    {ref.email && (
                      <div className="text-[#a7b8e0] flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#6d89cb]" />
                        {ref.email}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-white mb-6">Languages</h3>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#1e2f55] to-[#243764] border border-[#38569e] hover:border-[#4366bb] transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{lang.flag}</span>
                      <div>
                        <h4 className="text-white mb-1">{lang.name}</h4>
                        <div className="text-[#6d89cb]">{lang.level}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Button */}
            <motion.a
              href="mailto:udlsandaruwan@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex items-center justify-center gap-3 w-full p-5 rounded-2xl bg-gradient-to-r from-[#334e8f] to-[#4366bb] text-white hover:from-[#4366bb] hover:to-[#5f7dc6] transition-all duration-300 shadow-[0_8px_30px_rgba(67,102,187,0.3)] hover:shadow-[0_8px_40px_rgba(67,102,187,0.5)]"
            >
              <Send className="w-5 h-5" />
              <span>Send a Message</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center pt-12 border-t border-[#38569e]"
        >
          <p className="text-[#7c95d0] mb-4">
            © {new Date().getFullYear()} U.D Lahiru Sandaruwan. All rights reserved.
          </p>
          <p className="text-[#98acda]">
            Designed & Developed with passion 💙
          </p>
        </motion.div>
      </div>
    </section>
  );
}
