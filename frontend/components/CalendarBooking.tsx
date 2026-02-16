"use client";
import { useState } from 'react';

export default function CalendarBooking() {
    const [selectedDate, setSelectedDate] = useState(15);

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

    return (
        <section className="py-24 px-8 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Availability</h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter">BOOK A CALL</h3>
            </div>

            <div className="glass p-8 md:p-12 rounded-[40px] grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-xl font-bold mb-6 flex justify-between">
                        February 2026
                        <span className="text-zinc-500 font-medium">S M T W T F S</span>
                    </h4>
                    <div className="grid grid-cols-7 gap-2">
                        {days.map(d => (
                            <button
                                key={d}
                                onClick={() => setSelectedDate(d)}
                                className={`aspect-square rounded-xl text-sm font-bold transition-all ${selectedDate === d
                                        ? 'bg-primary text-black'
                                        : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                                    }`}
                            >
                                {d}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-primary">Available Slots</h4>
                        <div className="space-y-3">
                            {timeSlots.map(slot => (
                                <button key={slot} className="w-full text-left glass py-3 px-6 rounded-2xl hover:border-primary/50 transition-all font-medium text-sm text-zinc-300">
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="mt-8 bg-white text-black py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-primary transition-colors">
                        Confirm Selection
                    </button>
                </div>
            </div>
        </section>
    );
}
