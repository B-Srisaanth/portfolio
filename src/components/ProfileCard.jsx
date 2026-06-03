import { motion } from 'framer-motion';

function ProfileCard({ profile }) {
    return (
        <motion.a whileHover={{ y: -6 }} href={profile.url} className={`group rounded-[2rem] border border-slate-300/70 bg-gradient-to-br ${profile.accent} p-6 text-slate-950 shadow-xl shadow-slate-300/20 transition hover:scale-[1.01]`}>
            <div className="rounded-3xl bg-white/90 p-4 transition group-hover:bg-slate-100">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-700">{profile.label}</p>
                <p className="mt-4 text-xl font-semibold">View Profile</p>
            </div>
        </motion.a>
    );
}

export default ProfileCard;
