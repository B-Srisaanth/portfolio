import { motion } from 'framer-motion';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

function Navbar({ theme, setTheme }) {
    return (
        <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="fixed inset-x-0 top-0 z-50 border-b border-slate-700 bg-black/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a href="#home" className="text-lg font-semibold tracking-wide text-white">Srisaanth</a>
                <nav className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-sm text-white transition hover:text-sky-300">{link.label}</a>
                    ))}
                </nav>
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-full border border-slate-600/70 bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-800">
                    {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
            </div>
        </motion.header>
    );
}

export default Navbar;
