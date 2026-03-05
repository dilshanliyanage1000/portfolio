import { useEffect } from "react";
import PropTypes from "prop-types";
import Lenis from "lenis";

export default function SmoothScroll({ onReady }) {
    useEffect(() => {
        const prefersReduced =
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        if (prefersReduced) return;

        const lenis = new Lenis({
            duration: 1.1,
            smoothWheel: true,
            smoothTouch: false,
        });

        onReady?.(lenis);

        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            onReady?.(null);
            lenis.destroy();
        };
    }, [onReady]);

    return null;
}

SmoothScroll.propTypes = {
    onReady: PropTypes.func,
};