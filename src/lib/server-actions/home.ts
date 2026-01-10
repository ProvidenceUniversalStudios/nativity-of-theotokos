"use server";

import { DailyQuote, DailyReadings } from "../type/miscellaneous";
import holytrinityorthodox from "../third-party/holytrinityorthodox";
import mailerLite from "../third-party/mailer-lite";
import { toZonedTime } from "date-fns-tz";
import { PrismaClient } from "@/src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export type HomeSnapshot = {
	dailyReadings: DailyReadings;
	dailyQuote: DailyQuote;
};

const prismaAdapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL,
});
const prismaClient = new PrismaClient({
	adapter: prismaAdapter,
});

export async function getHomeSnapshot(): Promise<HomeSnapshot> {
	const dailyReadings = await getDailyReadings();
	const localDate = toZonedTime(dailyReadings.currentDate, "CAT");
	let dailyQuote = await prismaClient.dailyQuote
		.findFirst({
			where: {
				date: localDate,
			},
		})
		.quote();
	if (!dailyQuote) {
		const quotes = await prismaClient.quote.findMany()!;
		dailyQuote = quotes[Math.round(Math.random() * (quotes.length - 1))];
		await prismaClient.dailyQuote.create({
			data: {
				date: localDate,
				quoteId: dailyQuote.id,
			},
		});
	}

	return {
		dailyReadings,
		dailyQuote,
	};
}

export async function subscribeToMailingList(email: string) {
	mailerLite.subscribers.createOrUpdate({ email });
}

export async function getDailyReadings() {
	return holytrinityorthodox.getDailyReadings(new Date());
}
