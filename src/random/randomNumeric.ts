import assert from "node:assert";
import { randomInt } from "node:crypto";

const MAX_RANGE_POWER = 14; // 10^14 is the maximum number that can be passed to randomInt

/**
 * Generates a random decimal string with the specified number of characters.
 * @param charactersCount The number of characters in the generated string.
 */
export function randomNumeric(charactersCount: number) {
    assert(charactersCount > 0, "charactersCount must be greater than 0");

    let result = randomInt(0, 10 ** Math.min(charactersCount, MAX_RANGE_POWER)).toString();
    while (result.length < charactersCount) {
        const missingCharactersCount = charactersCount - result.length;
        if (missingCharactersCount === 1) {
            result = randomInt(0, 10) + result; // numeric string can start with 0
        } else {
            result += randomInt(0, 10 ** Math.min(missingCharactersCount, MAX_RANGE_POWER)).toString();
        }
    }
    return result;
}
