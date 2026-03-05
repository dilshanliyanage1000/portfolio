import { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigationType } from "react-router-dom";

// store scroll positions per history entry key
const scrollPositions = new Map();

export default function LenisScrollRestoration({ lenis }) {
    const location = useLocation();
    const navType = useNavigationType(); // "PUSH" | "POP" | "REPLACE"

    // save current scroll position when leaving a route
    useLayoutEffect(() => {
        return () => {
            const y = window.scrollY || document.documentElement.scrollTop || 0;
            scrollPositions.set(location.key, y);
        };
    }, [location.key]);

    // restore on entry
    useLayoutEffect(() => {
        const targetY =
            navType === "POP" ? scrollPositions.get(location.key) ?? 0 : 0;

        // stop Lenis so it does not ease against our jump
        lenis?.stop?.();

        // jump instantly
        if (lenis) {
            lenis.scrollTo(targetY, { immediate: true, force: true });
        } else {
            window.scrollTo(0, targetY);
        }

        // restart Lenis next frame
        requestAnimationFrame(() => lenis?.start?.());
    }, [location.key, navType, lenis]);

    return null;
}

LenisScrollRestoration.propTypes = {
    lenis: PropTypes.object,
};