import { useState } from 'react';

function ContactForm() {
    const [status, setStatus] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus('Thank you! I’ll respond shortly.');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-slate-300/70 bg-white/95 p-8 shadow-xl shadow-slate-300/20 backdrop-blur-lg">
            <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-3 w-full rounded-3xl border border-slate-300/70 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500" />
            </div>
            <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input name="email" type="email" required className="mt-3 w-full rounded-3xl border border-slate-300/70 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500" />
            </div>
            <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="5" required className="mt-3 w-full rounded-3xl border border-slate-300/70 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500" />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">Send Message</button>
            {status && <p className="text-sm text-slate-950">{status}</p>}
        </form>
    );
}

export default ContactForm;
