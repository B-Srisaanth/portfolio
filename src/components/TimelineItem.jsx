function TimelineItem({ title, period, detail }) {
    return (
        <div className="relative rounded-[2rem] border border-slate-300/70 bg-white/95 p-6 shadow-lg shadow-slate-300/20 backdrop-blur-lg">
            <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-sky-500 shadow-glow" />
            <div className="ml-5 space-y-3">
                <p className="text-sm uppercase tracking-[0.28em] text-sky-700/80">{period}</p>
                <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                <p className="text-slate-700">{detail}</p>
            </div>
        </div>
    );
}

export default TimelineItem;
