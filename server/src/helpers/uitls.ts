import crypto from "crypto";

/**
 * Generate a v4 UUID (random) with timestamp
 * @returns {string} uuidV4
 */
export const uuidV4 = (): string => {
  // Generate 16 random bytes (128 bits) to form the UUID
  const randomBytes = crypto.randomBytes(16);

  // Set version (4) and variant (RFC4122) bits
  randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40;
  randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80;

  // Create UUID string
  const uuid = randomBytes.toString('hex');

  // Add the current timestamp in milliseconds to make it more unique
  const timestamp = Date.now().toString(16).padStart(12, '0');
  const uuidWithTimestamp = uuid.substr(0, 12) + timestamp + uuid.substr(24);

  return uuidWithTimestamp;
}