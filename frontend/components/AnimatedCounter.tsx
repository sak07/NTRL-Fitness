"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

interface AnimatedCounterProps {
    value: string;
}

export default function AnimatedCounter({ value }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    // Extract numbers and suffixes (e.g., "10K+", "98%")
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const springValue = useSpring(count, { stiffness: 100, damping: 30 });

    useEffect(() => {
        if (inView) {
            count.set(numericValue);
        }
    }, [inView, count, numericValue]);

    return (
        <span ref={ref}>
            <motion.span>{useTransform(springValue, (latest) => Math.round(latest))}</motion.span>
            {suffix}
        </span>
    );
}
