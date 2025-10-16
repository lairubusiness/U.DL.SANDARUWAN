import { useEffect, useRef } from "react";
import { motion } from "motion/react";
// Using absolute paths from the public directory
const frontImage = "/images/me.png";
const graduationImage = "/images/behaind.png";


export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mainPersonRef = useRef<HTMLImageElement>(null);
  const ghost1Ref = useRef<HTMLImageElement>(null);
  const ghost2Ref = useRef<HTMLImageElement>(null);
  const binaryRainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create Binary Rain Effect
    const createBinaryRain = () => {
      if (!binaryRainRef.current) return;
      
      binaryRainRef.current.innerHTML = '';
      const columnCount = Math.floor(window.innerWidth / 30);
      
      for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = `${i * 30}px`;
        
        let binaryString = '';
        const length = Math.floor(Math.random() * 20) + 10;
        for (let j = 0; j < length; j++) {
          binaryString += Math.random() > 0.5 ? '1' : '0';
          if (j < length - 1) binaryString += '<br>';
        }
        column.innerHTML = binaryString;
        
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        column.style.animationDuration = `${duration}s`;
        column.style.animationDelay = `${delay}s`;
        
        binaryRainRef.current.appendChild(column);
      }
    };

    createBinaryRain();

    // Tectonic Parallax Effect
    const handleMouseMove = (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 50;

      if (mainPersonRef.current) {
        mainPersonRef.current.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
      }
      if (ghost1Ref.current) {
        ghost1Ref.current.style.transform = `translate(${xAxis * 1.5}px, ${yAxis * 1.5}px)`;
      }
      if (ghost2Ref.current) {
        ghost2Ref.current.style.transform = `translate(${xAxis * 1.2}px, ${yAxis * 1.2}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (mainPersonRef.current) mainPersonRef.current.style.transform = 'translate(0, 0)';
      if (ghost1Ref.current) ghost1Ref.current.style.transform = 'translate(0, 0)';
      if (ghost2Ref.current) ghost2Ref.current.style.transform = 'translate(0, 0)';
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }

    window.addEventListener('resize', createBinaryRain);

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', createBinaryRain);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-between px-[8%] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A1A3F 0%, #0d2847 40%, #1a4d7a 100%)'
      }}
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-30 z-[1] pointer-events-none texture-overlay" />

      {/* Binary Rain Effect */}
      <div ref={binaryRainRef} className="binary-rain absolute inset-0 overflow-hidden z-[3] pointer-events-none" />

      {/* Programming Code Background */}
      <div className="code-background absolute w-full h-[200%] top-0 left-0 z-[4] pointer-events-none">
        <span className="code-line block opacity-70">// Full Stack Development Journey</span>
        <span className="code-line block opacity-70">const developer = {'{'}</span>
        <span className="code-line block opacity-70">  name: 'U.D Lahiru Sandaruwan',</span>
        <span className="code-line block opacity-70">  role: 'Full Stack Developer',</span>
        <span className="code-line block opacity-70">  skills: ['React', 'Next.js', 'Flutter', 'Firebase', 'Supabase'],</span>
        <span className="code-line block opacity-70">  passion: 'Building Innovative Solutions',</span>
        <span className="code-line block opacity-70">  status: 'Always Learning'</span>
        <span className="code-line block opacity-70">{'}'};</span>
        <span className="code-line block opacity-70"></span>
        <span className="code-line block opacity-70">function createMagic() {'{'}</span>
        <span className="code-line block opacity-70">  const code = writeCleanCode();</span>
        <span className="code-line block opacity-70">  const design = createBeautifulUI();</span>
        <span className="code-line block opacity-70">  return code + design + passion;</span>
        <span className="code-line block opacity-70">{'}'}</span>
        <span className="code-line block opacity-70"></span>
        <span className="code-line block opacity-70">class WebDeveloper extends Professional {'{'}</span>
        <span className="code-line block opacity-70">  constructor() {'{'}</span>
        <span className="code-line block opacity-70">    super();</span>
        <span className="code-line block opacity-70">    this.frontend = true;</span>
        <span className="code-line block opacity-70">    this.backend = true;</span>
        <span className="code-line block opacity-70">    this.database = true;</span>
        <span className="code-line block opacity-70">    this.creativity = Infinity;</span>
        <span className="code-line block opacity-70">  {'}'}</span>
        <span className="code-line block opacity-70">  buildProject(idea) {'{'}</span>
        <span className="code-line block opacity-70">    return this.code(idea).test().deploy();</span>
        <span className="code-line block opacity-70">  {'}'}</span>
        <span className="code-line block opacity-70">{'}'}</span>
        <span className="code-line block opacity-70"></span>
        <span className="code-line block opacity-70">const lahiru = new WebDeveloper();</span>
        <span className="code-line block opacity-70">lahiru.buildProject('Next Big Thing');</span>
        <span className="code-line block opacity-70"></span>
        <span className="code-line block opacity-70">export default developer;</span>
        <span className="code-line block opacity-70"></span>
        <span className="code-line block opacity-70">const developer = {'{'}</span>
        <span className="code-line block opacity-70">  name: 'U.D Lahiru Sandaruwan',</span>
        <span className="code-line block opacity-70">  role: 'Full Stack Developer',</span>
        <span className="code-line block opacity-70">  skills: ['React', 'Node.js', 'Python'],</span>
        <span className="code-line block opacity-70">  passion: 'Building Innovative Solutions'</span>
        <span className="code-line block opacity-70">{'}'};</span>
      </div>

      {/* Radial Glowing Blue Light Effect */}
      <div className="radial-glow absolute w-[800px] h-[800px] -right-[100px] top-1/2 -translate-y-1/2 z-[5]" />

      {/* Left Section - Person Images */}
      <motion.div
        className="flex-[0_0_45%] relative z-10 flex items-center justify-start h-screen"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="relative w-full max-w-[500px] h-[700px]">
          {/* Ghost/Overlay Images */}
          <img
            ref={ghost1Ref}
            src={graduationImage}
            alt="Academic Achievement"
            className="ghost-image absolute top-[50px] left-[-80px] w-[350px] h-auto opacity-[0.12] blur-[2px] brightness-75 transition-all duration-[800ms] pointer-events-none mix-blend-screen"
            style={{ 
              animation: 'parallaxFloat 6s ease-in-out infinite',
              transition: 'transform 0.3s ease-out'
            }}
          />
          
          <img
            ref={ghost2Ref}
            src={graduationImage}
            alt="Professional Career"
            className="ghost-image absolute bottom-[100px] right-[-60px] w-[350px] h-auto opacity-[0.12] blur-[2px] brightness-75 transition-all duration-[800ms] pointer-events-none mix-blend-screen"
            style={{ 
              animation: 'parallaxFloat 6s ease-in-out infinite 2s',
              transition: 'transform 0.3s ease-out'
            }}
          />
          
          {/* Main Professional Portrait */}
          <img
            ref={mainPersonRef}
            src={frontImage}
            alt="U.D Lahiru Sandaruwan"
            className="main-person relative w-full max-w-[450px] h-auto z-[5] transition-transform duration-[200ms]"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))',
              transition: 'transform 0.2s ease-out'
            }}
          />
        </div>
      </motion.div>

      {/* Right Section - Text Content */}
      <div className="flex-[0_0_50%] text-white z-10 pl-[60px] text-left relative">
        <motion.div
          className="upper-title font-forum tracking-[6px] uppercase text-white mb-[25px]"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          FULL STACK DEVELOPER
        </motion.div>
        
        <motion.h1
          className="main-name font-forum text-white"
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          style={{ textShadow: '0 0 30px rgba(0, 174, 239, 0.5)' }}
        >
          <span className="block">U.D Lahiru</span>
          <span className="block">Sandaruwan</span>
        </motion.h1>
        
        <motion.div
          className="subtitle font-glacial text-[#94a3b8] tracking-[2px] min-h-[2rem] flex items-center"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <span className="typing-text"></span>
        </motion.div>
      </div>
    </div>
  );
}
