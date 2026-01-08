export const handleScrollAnimation = (setCircleStyle,setUnionZ) => {
    const scrollY = window.scrollY;

    const clamp = (value, min, max) =>
        Math.min(Math.max(value, min), max);

    const x = (scrollY , -138, -94);
    const y = (scrollY , -325, -245);
    const scale = clamp(4 - scrollY * 0.005, 0.1, 0.2);

    setCircleStyle({
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
    });

    setUnionZ(scrollY > 40 ? 0 : 30);
};
