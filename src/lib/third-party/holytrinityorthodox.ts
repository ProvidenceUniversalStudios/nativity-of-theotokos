import { DailyReadings } from "../type/miscellaneous";
import { julianDate, removeMarkup } from "../utility/miscellaneous";
import { load } from "cheerio";

interface HolyTrinityOrthodox {
	getDailyReadings: (date: Date) => Promise<DailyReadings>;
	getLiturgicalWeek: (date: Date) => Promise<string>;
	getSaints: (date: Date) => Promise<string>;
	getScriptures: (date: Date) => Promise<string[]>;
	getFastingInfo: (date: Date) => Promise<string>;
	getSaintOfTheDayThumbnailLink: (date: Date) => Promise<string>;
}

class HolyTrinityOrthodoxImplementation implements HolyTrinityOrthodox {
	private readonly baseURL =
		"https://www.holytrinityorthodox.com/htc/ocalendar/v2calendar.php";
	private readonly saintOfTheDayBaseURL =
		"https://holytrinityorthodox.com/htc/iconoftheday/bigimages";

	async getDailyReadings(date: Date) {
		return {
			currentDate: date.toLocaleDateString("en-uk", {
				dateStyle: "full",
			}),
			liturgicalWeek: await this.getLiturgicalWeek(date),
			saints: await this.getSaints(date),
			scriptures: await this.getScriptures(date),
			fastingInfo: await this.getFastingInfo(date),
			saintOfTheDayThumbnail: await this.getSaintOfTheDayThumbnailLink(
				date
			),
		};
	}
	async getLiturgicalWeek(date: Date) {
		const requestURL = this._getDatedBaseURL(date);
		requestURL.searchParams.set("header", "1");

		return fetch(requestURL)
			.then(response => {
				if (response.ok) return response.text();
				return Promise.reject(
					`${response.status}: ${response.statusText}`
				);
			})
			.then(html => {
				const $ = load(html);
				$(".headerfast").remove();
				return $.html();
			})
			.then(markedUpText => removeMarkup(markedUpText));
	}
	async getSaints(date: Date) {
		const requestURL = this._getDatedBaseURL(date);
		requestURL.searchParams.set("lives", "2");

		return fetch(requestURL)
			.then(response => {
				if (response.ok) return response.text();
				return Promise.reject(
					`${response.status}: ${response.statusText}`
				);
			})
			.then(markedUpText => removeMarkup(markedUpText));
	}
	getScriptures(date: Date) {
		const requestURL = this._getDatedBaseURL(date);
		requestURL.searchParams.set("scripture", "2");

		return fetch(requestURL)
			.then(response => {
				if (response.ok) return response.text();
				return Promise.reject(
					`${response.status}: ${response.statusText}`
				);
			})
			.then(html => {
				const $ = load(html);
				return [
					...$(".cal-main").map(function () {
						return $(this).text();
					}),
				];
			});
	}
	getFastingInfo(date: Date) {
		const requestURL = this._getDatedBaseURL(date);
		requestURL.searchParams.set("header", "1");

		return fetch(requestURL)
			.then(response => {
				if (response.ok) return response.text();
				return Promise.reject(
					`${response.status}: ${response.statusText}`
				);
			})
			.then(html => {
				const $ = load(html);
				return $(".headerfast").text();
			})
			.then(markedUpText => removeMarkup(markedUpText))
			.then(info => (info.trim().length == 0 ? "No Fast" : info));
	}

	async getSaintOfTheDayThumbnailLink(date: Date) {
		const liturgicalCalendarDate = julianDate(date);
		const month = (liturgicalCalendarDate.getMonth() + 1)
			.toString()
			.padStart(2, "0");
		const day = liturgicalCalendarDate
			.getDate()
			.toString()
			.padStart(2, "0");
		let link = "/theotokos.webp";
		const saintOfTheDayLink = `${this.saintOfTheDayBaseURL}/${month}/${month}${day}.jpg`;
		const response = await fetch(saintOfTheDayLink, { method: "HEAD" });
		if (response.ok) {
			link = saintOfTheDayLink;
		}
		return link;
	}

	private _getDatedBaseURL(date: Date) {
		const requestURL = new URL(this.baseURL);

		requestURL.searchParams.set("today", date.getDate().toString());
		requestURL.searchParams.set("month", (date.getMonth() + 1).toString());
		requestURL.searchParams.set("year", date.getFullYear().toString());
		return requestURL;
	}
}

const holytrinityorthodox: HolyTrinityOrthodox =
	new HolyTrinityOrthodoxImplementation();

export default holytrinityorthodox;
