function SectionHeader({ number, title, subtitle }) {
    return (
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="text-sm uppercase tracking-[0.34em] text-sky-700/80">{number} — Section</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">{title}</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-700 sm:text-base">{subtitle}</p>
        </div>
    );
}

export default SectionHeader;
