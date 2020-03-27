import URL from "url";
export const parseHash = url => {
  const returnObj = {};
  if (!URL.parse(url).hash) {
    return returnObj;
  }

  const hash = URL.parse(url)
    .hash.split("#")
    .filter(Boolean);

  if (hash.length === 0) {
    return returnObj;
  }

  const hash_split = hash[0].split("&");

  for (let i = 0; i < hash_split.length; i++) {
    const [key, val] = hash_split[i].split("=");
    returnObj[key] = val;
  }

  return returnObj;
};
