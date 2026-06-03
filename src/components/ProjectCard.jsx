import { motion } from 'framer-motion';

function ProjectCard({ project }) {
    return (
        <motion.article whileHover={{ y: -6 }} className="rounded-[2rem] border border-slate-300/70 bg-white/95 p-6 shadow-xl shadow-slate-300/20 backdrop-blur-lg">
            <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                    <p className="text-sm uppercase tracking-[0.34em] text-slate-600">Project</p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950">{project.title}</h3>
                </div>
                <div className="h-12 w-12 rounded-3xl bg-sky-100 ring-1 ring-slate-300/70" />
            </div>
            <p className="text-slate-700">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-300/70 bg-sky-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700">{tag}</span>
                ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.repo} className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">GitHub</a>
                <a href={project.demo} className="rounded-full border border-slate-300/70 bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">Live Demo</a>
            </div>
        </motion.article>
    );
}

export default ProjectCard;
