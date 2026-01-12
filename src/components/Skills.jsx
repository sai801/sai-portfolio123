import { motion } from 'framer-motion';

const Skills = () => {
    const skillsData = [
        {
            category: "Artificial Intelligence",
            items: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "Azure AI"]
        },
        {
            category: "Languages",
            items: ["Python", "Java", "SQL", "HTML/CSS", "JavaScript"]
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "MS Azure", "MySQL", "VS Code", "Jupyter"]
        }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.1 }}
                            className="glass-card p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />

                            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-primary transition-colors">
                                {group.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {group.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-dark-900/50 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-primary/50 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
