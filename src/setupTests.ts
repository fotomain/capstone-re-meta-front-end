import '@testing-library/jest-dom';

// @ts-ignore
import { TextEncoder as NodeTextEncoder, TextDecoder as NodeTextDecoder } from 'util';

// @ts-ignore
globalThis.TextEncoder = NodeTextEncoder;
// @ts-ignore
globalThis.TextDecoder = NodeTextDecoder;
