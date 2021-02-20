import ConsoleLocaleTimestamp from '../src/ConsoleLocaleTimestamp';

const string = 'Hello World!';
const object = {
	1001: { name: 'John Smith', age: '20' },
	1002: { name: 'Taro Yamada', age: '25' },
};

describe('各メソッドの読み出し確認', () => {
	const consoleLocaleTimestamp = new ConsoleLocaleTimestamp();

	test('assert() - true', () => {
		const spyConsole = jest.spyOn(console, 'assert');

		consoleLocaleTimestamp.assert(true, string);

		expect(spyConsole).toHaveBeenCalled();

		spyConsole.mockRestore();
	});
	test('assert() - false', () => {
		const spyProcess = jest.spyOn(process.stderr, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'assert');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.assert(false, string);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][1]).toBe(string);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('clear()', () => {
		const spyConsole = jest.spyOn(console, 'clear');

		consoleLocaleTimestamp.clear();

		expect(spyConsole).toHaveBeenCalled();

		spyConsole.mockRestore();
	});
	test('debug()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'debug');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.debug(string);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe(string);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('error()', () => {
		const spyProcess = jest.spyOn(process.stderr, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'error');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.error(string);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe(string);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('info()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'info');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.info(string);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe(string);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('log()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'log');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.log(string);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe(string);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('table()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'table');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.table(object);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe(object);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('trace()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'trace');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.trace(string);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe(string);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('warn()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'warn');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.warn(string);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe(string);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('dir()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'dir');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.dir(object);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe(object);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('dirxml()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'dirxml');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.dirxml(object);

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe(object);

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('count()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'count');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.count();

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('countReset()', () => {
		const spyConsole = jest.spyOn(console, 'countReset');

		consoleLocaleTimestamp.countReset();

		expect(spyConsole).toHaveBeenCalled();

		spyConsole.mockRestore();
	});
	test('group()', () => {
		const spyConsole = jest.spyOn(console, 'group');

		consoleLocaleTimestamp.group();

		expect(spyConsole).toHaveBeenCalled();

		spyConsole.mockRestore();
	});
	test('group(label)', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'group');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.group('group');

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe('group');

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('groupCollapsed()', () => {
		const spyConsole = jest.spyOn(console, 'groupCollapsed');

		consoleLocaleTimestamp.groupCollapsed();

		expect(spyConsole).toHaveBeenCalled();

		spyConsole.mockRestore();
	});
	test('groupCollapsed(label)', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'groupCollapsed');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.groupCollapsed('groupCollapsed');

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();
		expect(spyConsole.mock.calls[0][0]).toBe('groupCollapsed');

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('groupEnd()', () => {
		const spyConsole = jest.spyOn(console, 'groupEnd');

		consoleLocaleTimestamp.groupEnd();

		expect(spyConsole).toHaveBeenCalled();

		spyConsole.mockRestore();
	});
	test('time()', () => {
		const spyConsole = jest.spyOn(console, 'time');

		consoleLocaleTimestamp.time();

		expect(spyConsole).toHaveBeenCalled();

		spyConsole.mockRestore();
	});
	test('timeLog()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'timeLog');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.timeLog();

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
	test('timeEnd()', () => {
		const spyProcess = jest.spyOn(process.stdout, 'write');
		spyProcess.mockImplementation((x) => Boolean(x));
		const spyConsole = jest.spyOn(console, 'timeEnd');
		spyConsole.mockImplementation((x) => Boolean(x));

		consoleLocaleTimestamp.timeEnd();

		expect(spyProcess).toHaveBeenCalled();
		expect(spyConsole).toHaveBeenCalled();

		spyProcess.mockRestore();
		spyConsole.mockRestore();
	});
});
