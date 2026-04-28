import { 
  Github, 
  Mail, 
  MapPin, 
  Phone, 
  BookOpen, 
  Cpu, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Database,
  BrainCircuit,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`glass-nav transition-all duration-300 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            NAHIN <span className="text-brand-secondary">B.W.</span>
          </motion.span>
          
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <a 
            href="mailto:nahinbintewohab@gmail.com"
            className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-secondary rounded-full text-xs font-bold mb-6">
                <BrainCircuit size={14} />
                <span>AI Engineering & Research</span>
              </div>
              <h1 className="heading-lg">
                Nahin Binte Wohab
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-8">
                Computer Science graduate specializing in AI automation, deep learning, and full-stack systems. Driven by interpretable intelligence and innovative enterprise solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <ContactInfo icon={<Mail size={18} />} label="Email" value="nahinbintewohab@gmail.com" href="mailto:nahinbintewohab@gmail.com" />
                <ContactInfo icon={<Github size={18} />} label="GitHub" value="nahinbintewohab" href="https://github.com/nahinbintewohab" />
                <ContactInfo icon={<MapPin size={18} />} label="Location" value="Dhaka, Bangladesh" />
              </div>

              <div className="flex gap-4">
                <a href="#projects" className="px-6 py-3 bg-brand-secondary text-white rounded-xl font-semibold shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all flex items-center gap-2">
                  View Projects <ChevronRight size={18} />
                </a>
                <a href="#research" className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                  Read Research
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-auto md:h-[500px]"
            >
              <div className="absolute inset-0 bg-blue-100 rounded-3xl -rotate-3 transition-transform hover:rotate-0 duration-500 overflow-hidden shadow-inner">
                {/* Generic Avatar Placeholder since I can't generate the real photo from PDF efficiently without a path, but I can prompt for one or use an illustration */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-12">
                   <div className="text-center">
                      <Cpu size={120} strokeWidth={1} className="mx-auto mb-6 opacity-80" />
                      <div className="font-mono text-sm opacity-60">interpretable_ai.systems</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="bg-slate-50">
        <div className="section-container">
          <motion.div {...fadeIn}>
            <h2 className="heading-md uppercase tracking-widest text-brand-secondary text-sm font-bold">Background</h2>
            <h3 className="heading-lg mb-12">Driven by Curiosity & Tech</h3>
            <div className="grid md:grid-cols-2 gap-8 text-slate-600 leading-relaxed">
              <p>
                As an Information and Communication Engineering graduate (Ranked 7th in my cohort), I bridge the gap between theoretical research and practical application. My expertise spans AI automation, ERP systems, and deep learning architectures.
              </p>
              <p>
                My research interests focus on Explainable AI (XAI), Computer Vision, and Transformer-based models. I am passionate about creating technologies that are not only powerful but also interpretable and accessible for enterprise-grade deployment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="bg-white">
        <div className="section-container">
          <motion.div {...fadeIn}>
            <h2 className="heading-md uppercase tracking-widest text-brand-secondary text-sm font-bold flex items-center gap-2">
              <BookOpen size={16} /> Research & Publications
            </h2>
            <div className="grid gap-6 mt-12">
              <ResearchItem 
                title="Early Detection of Liver Disease: A Multimodal Approach"
                type="Academic Thesis"
                description="Combining clinical data and ultrasound imaging with machine learning to improve diagnostic accuracy."
                status="ICE-4211 | Supervisor: Prof. Dr. Abidur Rahaman"
              />
              <ResearchItem 
                title="DermStack: Benchmarking and Meta-Learner Stacking of CNN-Transformer Ensembles"
                type="Manuscript Under Review"
                description="Interpretable skin disease diagnosis using state-of-the-art ensemble architectures."
                status="Under Review"
              />
              <ResearchItem 
                title="OpenClaw AI Agents for LLM-Native Intelligence"
                type="In Preparation"
                description="Architectures, applications, and challenges for next-gen AI agent frameworks."
                status="Preparing for submission"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px] rounded-full translate-x-1/2"></div>
        <div className="section-container relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-4">Stack</h2>
            <h3 className="text-4xl font-bold mb-16">Technical Expertise</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <SkillCategory 
                title="AI & Data Science" 
                icon={<BrainCircuit className="text-blue-400" />}
                skills={["Deep Learning", "Computer Vision", "Explainable AI (XAI)", "Image Processing", "LLM Native Intelligence", "Data Analysis"]}
              />
              <SkillCategory 
                title="Development" 
                icon={<Code2 className="text-blue-400" />}
                skills={["Python", "C/C++", "Java", "SQL", "React", "FastAPI", "API Integration", "n8n Automation"]}
              />
              <SkillCategory 
                title="Tools & Frameworks" 
                icon={<Database className="text-blue-400" />}
                skills={["TensorFlow", "PyTorch", "Keras", "OpenCV", "Scikit-learn", "Git/GitHub", "MATLAB", "ERPNext"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white">
        <div className="section-container">
          <motion.div {...fadeIn}>
            <h2 className="heading-md uppercase tracking-widest text-brand-secondary text-sm font-bold">Career Path</h2>
            <h3 className="heading-lg mb-12">Professional Experience</h3>
            
            <div className="space-y-12">
              <ExperienceItem 
                company="ERP Implementation Officer"
                date="03/2026 - Present"
                location="Dhaka"
                tasks={[
                  "Implementing and configuring iDempiere and ERPNext modules for inventory, procurement, and accounts.",
                  "Collaborating with cross-functional teams to map business requirements to ERP workflows.",
                  "Performing user acceptance testing (UAT) and providing post-implementation support."
                ]}
                isActive
              />
              <ExperienceItem 
                company="BPO KPO Services"
                date="07/2024"
                location="Internship"
                tasks={[
                  "Streamlined operational workflow by creating structured process guides.",
                  "Utilized analytical tools to improve content visibility.",
                  "Designed promotional materials and layouts."
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-50">
        <div className="section-container">
          <motion.div {...fadeIn}>
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="heading-md uppercase tracking-widest text-brand-secondary text-sm font-bold">Portfolio</h2>
                <h3 className="heading-lg mb-0 text-slate-900 font-bold">Featured Projects</h3>
              </div>
              <a href="https://github.com/nahinbintewohab" className="text-slate-600 hover:text-brand-secondary flex items-center gap-2 font-medium">
                All Repositories <ExternalLink size={16} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Resume-Job Match Scorer"
                description="AI-driven matcher that scores job fit and suggests improvements using sentence-transformers and FastAPI."
                tags={["Python", "FastAPI", "React", "NLP"]}
              />
              <ProjectCard 
                title="LinkedIn Lead Generation"
                description="B2B pipeline for scraping LinkedIn postings and company data with automated email extraction."
                tags={["Python", "Scrapy", "Automation"]}
              />
              <ProjectCard 
                title="Personal AI Agent"
                description="Telegram-based agent leveraging OpenAI GPT and Google Calendar to automate event management via chat."
                tags={["GPT-4", "Node.js", "Telegram API"]}
              />
              <ProjectCard 
                title="LinkedIn Auto Post Gen"
                description="AI automation with smart scheduling, caption generation, and custom image creation from Google Sheets."
                tags={["Google Sheets", "OpenAI", "Image Gen"]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-white border-t border-slate-100">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                 <GraduationCap className="text-brand-secondary" /> Education
               </h3>
               <div className="space-y-6">
                 <EduItem 
                   school="Noakhali Science and Technology University"
                   degree="B.Sc in Information & Communication Engineering"
                   date="Graduating 08/2025"
                   result="CGPA: 3.58 (Ranked 7th)"
                 />
                 <EduItem 
                   school="Narsingdi Govt. College"
                   degree="Higher Secondary Certificate (HSC)"
                   date="2019"
                   result="GPA: 5.00 (General Grade Scholarship)"
                 />
               </div>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                 <CheckCircle2 className="text-brand-secondary" /> Certifications
               </h3>
               <ul className="space-y-4">
                 <CertItem title="AI Engineering Bootcamp" year="2026" />
                 <CertItem title="2nd International Conference on MIET" year="2024" />
                 <CertItem title="Mobile Game & App Development" year="2023" />
                 <CertItem title="Networking & Campus Network Design" year="2022" />
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-slate-400">
        <div className="section-container text-center">
          <p className="mb-4">© {new Date().getFullYear()} Nahin Binte Wohab. Built with React & Tailwind.</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:nahinbintewohab@gmail.com" className="hover:text-white"><Mail size={20} /></a>
            <a href="https://github.com/nahinbintewohab" className="hover:text-white"><Github size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactInfo({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{label}</span>
      <span className="text-sm font-medium text-slate-700">{value}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
      <div className="text-brand-secondary">{icon}</div>
      {href ? <a href={href} className="hover:text-brand-secondary transition-colors">{content}</a> : content}
    </div>
  );
}

function ResearchItem({ title, type, description, status }: any) {
  return (
    <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-all border-l-4 border-l-brand-secondary">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <h4 className="text-xl font-bold text-slate-900">{title}</h4>
        <span className="px-3 py-1 bg-white text-brand-secondary text-xs font-bold rounded-full border border-blue-100 whitespace-nowrap shadow-sm">
          {type}
        </span>
      </div>
      <p className="text-slate-600 mb-4">{description}</p>
      <div className="flex items-center gap-2 text-sm font-medium text-slate-500 italic">
         <FileText size={16} /> {status}
      </div>
    </div>
  );
}

function SkillCategory({ title, skills, icon }: any) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s: string) => (
          <span key={s} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg hover:bg-brand-secondary hover:text-white transition-colors cursor-default">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({ company, date, location, tasks, isActive }: any) {
  return (
    <div className="relative pl-8 border-l-2 border-slate-200">
      <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 bg-white ${isActive ? 'border-brand-secondary animate-pulse' : 'border-slate-300'}`}></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <h4 className="text-xl font-bold text-slate-900">{company}</h4>
        <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
          <span>{date}</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
          <span>{location}</span>
        </div>
      </div>
      <ul className="space-y-3">
        {tasks.map((t: string, i: number) => (
          <li key={i} className="flex gap-3 text-slate-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0"></span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tags }: any) {
  return (
    <div className="card-hover p-8 rounded-3xl">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-50 text-brand-secondary rounded-2xl">
          <Code2 size={24} />
        </div>
        <div className="flex gap-2">
          {tags.map((t: string) => (
            <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{t}</span>
          ))}
        </div>
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function EduItem({ school, degree, date, result }: any) {
  return (
    <div className="group">
      <h4 className="font-bold text-slate-900 group-hover:text-brand-secondary transition-colors">{school}</h4>
      <p className="text-slate-600 text-sm mb-1">{degree}</p>
      <div className="flex justify-between text-xs font-mono text-slate-400">
        <span>{date}</span>
        <span>{result}</span>
      </div>
    </div>
  );
}

function CertItem({ title, year }: any) {
  return (
    <li className="flex items-center justify-between py-2 border-b border-slate-50">
      <span className="text-slate-700 font-medium">{title}</span>
      <span className="text-xs font-mono text-slate-400">{year}</span>
    </li>
  );
}

