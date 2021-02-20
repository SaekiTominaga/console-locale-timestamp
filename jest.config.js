export default {
	globals: {
		'ts-jest': {
			tsconfig: '__tests__/tsconfig.json',
		},
	},
	transform: {
		'\\.ts$': 'ts-jest',
	},
};
