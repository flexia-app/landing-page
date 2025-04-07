import {motion, useAnimation, useInView} from "framer-motion"
import {JSX, useEffect, useRef} from "react";

interface RevealProps {
	children: JSX.Element;
	width?: "fit-content" | "100%"
	className?: string;
	delay?: number;
	duration?: number;
	initialX?: number;
	endX?: number;
}

const RevealHorizontal = (
	{
		children,
		className,
		delay = 0,
		duration = 1,
		initialX = 200,
		endX = 0,
	}: RevealProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: true});

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start({x: endX});
		}
	}, [isInView]);

	return (
		<motion.div
			className={className}
			ref={ref}
			variants={{
				hidden: {x: initialX},
				visible: {x: 0},
			}}
			initial={{ x: initialX }}
			animate={mainControls}
			transition={{duration: duration, delay: delay, ease: "easeOut"}}
		>
			{children}
		</motion.div>
	);
}

export default RevealHorizontal;
