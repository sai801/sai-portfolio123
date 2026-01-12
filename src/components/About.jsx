import { motion } from 'framer-motion';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

const About = () => {
    const education = [
        {
            degree: "B.Tech - AI and ML",
            school: "RMD Engineering College",
            year: "2022 – 2026",
            score: "7.04 CGPA"
        },
        {
            degree: "Intermediate (12th)",
            school: "Narayana Junior College, A.P.",
            year: "Completed",
            score: "74%"
        },
        {
            degree: "Secondary Education (10th)",
            school: "Roshini Ratnam High School, A.P.",
            year: "Completed",
            score: "87.8%"
        }
    ];

    const certifications = [
        "Microsoft Certified: Azure Fundamentals",
        "Oracle Certified AI Foundations Associate",
        "Oracle Generative AI Professional",
        "NPTEL: Computer Vision And Image Processing"
    ];

    return (
        <section id="about" className="py-20 bg-dark-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-purple mx-auto rounded-full" />
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Aiming to contribute to the organization with my AI/ML skills while enhancing my career in the tech industry.
                        Passionate about leveraging innovative technologies to solve real-world problems.
                        Eager to collaborate with dynamic teams and develop cutting-edge solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-dark-700/50 rounded-lg text-primary">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="glass-card p-6 rounded-xl hover:bg-dark-700/50 transition-colors">
                                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                    <p className="text-primary-glow font-medium">{edu.school}</p>
                                    <div className="flex justify-between mt-2 text-sm text-gray-400">
                                        <span>{edu.year}</span>
                                        <span className="bg-primary/10 px-2 py-0.5 rounded text-primary">{edu.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-dark-700/50 rounded-lg text-accent-purple">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-semibold">Certifications</h3>
                        </div>

                        <div className="glass-card rounded-xl overflow-hidden">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="p-5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors flex items-start gap-3"
                                >
                                    <div className="mt-1 text-accent-cyan">
                                        <BookOpen size={16} />
                                    </div>
                                    <p className="text-gray-300">{cert}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 glass-card p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4 text-white">Soft Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Strong Technical Skills", "Quick Learner", "Effective Communicator", "Self-Motivated", "Adaptable", "Collaborative Team Player"].map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
