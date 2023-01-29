import '@testing-library/jest-dom';
import { loadEnvConfig } from '@next/env';

// eslint-disable-next-line no-console
loadEnvConfig(__dirname, true, { info: () => null, error: console.error });
