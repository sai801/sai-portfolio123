import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-900 py-8 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Yerram Lakshmi Narasimha Sai. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/sai801" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/lakshmi-narasimha-sai-yerram-08b344278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
