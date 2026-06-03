import { motion } from 'framer-motion';

function StatCard({ label, value }) {
    return (
        <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-slate-300/70 bg-white p-5 shadow-xl shadow-slate-300/20 backdrop-blur-lg">
            <p className="text-3xl font-semibold text-slate-950">{value}</p>
            <p className="mt-2 text-sm text-slate-700">{label}</p>
        </motion.div>
    );
}

export default StatCard;
