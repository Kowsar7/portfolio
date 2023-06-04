"use client";

import { BsFillMoonStarsFill, BsTelegram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import coder from "../public/coder-girl.jpg";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? "dark" : ""}>
			<main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
				<section className="min-h-screen">
					<nav className="pt-10 mb-12 flex justify-between dark:text-white">
						<h1 className="text-xl font-burtons">DevelopedBy</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className="cursor-pointer text-2xl"
								/>
							</li>
							<li>
								<a
									className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
									href="#">
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className="text-center p-10 pt-1">
						<h1 className="text-4xl py-2 font-medium text-teal-600 md:text-5xl dark:text-teal-400">
							Kowsar M
						</h1>
						<h3 className="text-2xl py-2 leading-8 md:text-3xl dark:text-white">
							Developer and Student.
						</h3>
						<p className="text-md pt-5 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-gray-200">
							Passionate React developer and avid student, continuously
							expanding skills and knowledge in front-end development. Dedicated
							to delivering top-notch results.
						</p>
					</div>
					<div className="text-5xl flex justify-center pb-6 text-gray-600 gap-16 dark:text-gray-400 ">
						<a href="https://github.com/Kowsar7">
							<AiFillGithub />
						</a>
						<a href="https://www.linkedin.com/in/kowsar-mojtabaee/">
							<AiFillLinkedin />
						</a>
						<a href="@KMplayer77">
							<BsTelegram />
						</a>
					</div>
					<div className="relative mx-auto w-80 h-80 rounded-full md:h-96 md:w-96">
						<Image src={coder} className="rounded-full" />
					</div>
				</section>
				<section>
					<div>
						<h3 className="text-3xl py-6 dark:text-white">Services I offer</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
							Since the beginning of my journey as a freelance designer and
							developer, I've done remote work for
							<span className="text-teal-500"> agencies </span>
							consulted for <span className="text-teal-500">startups </span>
							and collaborated with talanted people to create digital products
							for both business and consumer use.
						</p>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
							I offer from a wide range of services, including brand design,
							programming and teaching.
						</p>
					</div>
					<div className="lg:flex gap-10">
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
							<Image src={design} width={100} height={100} className="m-auto" />
							<h3 className="text-lg font-medium pt-8 pb-2">
								Beautifull Design
							</h3>
							<p className="py-2">
								Creating elegant designs suited for your needs following core
								design theory.
							</p>
							<h4 className="py-4 text-teal-600">Design tools I use</h4>
							<p className="text-gray-800 py-1">Photoshop</p>
							<p className="text-gray-800 py-1">Illustrator</p>
							<p className="text-gray-800 py-1">Figma</p>
							<p className="text-gray-800 py-1">Indesign</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
							<Image
								src={consulting}
								width={100}
								height={100}
								className="m-auto"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
							<p className="py-2">
								Are you interested in feedback for your current project? I can
								give you tips and tricks to level it up.
							</p>
							<h4 className="py-4 text-teal-600">Design tools I use</h4>
							<p className="text-gray-800 py-1">Photoshop</p>
							<p className="text-gray-800 py-1">Illustrator</p>
							<p className="text-gray-800 py-1">Figma</p>
							<p className="text-gray-800 py-1">Indesign</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
							<Image src={code} width={100} height={100} className="m-auto" />
							<h3 className="text-lg font-medium pt-8 pb-2">
								Code your dream project
							</h3>
							<p className="py-2">
								Do you have an idea for your next great website? Let's make it a
								reality.
							</p>
							<h4 className="py-4 text-teal-600">Design tools I use</h4>
							<p className="text-gray-800 py-1">Photoshop</p>
							<p className="text-gray-800 py-1">Illustrator</p>
							<p className="text-gray-800 py-1">Figma</p>
							<p className="text-gray-800 py-1">Indesign</p>
						</div>
					</div>
				</section>
				<section>
					<div>
						<h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
							Since the beginning of my journey as a freelance designer and
							developer, I've done remote work for
							<span className="text-teal-500"> agencies </span>
							consulted for <span className="text-teal-500">startups </span>
							and collaborated with talanted people to create digital products
							for both business and consumer use.
						</p>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
							I offer from a wide range of services, including brand design,
							programming and teaching.
						</p>
					</div>
					<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
						<div className="basis-1/3 flex-1">
							<Image
								src={web1}
								width={"100%"}
								height={"100%"}
								className="object-cover rounded-lg"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web2}
								width={"100%"}
								height={"100%"}
								className="object-cover rounded-lg"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web3}
								width={"100%"}
								height={"100%"}
								className="object-cover rounded-lg"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web4}
								width={"100%"}
								height={"100%"}
								className="object-cover rounded-lg"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web5}
								width={"100%"}
								height={"100%"}
								className="object-cover rounded-lg"
							/>
						</div>
						<div className="basis-1/3 flex-1">
							<Image
								src={web6}
								width={"100%"}
								height={"100%"}
								className="object-cover rounded-lg"
							/>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

