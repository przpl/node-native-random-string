import assert from "node:assert";
import { randomBytes } from "node:crypto";

/**
 * Generates a random base64 string with the specified number of characters.
 * @param charactersCount The number of characters in the generated string.
 */
export function randomBase64(charactersCount: number) {
    assert(charactersCount > 0, "charactersCount must be greater than 0");

    const byteCount = Math.ceil((charactersCount * 3) / 4);
    return randomBytes(byteCount).toString("base64").substring(0, charactersCount);
}
