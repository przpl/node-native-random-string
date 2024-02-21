import assert from "node:assert";
import { randomBytes } from "node:crypto";

/**
 * Generates a random hexadecimal string with the specified number of characters.
 * @param charactersCount The number of characters in the generated string.
 */
export function randomHex(charactersCount: number) {
    assert(charactersCount > 0, "charactersCount must be greater than 0");

    const byteCount = Math.ceil(charactersCount / 2);
    return randomBytes(byteCount).toString("hex").substring(0, charactersCount);
}
