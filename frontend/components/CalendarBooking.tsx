"use client";
import { useState, useMemo } from 'react';

export default function CalendarBooking() {
    // Reference date and time: Feb 17, 2026, 4:04 PM
    const today = new Date(2026, 1, 17, 16, 4);
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    const currentHour = today.getHours();
    const currentMinute = today.getMinutes();

    const [viewDate, setViewDate] = useState(new Date(2026, 1, 1)); // Start at Feb 2026 as per original
    const [selectedDate, setSelectedDate] = useState<number | null>(17);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const currentMonth = viewDate.getMonth();
    const currentYear = viewDate.getFullYear();

    const isCurrentMonth = currentMonth === todayMonth && currentYear === todayYear;
    const isTodaySelected = isCurrentMonth && selectedDate === todayDay;

    const { startDay, daysArray } = useMemo(() => {
        const days = new Date(currentYear, currentMonth + 1, 0).getDate();
        const start = new Date(currentYear, currentMonth, 1).getDay();
        return {
            startDay: start,
            daysArray: Array.from({ length: days }, (_, i) => i + 1)
        };
    }, [currentMonth, currentYear]);

    const nextMonth = () => {
        setViewDate(new Date(currentYear, currentMonth + 1, 1));
        setSelectedDate(null);
        setSelectedSlot(null);
    };

    const prevMonth = () => {
        if (!isCurrentMonth) {
            setViewDate(new Date(currentYear, currentMonth - 1, 1));
            setSelectedDate(null);
            setSelectedSlot(null);
        }
    };

    const timeSlots = [
        { label: "09:00 AM", hour: 9, min: 0 },
        { label: "11:30 AM", hour: 11, min: 30 },
        { label: "02:00 PM", hour: 14, min: 0 },
        { label: "04:30 PM", hour: 16, min: 30 },
        { label: "06:00 PM", hour: 18, min: 0 }
    ];

    return (
        <section className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[32px] border border-accent/20 bg-background shadow-2xl">

                {/* Left Panel: Info & Value Prop */}
                <div className="lg:col-span-12 xl:col-span-5 bg-accent/5 p-12 lg:p-16 border-b xl:border-b-0 xl:border-r border-accent/20 flex flex-col justify-between">
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Consultation</span>
                            <h3 className="text-4xl font-serif font-bold tracking-tight text-foreground leading-tight">
                                Metabolic <br />Strategy Session
                            </h3>
                        </div>

                        <div className="space-y-6 text-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Duration</p>
                                    <p className="font-bold">45 Minutes</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Method</p>
                                    <p className="font-bold">Video Conference</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-zinc-500 text-sm leading-relaxed border-t border-accent/20 pt-8 italic">
                            "Map out your 90-day metabolic evolution with our senior coaching team. We analyze your baseline to define your natural growth path."
                        </p>
                    </div>

                    <div className="hidden lg:flex items-center gap-4 mt-12 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-accent/10">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-accent/20 ring-2 ring-primary/20">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Coach" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary">Senior Coach</p>
                            <p className="text-sm font-bold">Alexander Reed</p>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Picker */}
                <div className="lg:col-span-12 xl:col-span-7 p-8 lg:p-16 flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        <h4 className="text-xl font-bold font-serif italic">Select Date & Time</h4>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={prevMonth}
                                disabled={isCurrentMonth}
                                className={`p-2 rounded-full transition-colors ${isCurrentMonth ? 'opacity-20 cursor-not-allowed' : 'hover:bg-accent/10 text-primary'}`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground min-w-[140px] text-center border-x border-accent/20 px-4">
                                {monthNames[currentMonth]} {currentYear}
                            </p>
                            <button onClick={nextMonth} className="p-2 hover:bg-accent/10 rounded-full transition-colors text-primary">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-12">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                            <div key={`${day}-${idx}`} className="text-center text-[10px] font-black text-zinc-300 py-3 uppercase tracking-tighter">
                                {day}
                            </div>
                        ))}
                        {/* Empty slots for month start offset */}
                        {Array.from({ length: startDay }).map((_, i) => (
                            <div key={`empty-${i}`} className="h-10 w-10" />
                        ))}
                        {daysArray.map(d => {
                            const isPast = (isCurrentMonth && d < todayDay) || (currentYear === todayYear && currentMonth < todayMonth);
                            return (
                                <button
                                    key={d}
                                    disabled={isPast}
                                    onClick={() => {
                                        setSelectedDate(d);
                                        setSelectedSlot(null);
                                    }}
                                    className={`aspect-square flex items-center justify-center rounded-xl text-xs font-bold transition-all relative group h-10 w-10 mx-auto ${selectedDate === d
                                        ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/20'
                                        : isPast
                                            ? 'text-zinc-400 opacity-50 cursor-not-allowed'
                                            : 'hover:bg-accent/10 text-foreground/70'
                                        }`}
                                >
                                    {d}
                                    {d === todayDay && isCurrentMonth && selectedDate !== d && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />}
                                </button>
                            );
                        })}
                    </div>

                    <div className="space-y-6">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-accent/20 pb-2 flex justify-between">
                            Available Slots
                            {selectedDate && <span className="text-primary tracking-normal">{monthNames[currentMonth]} {selectedDate}</span>}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                            {timeSlots.map(slot => {
                                // Disable time if it's today and the time has passed
                                const isTimePast = isTodaySelected && (slot.hour < currentHour || (slot.hour === currentHour && slot.min <= currentMinute));

                                return (
                                    <button
                                        key={slot.label}
                                        disabled={isTimePast || !selectedDate}
                                        onClick={() => setSelectedSlot(slot.label)}
                                        className={`py-2 px-3 rounded-lg border text-[10px] font-bold transition-all ${selectedSlot === slot.label
                                            ? 'bg-primary border-primary text-white shadow-lg'
                                            : isTimePast || !selectedDate
                                                ? 'border-accent/10 text-zinc-400 opacity-40 cursor-not-allowed'
                                                : 'border-accent/30 hover:border-primary/50 text-zinc-500'}`}
                                    >
                                        {slot.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-12 flex justify-end">
                        <button
                            disabled={!selectedSlot || !selectedDate}
                            className={`group flex items-center gap-4 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all shadow-xl ${!selectedSlot || !selectedDate
                                ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                                : 'bg-primary text-white hover:bg-primary/90 active:scale-[0.98] shadow-primary/20'
                                }`}
                        >
                            Confirm Consultation
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
