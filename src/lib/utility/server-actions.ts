"use server";

import mailerLite from "../third-party/mailer-lite";

export async function subscribeToMailingList(email: string) {
	mailerLite.subscribers.createOrUpdate({ email });
}
