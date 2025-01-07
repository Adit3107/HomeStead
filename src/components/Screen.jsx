import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Screen = () => {
	useGSAP(() => {
		gsap.from("h1", {
			opacity: 0,
			y: 40,
			duration: 0.2,
			delay: 0.1,
			stagger: 0.08,
		});
		gsap.to("h1", {
			opacity: 0,
			duration: 0.2,
			y: -40,
			delay: 1,
			stagger: 0.08,
		});
		gsap.to(".splash-screen", {
			y: "-500%",
			delay: 2,
			duration: 2,
			scrub: 3,
		});
	});

	return (
		<div className="h-screen w-full overflow-x-hidden splash-screen fixed top-0 left-0 flex items-center justify-center z-[999] bg-[#fc650b] text-white">
			<div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] china flex">
				<h1 className="m-1">H</h1>
				<h1 className="m-1">o</h1>
				<h1 className="m-1">m</h1>
				<h1 className="m-1">e</h1>
				<h1 className="m-1">S</h1>
				<h1 className="m-1">t</h1>
				<h1 className="m-1">e</h1>
				<h1 className="m-1">a</h1>
				<h1 className="m-1">d</h1>
			</div>
		</div>
	);
};

export default Screen;