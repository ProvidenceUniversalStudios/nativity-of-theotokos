export function julianDate(date: Date) {
	return new Date(new Date().setDate(date.getDate() - 13));
}

export function removeMarkup(markedUpText: string): string {
	const regex: RegExp = /(<([^>]+)>)/gi;
	return markedUpText.replace(regex, "");
}

export function isRemotePath(src: string) {
	try {
		new URL(src);
		return true;
	} catch {
		return false;
	}
}
