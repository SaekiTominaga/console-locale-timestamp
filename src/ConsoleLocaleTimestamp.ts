type LogLevel = 'log' | 'info' | 'warn' | 'error'; // https://console.spec.whatwg.org/#loglevel-severity

/**
 * Console Locale Timestamp
 *
 * Provides a console debugging facilities with a timestamp.
 * Timestamps are written using `Date.prototype.toLocaleTimeString()`.
 * All public methods have the same functionality as the `Console`<https://console.spec.whatwg.org/>.
 */
export default class ConsoleLocaleTimestamp {
	readonly #locales: string | undefined = undefined;
	readonly #options: Intl.DateTimeFormatOptions | undefined = undefined;
	readonly #openQuote: string = '';
	readonly #closeQuote: string = '';
	readonly #separator: string = ' ';

	readonly #LOG_LEVEL = {
		log: <LogLevel>'log',
		info: <LogLevel>'info',
		warn: <LogLevel>'warn',
		error: <LogLevel>'error',
	}; // https://console.spec.whatwg.org/#loglevel-severity

	/**
	 * @param {string} locales - The specified value will be used as the first argument of `Date.prototype.toLocaleTimeString()`. (e.g. 'en-US' => '12:00:00 AM', 'ja-JP' => '0:00:00' )
	 * @param {Intl.DateTimeFormatOptions} options - The specified value will be used as the second argument of `Date.prototype.toLocaleTimeString()`. (e.g. { minute: '2-digit', second: '2-digit' } => '00:00')
	 * @param {[string, string?]} quote - The characters that surround the timestamp. If you omit the second value, the same characters as the first are applied. (e.g. [''] => '0:00:00' , ['[', ']'] => '[0:00:00]' )
	 * @param {string} separator - Delimiter between the timestamp and the message that follows. (e.g. ' - ' => '0:00:00 - Log message.' )
	 */
	constructor(locales?: string, options?: Intl.DateTimeFormatOptions, quote?: [string, string?], separator?: string) {
		if (locales !== undefined) {
			if (Object.prototype.toString.call(locales) !== '[object String]') {
				throw new TypeError('The argument `locales` must be an String.');
			}

			this.#locales = locales;
		}

		if (options !== undefined) {
			if (Object.prototype.toString.call(options) !== '[object Object]') {
				throw new TypeError('The argument `options` must be an Object.');
			}

			this.#options = options;
		}

		if (quote !== undefined) {
			if (Object.prototype.toString.call(quote) !== '[object Array]') {
				throw new TypeError('The argument `quote` must be an Array.');
			} else if (quote.length < 1 || quote.length > 2) {
				throw new RangeError('The argument `quote` must be an Array of length 1 or 2.');
			} else if (!quote.every((val) => Object.prototype.toString.call(val) === '[object String]')) {
				throw new TypeError('The contents of the Array of arguments `quote` must be a String.');
			}

			this.#openQuote = quote[0];
			this.#closeQuote = quote.length === 1 ? quote[0] : <string>quote[1];
		}

		if (separator !== undefined) {
			if (Object.prototype.toString.call(separator) !== '[object String]') {
				throw new TypeError('The argument `separator` must be an String.');
			}

			this.#separator = separator;
		}
	}

	/**
	 * Print a timestamp to the console.
	 *
	 * @param {string} logLevel - Grouping name of logLevel
	 * @param {string} separator - Delimiter between the timestamp and the message that follows
	 */
	private _printTimestamp(logLevel: LogLevel, separator: string = this.#separator): void {
		const timestamp = `${this.#openQuote}${new Date().toLocaleTimeString(this.#locales, this.#options)}${this.#closeQuote}${separator}`;

		switch (logLevel) {
			case this.#LOG_LEVEL.log:
			case this.#LOG_LEVEL.info:
			case this.#LOG_LEVEL.warn: {
				process.stdout.write(timestamp);
				break;
			}
			case this.#LOG_LEVEL.error: {
				process.stderr.write(timestamp);
				break;
			}
			default: {
				throw new Error(
					'An undefined `logLevel` was specified as an argument. `logLevel` must be one of the groups defined below. <https://console.spec.whatwg.org/#loglevel-severity>'
				);
			}
		}
	}

	/**
	 * Print a timestamp to the console. A line break is performed immediately after the timestamp.
	 *
	 * @param {string} logLevel - Grouping name of logLevel
	 */
	private _printlnTimestamp(logLevel: LogLevel): void {
		this._printTimestamp(logLevel, '\n');
	}

	/**
	 * Wrapper of console.assert()
	 *
	 * @param {boolean} condition - First argument of console.assert()
	 * @param {any[]} data - Second and subsequent arguments of console.assert()
	 *
	 * @see console.assert() <https://console.spec.whatwg.org/#assert>
	 */
	assert(condition?: boolean, ...data: any[]): void {
		if (!condition) {
			this._printTimestamp(this.#LOG_LEVEL.error);
		}
		console.assert(condition, ...data);
	}

	/**
	 * Wrapper of console.clear()
	 *
	 * @see console.clear() <https://console.spec.whatwg.org/#clear>
	 */
	clear(): void {
		console.clear();
	}

	/**
	 * Wrapper of console.debug()
	 *
	 * @param {any[]} data - Argument of console.debug()
	 *
	 * @see console.debug() <https://console.spec.whatwg.org/#debug>
	 */
	debug(...data: any[]): void {
		this._printTimestamp(this.#LOG_LEVEL.log);
		console.debug(...data);
	}

	/**
	 * Wrapper of console.error()
	 *
	 * @param {any[]} data - Argument of console.error()
	 *
	 * @see console.error() <https://console.spec.whatwg.org/#error>
	 */
	error(...data: any[]): void {
		this._printTimestamp(this.#LOG_LEVEL.error);
		console.error(...data);
	}

	/**
	 * Wrapper of console.info()
	 *
	 * @param {any[]} data - Argument of console.info()
	 *
	 * @see console.info() <https://console.spec.whatwg.org/#info>
	 */
	info(...data: any[]): void {
		this._printTimestamp(this.#LOG_LEVEL.info);
		console.info(...data);
	}

	/**
	 * Wrapper of console.log()
	 *
	 * @param {any[]} data - Argument of console.log()
	 *
	 * @see console.log() <https://console.spec.whatwg.org/#log>
	 */
	log(...data: any[]): void {
		this._printTimestamp(this.#LOG_LEVEL.log);
		console.log(...data);
	}

	/**
	 * Wrapper of console.table()
	 *
	 * @param {any} tabularData - First argument of console.table()
	 * @param {string[]} properties - Second and subsequent arguments of console.table()
	 *
	 * @see console.table() <https://console.spec.whatwg.org/#table>
	 */
	table(tabularData?: any, properties?: string[]): void {
		this._printlnTimestamp(this.#LOG_LEVEL.log);
		console.table(tabularData, properties);
	}

	/**
	 * Wrapper of console.trace()
	 *
	 * @param {any[]} data - Argument of console.trace()
	 *
	 * @see console.trace() <https://console.spec.whatwg.org/#trace>
	 */
	trace(...data: any[]): void {
		this._printTimestamp(this.#LOG_LEVEL.log);
		console.trace(...data);
	}

	/**
	 * Wrapper of console.warn()
	 *
	 * @param {any[]} data - Argument of console.warn()
	 *
	 * @see console.warn() <https://console.spec.whatwg.org/#warn>
	 */
	warn(...data: any[]): void {
		this._printTimestamp(this.#LOG_LEVEL.warn);
		console.warn(...data);
	}

	/**
	 * Wrapper of console.dir()
	 *
	 * @param {any} item - First argument of console.dir()
	 * @param {any} options - Second and subsequent arguments of console.dir()
	 *
	 * @see console.dir() <https://console.spec.whatwg.org/#dir>
	 */
	dir(item?: any, options?: any): void {
		this._printTimestamp(this.#LOG_LEVEL.log);
		console.dir(item, options);
	}

	/**
	 * Wrapper of console.dirxml()
	 *
	 * @param {any[]} data - Argument of console.dirxml()
	 *
	 * @see console.dirxml() <https://console.spec.whatwg.org/#dirxml>
	 */
	dirxml(...data: any[]): void {
		this._printTimestamp(this.#LOG_LEVEL.log);
		console.dirxml(...data);
	}

	/**
	 * Wrapper of console.count()
	 *
	 * @param {string} label - Argument of console.count()
	 *
	 * @see console.count() <https://console.spec.whatwg.org/#count>
	 */
	count(label?: string): void {
		this._printTimestamp(this.#LOG_LEVEL.info);
		console.count(label);
	}

	/**
	 * Wrapper of console.countReset()
	 *
	 * @param {string} label - Argument of console.countReset()
	 *
	 * @see console.countReset() <https://console.spec.whatwg.org/#countreset>
	 */
	countReset(label?: string): void {
		console.countReset(label);
	}

	/**
	 * Wrapper of console.group()
	 *
	 * @param {any[]} label - Argument of console.group()
	 *
	 * @see console.group() <https://console.spec.whatwg.org/#group>
	 */
	group(...label: any[]): void {
		if (label.length > 0) {
			this._printTimestamp(this.#LOG_LEVEL.log);
		}
		console.group(...label);
	}

	/**
	 * Wrapper of console.groupCollapsed()
	 *
	 * @param {any[]} label - Argument of console.groupCollapsed()
	 *
	 * @see console.groupCollapsed() <https://console.spec.whatwg.org/#groupcollapsed>
	 */
	groupCollapsed(...label: any[]): void {
		if (label.length > 0) {
			this._printTimestamp(this.#LOG_LEVEL.log);
		}
		console.groupCollapsed(...label);
	}

	/**
	 * Wrapper of console.groupEnd()
	 *
	 * @see console.groupEnd() <https://console.spec.whatwg.org/#groupend>
	 */
	groupEnd(): void {
		console.groupEnd();
	}

	/**
	 * Wrapper of console.time()
	 *
	 * @param {string} label - Argument of console.time()
	 *
	 * @see console.time() <https://console.spec.whatwg.org/#time>
	 */
	time(label?: string): void {
		console.time(label);
	}

	/**
	 * Wrapper of console.timeLog()
	 *
	 * @param {string} label - First argument of console.timeLog()
	 * @param {any[]} data - Second and subsequent arguments of console.timeLog()
	 *
	 * @see console.timeLog() <https://console.spec.whatwg.org/#timelog>
	 */
	timeLog(label?: string, ...data: any[]): void {
		this._printTimestamp(this.#LOG_LEVEL.log);
		console.timeLog(label, ...data);
	}

	/**
	 * Wrapper of console.timeEnd()
	 *
	 * @param {string} label - Argument of console.timeEnd()
	 *
	 * @see console.timeEnd() <https://console.spec.whatwg.org/#timeend>
	 */
	timeEnd(label?: string): void {
		this._printTimestamp(this.#LOG_LEVEL.info);
		console.timeEnd(label);
	}
}
