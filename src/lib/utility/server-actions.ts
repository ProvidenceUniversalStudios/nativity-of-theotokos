"use server";

import holytrinityorthodox from "../third-party/holytrinityorthodox";
import mailerLite from "../third-party/mailer-lite";

export async function subscribeToMailingList(email: string) {
	mailerLite.subscribers.createOrUpdate({ email });
}

export async function getDailyReadings() {
	const currentDate = new Date();
	return holytrinityorthodox.getDailyReadings(currentDate);
}
