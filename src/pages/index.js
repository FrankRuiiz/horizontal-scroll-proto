import React, { useEffect } from "react"
// import { Link } from "gatsby" 

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// or all tools are exported from the "all" file (excluding bonus plugins):
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
	useEffect(() => {
		let sections = gsap.utils.toArray("section");
		let container = document.querySelector(".container");
		// let elements = gsap.utils.toArray(document.querySelectorAll("section > *"));

		let timeline = gsap.timeline();

		timeline.to(sections, {
			x: () =>
				-(container.scrollWidth - document.documentElement.clientWidth) + "px",
			ease: "none",
			scrollTrigger: {
				pin: true,
				scrub: 1,
				trigger: container,
				end: () => container.scrollWidth - document.documentElement.clientWidth
			}
		});

		// elements.forEach((element) => {
		// 	gsap.from(element, {
		// 		yPercent: 100,
		// 		opacity: 0,
		// 		scrollTrigger: {
		// 			scrub: 1,
		// 			start: element.parentNode.offsetLeft,
		// 			trigger: element.parentNode
		// 		}
		// 	});
		// });

	})

	return (
		<Layout>
		{/* <SEO title="Home" /> */}

		<div className="container">
			<section className="section section--1">
				<h1>Section 1</h1>
			</section>
			<section className="section section--2">
				<h1>Section 2</h1>
			</section>
			<section className="section section--3">
				<h1>Section 3</h1>
			</section>
			<section className="section section--4">
				<h1>Section 4</h1>
			</section>
		</div>

		</Layout>
	)
}

export default IndexPage
