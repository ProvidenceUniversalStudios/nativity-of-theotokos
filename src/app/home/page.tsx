import Image from "next/image";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({ subsets: ["latin", "cyrillic"] });

export default function Home() {
	return (
		<>
			<main className="home">
				<div className="hero bg-[url(/nativity-icon.webp)] bg-cover md:bg-size-[40%] md:bg-right bg-no-repeat">
					<div className="hero-content flex flex-col justify-center items-center md:flex-row md:justify-start h-[30em] p-20 bg-black/60 md:bg-transparent">
						<div className="hero-message flex flex-col md:w-[30em] md:max-w-1/2 gap-6">
							<span
								className={`heading text-6xl font-serif text-white ${ebGaramond.className}`}
							>
								Hello and welcome
							</span>
							<hr className="text-gray-200 my-4" />
							<span
								className={`${ebGaramond.className} text-lg text-gray-300`}
							>
								Official page of the Russian Orthodox Church in
								Zimbabwe, run by its laymen, with the blessing
								of Father Dimitri Polokov
							</span>
						</div>
					</div>
				</div>
				<div className="readings bg-[antiquewhite] text-black">
					<div className="readings-content flex flex-col gap-6 p-9 md:px-20 md:py-10">
						<span className="text-3xl font- md:w-1/2">
							Daily Readings
							<hr className="mt-4 mb-0" />
						</span>
						<div className="flex flex-col md:flex-wrap md:flex-row items-center gap-10">
							<Image
								className="h-[20em] w-auto hidden md:block"
								height={1000}
								width={1000}
								alt="Saint of the day"
								src="/st-nicholas.jpg"
							/>
							<div className="texts flex flex-col md:w-6/10 md:max-w-[30em] gap-4">
								<span className="text-xl uppercase">
									Friday, 19 December 2025
								</span>
								<div className="flex flex-col gap-2">
									<span className="text-lg">
										28th Week After Pentecost, Tone II
									</span>
									<p className="text-sm">
										St Nicholas the Wonderworker, Abp. of
										Myra in Lycia; New Martyr Nicolas
										Karamos of Smyrna (1657); St Maximus,
										Metropolitan of Kiev & Vladimir (1305)
									</p>
								</div>
								<div className="flex flex-col">
									<span className="text-base">
										John 10:9-16 (Matins Gospel)
									</span>
									<span className="text-base">
										Hebrews 13:17-21 (Epistle, Saint
										Nicholas)
									</span>
									<span className="text-base">
										Luke 6:17-23 (Gospel, Saint Nicholas)
									</span>
								</div>
								<span className="text-lg">
									☦ Nativity Fast | Abstain from food with oil
								</span>
							</div>
						</div>
					</div>
				</div>
			</main>
			<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<div className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
					<Image
						className="dark:invert"
						src="/next.svg"
						alt="Next.js logo"
						width={100}
						height={20}
						priority
					/>
					<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
						<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
							To get started, edit the page.tsx file.
						</h1>
						<p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
							Looking for a starting point or more instructions?
							Head over to{" "}
							<a
								href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
								className="font-medium text-zinc-950 dark:text-zinc-50"
							>
								Templates
							</a>{" "}
							or the{" "}
							<a
								href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
								className="font-medium text-zinc-950 dark:text-zinc-50"
							>
								Learning
							</a>{" "}
							center.
						</p>
					</div>
					<div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
						<a
							className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
							href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								className="dark:invert"
								src="/vercel.svg"
								alt="Vercel logomark"
								width={16}
								height={16}
							/>
							Deploy Now
						</a>
						<a
							className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
							href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							Documentation
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
