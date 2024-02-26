# node-native-random-string

[![NPM version](https://img.shields.io/npm/v/node-native-random-string)](https://www.npmjs.com/package/node-native-random-string)
[![NPM downloads](https://img.shields.io/npm/dm/node-native-random-string)](https://www.npmjs.com/package/node-native-random-string)
[![NPM bundle size](https://img.shields.io/bundlephobia/min/node-native-random-string)](https://www.npmjs.com/package/node-native-random-string)

## Description

A cryptographically strong pseudo-random string generator using only the native Node.js `crypto` module.

-   TypeScript support
-   Lightweight - no external dependencies
-   Uses randomBytes() and randomInt() functions from the native `crypto` module
-   Generates random numeric (decimal), hexadecimal, and base64 strings

## Requirements

-   Node.js v18.0.0 or higher

## Examples

### Random numeric string

```typescript
import { randomNumeric } from "node-native-random-string";

const numericString = randomNumeric(10); // random 10-digit numeric string
```

### Random hexadecimal string

```typescript
import { randomHex } from "node-native-random-string";

const hexString = randomHex(16); // random 16-character hexadecimal string
```

### Random base64 string

```typescript
import { randomBase64 } from "node-native-random-string";

const base64String = randomBase64(32); // random 32-character base64 string
```
