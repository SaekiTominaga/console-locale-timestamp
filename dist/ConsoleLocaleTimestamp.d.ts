/**
 * Console Locale Timestamp
 *
 * Provides a console debugging facilities with a timestamp.
 * Timestamps are written using `Date.prototype.toLocaleTimeString()`.
 * All public methods have the same functionality as the `Console`<https://console.spec.whatwg.org/>.
 */
export default class ConsoleLocaleTimestamp {
    #private;
    /**
     * @param {string} locales - The specified value will be used as the first argument of `Date.prototype.toLocaleTimeString()`. (e.g. 'en-US' => '12:00:00 AM', 'ja-JP' => '0:00:00' )
     * @param {Intl.DateTimeFormatOptions} options - The specified value will be used as the second argument of `Date.prototype.toLocaleTimeString()`. (e.g. { minute: '2-digit', second: '2-digit' } => '00:00')
     * @param {[string, string?]} quote - The characters that surround the timestamp. If you omit the second value, the same characters as the first are applied. (e.g. [''] => '0:00:00' , ['[', ']'] => '[0:00:00]' )
     * @param {string} separator - Delimiter between the timestamp and the message that follows. (e.g. ' - ' => '0:00:00 - Log message.' )
     */
    constructor(locales?: string, options?: Intl.DateTimeFormatOptions, quote?: [string, string?], separator?: string);
    /**
     * Print a timestamp to the console.
     *
     * @param {string} logLevel - Grouping name of logLevel
     * @param {string} separator - Delimiter between the timestamp and the message that follows
     */
    private _printTimestamp;
    /**
     * Print a timestamp to the console. A line break is performed immediately after the timestamp.
     *
     * @param {string} logLevel - Grouping name of logLevel
     */
    private _printlnTimestamp;
    /**
     * Wrapper of console.assert()
     *
     * @param {boolean} condition - First argument of console.assert()
     * @param {any[]} data - Second and subsequent arguments of console.assert()
     *
     * @see console.assert() <https://console.spec.whatwg.org/#assert>
     */
    assert(condition?: boolean, ...data: any[]): void;
    /**
     * Wrapper of console.clear()
     *
     * @see console.clear() <https://console.spec.whatwg.org/#clear>
     */
    clear(): void;
    /**
     * Wrapper of console.debug()
     *
     * @param {any[]} data - Argument of console.debug()
     *
     * @see console.debug() <https://console.spec.whatwg.org/#debug>
     */
    debug(...data: any[]): void;
    /**
     * Wrapper of console.error()
     *
     * @param {any[]} data - Argument of console.error()
     *
     * @see console.error() <https://console.spec.whatwg.org/#error>
     */
    error(...data: any[]): void;
    /**
     * Wrapper of console.info()
     *
     * @param {any[]} data - Argument of console.info()
     *
     * @see console.info() <https://console.spec.whatwg.org/#info>
     */
    info(...data: any[]): void;
    /**
     * Wrapper of console.log()
     *
     * @param {any[]} data - Argument of console.log()
     *
     * @see console.log() <https://console.spec.whatwg.org/#log>
     */
    log(...data: any[]): void;
    /**
     * Wrapper of console.table()
     *
     * @param {any} tabularData - First argument of console.table()
     * @param {string[]} properties - Second and subsequent arguments of console.table()
     *
     * @see console.table() <https://console.spec.whatwg.org/#table>
     */
    table(tabularData?: any, properties?: string[]): void;
    /**
     * Wrapper of console.trace()
     *
     * @param {any[]} data - Argument of console.trace()
     *
     * @see console.trace() <https://console.spec.whatwg.org/#trace>
     */
    trace(...data: any[]): void;
    /**
     * Wrapper of console.warn()
     *
     * @param {any[]} data - Argument of console.warn()
     *
     * @see console.warn() <https://console.spec.whatwg.org/#warn>
     */
    warn(...data: any[]): void;
    /**
     * Wrapper of console.dir()
     *
     * @param {any} item - First argument of console.dir()
     * @param {any} options - Second and subsequent arguments of console.dir()
     *
     * @see console.dir() <https://console.spec.whatwg.org/#dir>
     */
    dir(item?: any, options?: any): void;
    /**
     * Wrapper of console.dirxml()
     *
     * @param {any[]} data - Argument of console.dirxml()
     *
     * @see console.dirxml() <https://console.spec.whatwg.org/#dirxml>
     */
    dirxml(...data: any[]): void;
    /**
     * Wrapper of console.count()
     *
     * @param {string} label - Argument of console.count()
     *
     * @see console.count() <https://console.spec.whatwg.org/#count>
     */
    count(label?: string): void;
    /**
     * Wrapper of console.countReset()
     *
     * @param {string} label - Argument of console.countReset()
     *
     * @see console.countReset() <https://console.spec.whatwg.org/#countreset>
     */
    countReset(label?: string): void;
    /**
     * Wrapper of console.group()
     *
     * @param {any[]} label - Argument of console.group()
     *
     * @see console.group() <https://console.spec.whatwg.org/#group>
     */
    group(...label: any[]): void;
    /**
     * Wrapper of console.groupCollapsed()
     *
     * @param {any[]} label - Argument of console.groupCollapsed()
     *
     * @see console.groupCollapsed() <https://console.spec.whatwg.org/#groupcollapsed>
     */
    groupCollapsed(...label: any[]): void;
    /**
     * Wrapper of console.groupEnd()
     *
     * @see console.groupEnd() <https://console.spec.whatwg.org/#groupend>
     */
    groupEnd(): void;
    /**
     * Wrapper of console.time()
     *
     * @param {string} label - Argument of console.time()
     *
     * @see console.time() <https://console.spec.whatwg.org/#time>
     */
    time(label?: string): void;
    /**
     * Wrapper of console.timeLog()
     *
     * @param {string} label - First argument of console.timeLog()
     * @param {any[]} data - Second and subsequent arguments of console.timeLog()
     *
     * @see console.timeLog() <https://console.spec.whatwg.org/#timelog>
     */
    timeLog(label?: string, ...data: any[]): void;
    /**
     * Wrapper of console.timeEnd()
     *
     * @param {string} label - Argument of console.timeEnd()
     *
     * @see console.timeEnd() <https://console.spec.whatwg.org/#timeend>
     */
    timeEnd(label?: string): void;
}
//# sourceMappingURL=ConsoleLocaleTimestamp.d.ts.map