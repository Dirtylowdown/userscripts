void
delete
end
stop
close


/**
 * @see {@link https://vitejs.dev/guide/env-and-mode.html}
 * @returns {string}
 */
const application = () => import.meta.env.NATIVE_APP ?? "application";

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connectNative}
 * @returns {import("webextension-polyfill").Runtime.Port} A `runtime.Port` object
 */
export function connectNative() {
	return browser.runtime.connectNative(application());
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendNativeMessage}
 * @param {any} message
 * @returns {Promise<any>} A response of JSON object or no arguments
 */
export function sendNativeMessage(message) {
	return browser.runtime.sendNativeMessage(application(), message);
}
