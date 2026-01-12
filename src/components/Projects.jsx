
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Symposium UI/UX Design",
            description: "Designed an interactive and dynamic user interface for the college's yearly symposium. Created a modern visual identity and seamless user experience.",
            tags: ["UI/UX", "Figma", "Frontend", "Design"],
            links: { github: "https://github.com/sai801", demo: "https://avinyaa2025.web.app/" }
        },
        {
            title: "Age Prediction System",
            description: "Developed an advanced system using Effnet-V2S to predict age through facial features and vocal analysis. Demonstrates multimodal deep learning capabilities.",
            tags: ["Deep Learning", "Computer Vision", "Effnet-V2S", "Python"],
            links: { github: "https://github.com/sai801", demo: "#" }
        },
        {
            title: "Mental Health LLM Chatbot",
            description: "Fine-tuned a Large Language Model on mental health datasets to create an empathetic AI support chatbot. Focused on safe and helpful conversational AI.",
            tags: ["LLM", "NLP", "Generative AI", "Python"],
            links: { github: "https://github.com/sai801", demo: "#" }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-dark-800">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                                <Zap className="text-gray-600 group-hover:text-primary transition-colors transform group-hover:scale-110 duration-500" size={48} />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-primary-glow border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
