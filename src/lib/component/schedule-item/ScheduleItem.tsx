import { ModeledVoidComponent } from "@mvc-react/components";
import { ScheduleItemModel } from "../../model/schedule-item";
import Image from "next/image";

const ScheduleItem = function ({ model }) {
	const { scheduleItem, isFeatured } = model.modelView;
	const { date, location, times, title } = scheduleItem;

	return isFeatured ? (
		<div className="featured-schedule-item flex items-center bg-[#FEF8F3] border border-gray-900/20">
			<div className="grow self-stretch flex flex-col w-fit max-w-fit gap-2 items-center text-center p-4 px-5 bg-gray-900 text-white font-serif">
				<span className="text-4xl">
					{date.toLocaleDateString("en-uk", { day: "2-digit" })}
				</span>
				<span className="uppercase">
					{date.toLocaleDateString("en-uk", {
						month: "short",
						year: "2-digit",
					})}
				</span>
				<Image
					className="h-10 w-10"
					width={32}
					height={48}
					src="/ornament_12.svg"
					alt="Featured schedule item ornament"
				/>
			</div>
			<div className="flex flex-col py-3 px-6 gap-1">
				<span className="text-xl">{title}</span>
				<span>{location}</span>
				{times.map((time, index) => (
					<span key={index} className="text-sm">
						{time.time.toLocaleTimeString("en-uk", {
							hour: "2-digit",
							minute: "2-digit",
						})}{" "}
						— {time.designation}
					</span>
				))}
			</div>
		</div>
	) : (
		<div className="schedule-item flex items-center bg-[#FEF8F3] border border-gray-900/20">
			<div className="grow self-stretch flex flex-col min-w-fit max-w-fit gap-1 items-center text-center p-4 bg-gray-900 text-white font-serif">
				<span className="text-xl">
					{date.toLocaleDateString("en-uk", { day: "2-digit" })}
				</span>
				<span className="text-xs uppercase">
					{date.toLocaleDateString("en-uk", {
						month: "short",
						year: "2-digit",
					})}
				</span>
			</div>
			<div className="flex flex-col py-2 px-4 gap-1">
				<span className="text-lg">{title}</span>
				<span className="text-sm">{location}</span>
				<span className="text-sm">
					{times[0].time.toLocaleTimeString("en-uk", {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</span>
			</div>
		</div>
	);
} as ModeledVoidComponent<ScheduleItemModel>;

export default ScheduleItem;
