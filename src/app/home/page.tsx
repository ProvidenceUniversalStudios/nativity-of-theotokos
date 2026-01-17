"use client";

import { EB_Garamond } from "next/font/google";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { subscribeToMailingList } from "@/src/lib/server-actions/home";
import { useCallback, useLayoutEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Link from "next/link";
import { useHome } from "@/src/lib/model-implementation/home";
import ScheduleItem from "@/src/lib/component/schedule-item/ScheduleItem";
import { newReadonlyModel } from "@mvc-react/mvc";
import NewsArticlePreview from "@/src/lib/component/news-article-preview/NewsArticlePreview";
import { useNewStatefulInteractiveModel } from "@mvc-react/stateful";
import { hymnsModalVIInterface } from "@/src/lib/model-implementation/hymns-modal";
import HymnsModal from "@/src/lib/component/hymns-modal/HymnsModal";
import SplashScreen from "@/src/lib/component/splash-screen/SplashScreen";

type MailingListStatus = "subscribed" | "not_subscribed" | "pending";
const ebGaramond = EB_Garamond({ subsets: ["latin", "cyrillic"] });

export default function Home() {
	const { modelView } = useHome();
	const hymnsModal = useNewStatefulInteractiveModel(hymnsModalVIInterface());
	const [mailingListStatus, setMailingListStatus] =
		useState<MailingListStatus>("not_subscribed");
	const subscribe = useCallback((email: string) => {
		subscribeToMailingList(email)
			.then(() => {
				setMailingListStatus("subscribed");
			})
			.catch(error => {
				console.error(error);
				alert(error);
				setMailingListStatus("not_subscribed");
			});
	}, []);

	useLayoutEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);

	return (
		<>
			<SplashScreen model={newReadonlyModel({ isShown: !modelView })} />
			<main className={`home bg-[whitesmoke] ${!modelView && "hidden"}`}>
				<section className="hero bg-[#DCB042] text-black bg-[url(/nativity-icon.webp)] bg-cover bg-center bg-no-repeat md:bg-size-[100%] md:bg-position-[60%_85%]">
					<div className="hero-content flex flex-col justify-center items-center md:flex-row h-[30em] p-8 md:p-20 bg-black/70">
						<div className="hero-message flex flex-col md:w-[35em] md:max-w-1/2 gap-6 md:p-8 justify-center">
							<span
								className={`heading text-6xl font-serif text-white ${ebGaramond.className}`}
							>
								Hello and welcome
							</span>
							<hr className="my-4 text-gray-300" />
							<span
								className={`${ebGaramond.className} text-lg text-gray-300`}
							>
								Official website of the Nativity of the
								Theotokos parish of the Russian Orthodox Church
								in Zimbabwe. (est. 2025)
							</span>
						</div>
						<div className="icon md:flex md:w-1/2 hidden justify-center items-center">
							<Image
								className="h-[20em] w-[15em]"
								src="/nativity-icon.webp"
								alt="Icon of the Nativity of the Theotokos"
								title="Icon of the Nativity of the Theotokos"
								height={400}
								width={300}
								loading="eager"
							/>
						</div>
					</div>
				</section>
				<section className="readings bg-[antiquewhite] text-black bg-[url(/ornament_3_tr.svg)] bg-no-repeat bg-size-[13em] md:bg-size-[30em] bg-position-[98%_0.5%] md:bg-position-[100%_0.5%]">
					<div className="readings-content flex flex-col gap-6 p-8 py-9 lg:px-20 md:py-10">
						<span className="text-3xl font-serif md:w-1/2">
							Daily Readings
							<hr className="mt-4 mb-0 w-3/4 md:w-full" />
						</span>
						{modelView?.dailyReadings ? (
							<div className="flex md:flex-row md:h-fit lg:w-9/10 md:mt-4 items-stretch bg-white/70 border border-gray-900/20">
								{hymnsModal.modelView && (
									<HymnsModal
										model={{
											modelView: hymnsModal.modelView,
											interact: hymnsModal.interact,
										}}
									/>
								)}
								<div className="md:flex min-w-60 w-60 lg:min-w-70 lg:w-70 items-stretch justify-center p-3 hidden bg-gray-900">
									<Image
										className="grow object-cover object-center hover:cursor-pointer"
										height={320}
										width={240}
										alt="Icon of the day"
										title="Icon of the day"
										src={
											modelView.dailyReadings.iconOfTheDay
										}
										onClick={() => {
											window.open(
												modelView.dailyReadings
													.iconOfTheDay,
												"_blank",
											);
										}}
									/>
								</div>
								<div className="info flex flex-col grow">
									<div className="texts flex flex-col md:justify-center grow gap-4 p-5 md:p-4 md:px-7 [&_a]:text-red-900 [&_a]:hover:underline [&_a]:hover:text-[#DCB042]">
										<span className="text-2xl font-serif">
											{modelView.dailyReadings.currentDate.toLocaleDateString(
												"en-uk",
												{
													dateStyle: "full",
												},
											)}
										</span>
										<div className="flex flex-col gap-2">
											<span className="text-xl">
												{
													modelView.dailyReadings
														.liturgicalWeek
												}
											</span>
											<div className="flex gap-2 items-center mb-1">
												<Image
													className="h-10 w-10"
													src={"/ornament_9.svg"}
													alt={"Hymns icon"}
													height={32}
													width={40}
												/>
												<Link
													className="text-lg underline"
													href="#"
													onClick={async () =>
														await hymnsModal.interact(
															{
																type: "OPEN",
																input: {
																	hymns: modelView
																		.dailyReadings
																		.hymns,
																},
															},
														)
													}
													replace
												>
													{"Hymns for the Day"}
												</Link>
											</div>
											<p
												className={`text-base [&_a]:underline`}
												dangerouslySetInnerHTML={{
													__html: modelView
														.dailyReadings.saints,
												}}
											/>
										</div>
										<hr className="md:w-3/4 text-black/60" />
										<div className="flex flex-col w-fit max-w-full">
											{[
												...modelView.dailyReadings.scriptures.map(
													(scripture, index) => (
														<div
															key={index}
															className="grid grid-cols-2 gap-x-2"
														>
															<span className="w-fit">
																<Link
																	href={
																		scripture.link
																	}
																	target="_blank"
																>
																	{
																		scripture.scriptureText
																	}
																</Link>
															</span>
															{scripture.designation && (
																<span>
																	{
																		scripture.designation
																	}
																</span>
															)}
														</div>
													),
												),
											]}
										</div>
									</div>
									<div className="fasting-info bg-[#250203]/80 text-white text-center md:text-left p-2.5 px-4 md:px-7 md:mt-0">
										<span className="text-base">
											{
												modelView.dailyReadings
													.fastingInfo
											}
										</span>
									</div>
								</div>
							</div>
						) : (
							<div className="flex md:flex-row gap-2 animate-pulse h-[20em] lg:w-9/10 md:mt-4 items-stretch">
								<div className="md:flex min-w-60 w-60 lg:min-w-70 lg:w-70 items-stretch justify-center p-3 hidden bg-black/20" />
								<div className="info flex flex-col grow bg-black/20" />
							</div>
						)}
					</div>
				</section>
				<section className="daily-thought  border-t-15 border-b-15 border-t-gray-900/85 border-b-[#250203]/85">
					{modelView?.dailyQuote && (
						<div className="daily-thought-content flex items-center p-8 py-9 md:p-20 min-h-[25em] bg-[#0a0a0a] md:bg-[linear-gradient(to_right,#0a0a0a,transparent),url(/daily-thought-bg.jpg)] text-white bg-no-repeat bg-contain bg-right">
							<div
								className={`quote-box flex flex-col gap-4 items-center ${ebGaramond.className} md:w-1/2`}
							>
								<p className="quote text-lg">
									<span>“</span>
									{modelView.dailyQuote.quote}
									<span>”</span>
								</p>
								<span className="author italic w-full text-right">
									— {modelView.dailyQuote.author}
									{modelView.dailyQuote.source &&
										`, ${modelView.dailyQuote.source}`}
								</span>
							</div>
						</div>
					)}
				</section>
				{modelView && (
					<section className="news pt-4 bg-[antiquewhite] text-black">
						<div className="ornament mb-4 md:mb-0 w-full h-[5em] bg-contain bg-center bg-no-repeat bg-[url(/ornament_1.svg)]" />
						<div className="news-content flex flex-col gap-8">
							<span className="text-3xl font-serif md:w-1/2 px-8 lg:px-20">
								Latest News
								<hr className="mt-4" />
							</span>
							<div className="flex flex-row flex-wrap lg:justify-between gap-x-12 gap-y-6 px-8 pb-6 lg:px-20">
								<div className="featured flex flex-col gap-4 md:max-w-1/2 lg:max-w-[45%]">
									<span className="text-xl">Featured</span>
									<NewsArticlePreview
										model={newReadonlyModel({
											isFeatured: true,
											articlePreview:
												modelView.newsArticles
													.featuredArticle,
										})}
									/>
								</div>

								<div className="schedule flex flex-col gap-4 flex-1 lg:max-w-5/10 ">
									<span className="text-xl">Schedule</span>
									<div className="schedule-list flex flex-col w-full gap-4 pr-3 lg:pr-6 max-h-[25em] lg:max-h-[28em] overflow-y-auto">
										<ScheduleItem
											model={newReadonlyModel({
												scheduleItem:
													modelView.scheduleItems[0],
												isFeatured: true,
											})}
										/>
										<hr className="my-2 text-black/50" />
										<div className="flex flex-col gap-3 lg:w-3/4">
											{modelView.scheduleItems
												.slice(1)
												.map((scheduleItem, index) => (
													<ScheduleItem
														key={index}
														model={newReadonlyModel(
															{
																scheduleItem,
																isFeatured: false,
															},
														)}
													/>
												))}
										</div>
									</div>
								</div>
							</div>
							<div className="other-stories flex flex-col gap-4 pt-6 pb-10 px-8 lg:px-20 bg-white/70">
								<span className="text-xl mb-1">More News</span>
								<div className="grid lg:grid-cols-2 gap-8 md:gap-6 md:w-3/4 lg:w-9/10">
									{[
										...modelView.newsArticles
											.otherNewsArticles,
									].map((articlePreview, index) => (
										<NewsArticlePreview
											key={index}
											model={newReadonlyModel({
												isFeatured: false,
												articlePreview,
											})}
										/>
									))}
								</div>
							</div>
						</div>
					</section>
				)}
				<section
					id="resources"
					className="resources bg-[#250203] text-white"
				>
					<div className="resources-content flex flex-col gap-8 p-8 py-14 lg:px-20">
						<div className="flex flex-col gap-6 w-full justify-center items-center md:flex-row">
							<div className="flex size-[20em] bg-[linear-gradient(to_bottom,transparent,black),url(/nativity-11.jpg)] bg-cover">
								<div
									className="flex size-full p-6 justify-center items-end text-center  text-white hover:cursor-pointer"
									onClick={() =>
										window.open(
											"https://eadiocese.org/litresource",
											"_blank",
										)
									}
								>
									<span className="text-3xl mb-3 font-serif">
										Liturgical Resources
									</span>
								</div>
							</div>
							<div className="flex size-[20em] bg-[linear-gradient(to_bottom,transparent,black),url(/nativity-7.jpg)] bg-cover bg-center">
								<div
									className="flex size-full p-6 justify-center items-end text-center  text-white hover:cursor-pointer"
									onClick={() =>
										window.open(
											"https://www.oca.org/orthodoxy/the-orthodox-faith",
											"_blank",
										)
									}
								>
									<span className="text-3xl mb-3 font-serif">
										What is Orthodoxy?
									</span>
								</div>
							</div>
							<div className="flex size-[20em] bg-[linear-gradient(to_bottom,transparent,black),url(/nativity-9.jpg)] bg-cover bg-center">
								<div
									className="flex size-full p-6 justify-center items-end text-center  text-white hover:cursor-pointer"
									onClick={() =>
										alert("Content to be added soon!")
									}
								>
									<span className="text-3xl mb-3 font-serif">
										About our Parish
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					id="media"
					className="gallery bg-[antiquewhite] text-black"
				>
					{modelView && (
						<div className="gallery-content flex flex-col gap-8 p-8 py-14 lg:px-20 bg-[url(/ornament_4.svg)] bg-size-[15em] bg-bottom-left bg-no-repeat">
							<div className="swiper-container w-full max-w-full h-[20em] max-h-[20em]">
								<Swiper
									className="h-full"
									modules={[Navigation, Autoplay]}
									spaceBetween={30}
									breakpoints={{ 768: { slidesPerView: 3 } }}
									slidesPerView={"auto"}
									navigation
									autoplay
								>
									{[
										...modelView.dailyGalleryImages.map(
											(galleryImage, index) => (
												<SwiperSlide key={index}>
													<div className="flex justify-stretch items-stretch w-full h-full">
														<Image
															className="grow object-cover object-center"
															src={
																galleryImage
																	.image
																	.source
															}
															alt={
																galleryImage
																	.image
																	.about ??
																"gallery item"
															}
															title={
																galleryImage
																	.image.about
															}
															placeholder="blur"
															blurDataURL={
																galleryImage
																	.image
																	.placeholder
															}
															width={480}
															height={320}
														/>
													</div>
												</SwiperSlide>
											),
										),
									]}
								</Swiper>
							</div>
						</div>
					)}
				</section>
				<section className="mailing-list bg-gray-900 text-white">
					<div className="mailing-list-content flex flex-col gap-8 p-8 py-14 md:w-3/4 lg:w-6/10 lg:px-20">
						<span className="text-3xl font-serif md:w-1/2">
							Join our Mailing List
							<hr className="mt-4 mb-0" />
						</span>
						{mailingListStatus != "subscribed" ? (
							<>
								<p>
									{
										"Stay up to date with the latest church news, announcements, and events straight from your mailbox. Enter your email below and subscribe if you haven't already."
									}
								</p>
								<form
									action={formData => {
										subscribe(
											formData
												.get("email")!
												.toString()
												.trim(),
										);
									}}
									onSubmit={() => {
										setMailingListStatus("pending");
									}}
								>
									<div className="flex flex-nowrap text-black">
										<input
											className="grow p-4 bg-[whitesmoke]"
											type="email"
											placeholder="you@example.com"
											name="email"
											id="mailing-email"
											required
										/>
										<button
											className={`p-4 h-full w-[8em] bg-gray-700 text-white text-center disabled:bg-gray-400`}
											type="submit"
											disabled={
												mailingListStatus == "pending"
											}
										>
											Subscribe
										</button>
									</div>
								</form>
							</>
						) : (
							<div>
								<p className="text-xl">
									Thank you for subscribing to our mailing
									list! We will be keeping you up to date with
									the latest news, updates, announcements and
									more.
								</p>
							</div>
						)}
					</div>
				</section>
			</main>
		</>
	);
}
