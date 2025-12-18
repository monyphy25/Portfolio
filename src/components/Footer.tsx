import { Github, Linkedin, Twitter } from "lucide-react"; // Icons for social media links

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">© 2024 Portfolio. Built with passion.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
