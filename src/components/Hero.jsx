import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animation-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/20 rounded-full blur-[120px] animation-pulse" />

            <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-glow text-sm mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for new opportunities
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Hi, I'm <br />
                        <span className="text-gradient">Yerram Lakshmi</span>
                        <br /> <span className="text-gradient">Narasimha Sai</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-lg">
                        AI/ML Engineer & Frontend Developer passionate about building intelligent systems and creating beautiful user experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#contact" className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
                            Contact Me
                        </a>
                        <a href="/resume.pdf" download className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2 group">
                            Download CV
                            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                        </a>
                    </div>

                    <div className="mt-12 flex gap-6 text-gray-400">
                        <a href="https://github.com/sai801" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/lakshmi-narasimha-sai-yerram-08b344278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                        <a href="mailto:yerramsai973@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-80 h-96 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent-purple rounded-2xl rotate-6 opacity-50 blur-lg"></div>
                        <div className="absolute inset-0 bg-dark-800 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center group">
                            <img
                                src="/profile.jpg"
                                alt="Yerram Lakshmi Narasimha Sai"
                                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white">AI / ML Enthusiast</h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
