"use client";
import { useState } from 'react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {isOpen ? (
                <div className="glass w-80 h-[450px] rounded-[32px] overflow-hidden flex flex-col shadow-2xl border-white/20">
                    <div className="bg-primary p-6 flex justify-between items-center">
                        <span className="text-black font-black uppercase tracking-tighter">Coach AI</span>
                        <button onClick={() => setIsOpen(false)} className="text-black text-2xl leading-none font-bold">&times;</button>
                    </div>

                    <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-black/40">
                        <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-sm text-zinc-300 font-medium max-w-[80%]">
                            Hello! I'm your virtual fitness assistant. How can I help you today?
                        </div>
                        <div className="bg-primary/20 p-4 rounded-2xl rounded-tr-none text-sm text-white font-medium max-w-[80%] ml-auto border border-primary/20">
                            I want to know about membership.
                        </div>
                    </div>

                    <div className="p-4 bg-black/60 border-t border-white/10">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Ask a question..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-primary/50"
                            />
                            <button className="bg-primary text-black w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                >
                    <span className="text-3xl group-hover:rotate-12 transition-transform leading-none font-bold text-black italic">!</span>
                </button>
            )}
        </div>
    );
}
