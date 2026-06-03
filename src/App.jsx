import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SectionHeader from './components/SectionHeader';
import StatCard from './components/StatCard';
import SkillBadge from './components/SkillBadge';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import ProfileCard from './components/ProfileCard';
import ContactForm from './components/ContactForm';

const heroRoles = ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver'];
const heroTagline = 'Building scalable web applications with modern technologies and solving real-world problems through code.';

const stats = [
    { label: 'LeetCode Problems', value: '100+' },
    { label: 'Skillrack Problems', value: '750+' },
    { label: 'Certifications', value: 'Multiple' },
    { label: 'Projects Built', value: 'Full Stack' },
];

const education = [
    {
        title: 'Sri Eshwar College of Engineering',
        period: '2024 – 2028',
        detail: 'B.Tech Computer Science and Business Systems • CGPA 8.02',
    },
    {
        title: 'Orison Academy Sr Sec School',
        period: 'Class 12',
        detail: '75.6% • Science stream',
    },
    {
        title: 'Orison Academy Sr Sec School',
        period: 'Class 10',
        detail: '84.2%',
    },
];

const skills = [
    {
        category: 'Languages',
        items: ['C', 'C++', 'JavaScript', 'Java', 'Python', 'HTML', 'CSS'],
    },
    {
        category: 'Frontend',
        items: ['React.js', 'Redux', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        category: 'Backend',
        items: ['Node.js', 'Express.js', 'Spring Boot'],
    },
    {
        category: 'Database',
        items: ['MongoDB', 'MySQL', 'SQL'],
    },
    {
        category: 'Cloud / DevOps',
        items: ['AWS EC2', 'AWS S3', 'Docker', 'GitHub Actions', 'Vercel'],
    },
    {
        category: 'Core Concepts',
        items: ['DSA', 'OOPS', 'DBMS', 'CN', 'REST APIs'],
    },
];

const projects = [
    {
        id: 'olympics',
        title: 'Olympics Management System',
        description: 'Full stack application with Spring Boot backend and React frontend for event administration and athlete workflows.',
        tags: ['Spring Boot', 'React', 'JWT', 'REST APIs'],
        repo: '#',
        demo: '#',
    },
    {
        id: 'document-verification',
        title: 'Digital Document Verification System',
        description: 'Secure document upload and verification workflows built with Node.js, React, and MongoDB.',
        tags: ['React', 'Node.js', 'MongoDB'],
        repo: '#',
        demo: '#',
    },
    {
        id: 'smart-campus',
        title: 'Smart Campus App',
        description: 'MERN stack campus portal with authentication, dashboards, and faculty controls.',
        tags: ['MERN', 'Authentication', 'Dashboard'],
        repo: '#',
        demo: '#',
    },
    {
        id: 'water-usage',
        title: 'Water Usage and Irrigation Monitoring System',
        description: 'Spring Boot and JSP application for monitoring irrigation data and operational dashboards.',
        tags: ['Spring Boot', 'JSP', 'MySQL'],
        repo: '#',
        demo: '#',
    },
];

const profiles = [
    { label: 'LeetCode', url: '#', accent: 'from-amber-400 to-amber-200' },
    { label: 'Skillrack', url: '#', accent: 'from-violet-500 to-fuchsia-500' },
    { label: 'HackerRank', url: '#', accent: 'from-teal-400 to-emerald-400' },
    { label: 'GitHub', url: '#', accent: 'from-slate-400 to-slate-200' },
    { label: 'LinkedIn', url: '#', accent: 'from-amber-300 to-amber-200' },
];

const certifications = ['Python Programming', 'Problem Solving in C', 'C++', 'Java', 'SQL'];

function App() {
    const [theme, setTheme] = useState('dark');
    const [typedText, setTypedText] = useState('Full Stack Developer');
    const [activeRole, setActiveRole] = useState(0);
    const [filter, setFilter] = useState('All');
    const [scrollProgress, setScrollProgress] = useState(0);

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projects;
        return projects.filter((project) => project.tags.some((tag) => tag.includes(filter)));
    }, [filter]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        const roleIndex = activeRole % heroRoles.length;
        let index = 0;
        const currentRole = heroRoles[roleIndex];
        const interval = setInterval(() => {
            index += 1;
            if (index > currentRole.length) {
                setTimeout(() => {
                    setActiveRole((prev) => prev + 1);
                    setTypedText('');
                }, 800);
                clearInterval(interval);
                return;
            }
            setTypedText(currentRole.slice(0, index));
        }, 90);
        return () => clearInterval(interval);
    }, [activeRole]);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const pageHeight = document.body.scrollHeight - window.innerHeight;
            setScrollProgress(Math.min(100, Math.max(0, (position / pageHeight) * 100)));
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative overflow-x-hidden bg-sky-100 text-slate-950">
            <div className="fixed inset-x-0 top-0 z-50 h-1 bg-sky-300/70">
                <div className="h-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300" style={{ width: `${scrollProgress}%` }} />
            </div>
            <Navbar theme={theme} setTheme={setTheme} />

            <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
                <section id="home" className="relative overflow-hidden rounded-[2rem] border border-slate-300/70 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(191,219,254,0.28),_transparent_35%)] p-8 shadow-glow sm:p-12">
                    <div className="pointer-events-none absolute inset-0 opacity-70 blur-2xl" />
                    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
                    <div className="absolute right-0 top-28 h-40 w-40 rounded-full bg-amber-400/10 blur-2xl" />
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-6">
                            <p className="inline-flex rounded-full border border-slate-300/80 bg-white/80 px-4 py-1 text-sm text-slate-950 shadow-sm backdrop-blur">Full Stack Developer & Computer Science Student</p>
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Hi, I’m <span className="text-sky-700">Srisaanth B</span>.</h1>
                            <p className="text-lg leading-8 text-slate-700">{heroTagline}</p>
                            <div className="space-y-3 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
                                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">View Projects</a>
                                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400">Download Resume</a>
                                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-sky-300 bg-sky-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Contact Me</a>
                            </div>
                            <div className="space-y-1 rounded-3xl border border-slate-300/70 bg-white/90 p-4 text-slate-700 shadow-xl shadow-slate-300/20 backdrop-blur">
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-600">Current focus</p>
                                <p className="text-lg font-medium text-slate-950">{typedText}<span className="animate-pulse text-sky-700">|</span></p>
                            </div>
                        </div>
                        <div className="relative rounded-[2rem] border border-slate-300/70 bg-white/90 p-6 shadow-xl shadow-slate-300/20 backdrop-blur-lg">
                            <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-sky-300/20 blur-2xl" />
                            <div className="absolute -right-8 bottom-10 h-20 w-20 rounded-full bg-sky-200/20 blur-2xl" />
                            <div className="space-y-6">
                                <div className="rounded-3xl border border-slate-300/70 bg-white/95 p-6 shadow-lg shadow-slate-300/20 backdrop-blur">
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Recruiter-focused summary</p>
                                    <p className="mt-4 text-slate-700">I build premium web experiences with clean frontend interfaces, scalable backend systems, and effective problem solving for internship-ready deliverables.</p>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {stats.map((item) => (
                                        <StatCard key={item.label} label={item.label} value={item.value} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section id="about" className="mt-20">
                    <SectionHeader number="01" title="About Me" subtitle="Focused on building modern applications with strong backend architecture." />
                    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                        <motion.article initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-slate-300/70 bg-white/90 p-8 shadow-glow backdrop-blur-lg">
                            <p className="leading-8 text-slate-700">
                                I’m a B.Tech Computer Science and Business Systems student at Sri Eshwar College of Engineering with a strong focus on full stack development. I enjoy solving backend problems, designing scalable systems, and creating polished user experiences.
                            </p>
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl border border-slate-300/70 bg-white/95 p-5 text-slate-700 shadow-lg shadow-slate-300/20">
                                    <p className="text-sm uppercase tracking-[0.28em] text-slate-600">Education</p>
                                    <p className="mt-3 text-lg font-semibold text-slate-950">Sri Eshwar College of Engineering</p>
                                </div>
                                <div className="rounded-3xl border border-slate-300/70 bg-white/95 p-5 text-slate-700 shadow-lg shadow-slate-300/20">
                                    <p className="text-sm uppercase tracking-[0.28em] text-slate-600">Focus Areas</p>
                                    <ul className="mt-3 space-y-2 text-slate-700">
                                        <li>Backend systems</li>
                                        <li>Scalable architecture</li>
                                        <li>Problem solving</li>
                                        <li>Recruiter-ready code quality</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.article>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="grid gap-4">
                            {education.map((item, index) => (
                                <TimelineItem key={`${item.title}-${item.period}-${index}`} title={item.title} period={item.period} detail={item.detail} />
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section id="skills" className="mt-24">
                    <SectionHeader number="02" title="Skills" subtitle="Core languages, frameworks, databases, and cloud workflows." />
                    <div className="grid gap-6 lg:grid-cols-3">
                        {skills.map((block) => (
                            <motion.div key={block.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-slate-300/70 bg-white/90 p-6 shadow-lg shadow-slate-300/20 backdrop-blur-lg">
                                <h3 className="text-xl font-semibold text-slate-950">{block.category}</h3>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {block.items.map((skill) => (
                                        <SkillBadge key={skill} label={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="mt-24">
                    <SectionHeader number="03" title="Projects" subtitle="Recruiter-ready, polished web applications built with modern stacks." />
                    <div className="mb-8 flex flex-wrap gap-3">
                        {['All', 'React', 'Spring Boot', 'Node.js', 'MERN', 'MongoDB'].map((item) => (
                            <button key={item} onClick={() => setFilter(item)} className={`${filter === item ? 'bg-sky-300 text-slate-950' : 'bg-white/90 text-slate-700 hover:bg-sky-100'} rounded-full px-5 py-2 text-sm font-medium transition`}>{item}</button>
                        ))}
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                <section id="experience" className="mt-24">
                    <SectionHeader number="04" title="Experience" subtitle="Hands-on internship and project experience with backend APIs and integrations." />
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-slate-300/70 bg-white/90 p-8 shadow-glow backdrop-blur-lg">
                        <div className="grid gap-6 lg:grid-cols-[0.3fr_1fr] lg:items-start">
                            <div className="space-y-2">
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Internship Experience</p>
                                <p className="text-2xl font-semibold text-slate-950">Olympics Project Experience</p>
                            </div>
                            <div className="grid gap-4 text-slate-700 sm:grid-cols-2">
                                {['Backend APIs', 'Authentication', 'Database optimization', 'Frontend integration'].map((item) => (
                                    <div key={item} className="rounded-3xl border border-slate-300/70 bg-white/95 p-5">
                                        <p className="font-medium text-slate-950">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section id="profiles" className="mt-24">
                    <SectionHeader number="05" title="Coding Profiles" subtitle="Active presence across coding and developer communities." />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {profiles.map((profile) => (
                            <ProfileCard key={profile.label} profile={profile} />
                        ))}
                    </div>
                </section>

                <section id="certifications" className="mt-24">
                    <SectionHeader number="06" title="Certifications" subtitle="Recognized certifications that support my technical journey." />
                    <div className="scrollbar-hide mt-8 flex gap-4 overflow-x-auto pb-2">
                        {certifications.map((cert) => (
                            <motion.div key={cert} whileHover={{ y: -6 }} className="min-w-[250px] rounded-[2rem] border border-slate-300/70 bg-white/90 p-6 shadow-xl shadow-slate-300/20 backdrop-blur-lg">
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Certification</p>
                                <p className="mt-4 text-xl font-semibold text-slate-950">{cert}</p>
                                <p className="mt-3 text-slate-700">Completed online certification with strong practical outcomes and quiz-based validation.</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="mt-24 pb-16">
                    <SectionHeader number="07" title="Contact" subtitle="Let’s connect and turn ideas into production-ready solutions." />
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-slate-300/70 bg-white/90 p-8 shadow-glow backdrop-blur-lg">
                            <h3 className="text-xl font-semibold text-slate-950">Reach out directly</h3>
                            <div className="mt-6 space-y-4 text-slate-700">
                                <div className="rounded-3xl border border-slate-300/70 bg-white/95 p-5">
                                    <p className="text-sm text-slate-600">Email</p>
                                    <a href="mailto:contact@srisaanth.dev" className="mt-2 block text-lg text-slate-950">contact@srisaanth.dev</a>
                                </div>
                                <div className="rounded-3xl border border-slate-300/70 bg-white/95 p-5">
                                    <p className="text-sm text-slate-600">Professional Profile</p>
                                    <a href="#" className="mt-2 block text-lg text-slate-950">linkedin.com/in/srisaanthb</a>
                                </div>
                                <div className="rounded-3xl border border-slate-300/70 bg-white/95 p-5">
                                    <p className="text-sm text-slate-600">GitHub</p>
                                    <a href="#" className="mt-2 block text-lg text-slate-950">github.com/srisaanth</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
                            <ContactForm />
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
