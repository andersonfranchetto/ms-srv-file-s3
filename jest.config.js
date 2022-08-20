/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
/** @type {import ('reflect-metadata')} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};