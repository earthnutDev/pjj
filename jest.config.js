/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default () => {
  return {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.json',
        },
      ],
    },
    testMatch: ['**/*.test.(js|ts|tsx)'],
    testTimeout: 500,
    setupFilesAfterEnv: ['./jest.setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{ts,js,tsx,jsx}',
      '!**/*.test.ts',
      '!**/node_modules/**',
      '!**/vendor/**',
      '!index.ts',
      '!**/{types,type}.ts',
      '!**/{types,type}.d.ts',
      '!coverage/**',
    ],
    coveragePathIgnorePatterns: ['/node_modules/', '/dist/', 'test', '.*.d.ts'],
    coverageReporters: ['text', 'lcov', 'html', 'text-summary'],
    coverageDirectory: 'coverage',
    coverageThreshold: {
      global: {
        branches: 20,
        functions: 20,
        lines: 20,
        statements: 20,
      },
    },
  };
};
