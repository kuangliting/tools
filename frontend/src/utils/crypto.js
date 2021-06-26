import { createHash } from "crypto";

const encrypt = (algorithm, content) => {
  const hash = createHash(algorithm);
  hash.update(content);
  return hash.digest("hex");
};

export const sha1 = (content) => encrypt('sha1', content)
export const md5 = (content) => encrypt('md5', content)

export default {
  md5, sha1
};
