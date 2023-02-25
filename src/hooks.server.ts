import { detectLocale, i18n, isLocale } from "$i18n/i18n-util";
import { loadAllLocales } from "$i18n/i18n-util.sync";
import { pb } from "$lib/pocketbase/client";
import type { Handle, RequestEvent } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors";

loadAllLocales();
const L = i18n();

function getPreferredLocale({ request }: RequestEvent) {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request);

	return detectLocale(acceptLanguageDetector);
};

const setPocketBaseClient: Handle = async ({ event, resolve }) => {
	event.locals.pb = pb;
	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
		event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh();
	} catch (_) {
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
	}
	return await resolve(event);
}

const setLocale: Handle = async ({ event, resolve }) => {
	// read language slug
	const [, lang] = event.url.pathname.split("/");

	// redirect to base locale if no locale slug was found
	if (!lang) {
		const locale = getPreferredLocale(event);

		return new Response(null, {
			status: 302,
			headers: { Location: `/${locale}` },
		});
	}

	// if slug is not a locale, use base locale (e.g. api endpoints)
	const locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event);
	const LL = L[locale];

	// bind locale and translation functions to current request
	event.locals.locale = locale;
	event.locals.LL = LL;

	// replace html lang attribute with correct language
	return await resolve(event, { transformPageChunk: ({ html }) => html.replace("%lang%", locale) });

}

export const handle: Handle = sequence(setLocale, setPocketBaseClient);