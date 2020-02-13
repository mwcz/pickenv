const { find, pick, keys, isRegExp } = require("lodash");

/**
 * @param regex {RegExp | String} A regex
 * @param {Array.<RegExp> | Array.<String>} regex An array of regular expressions (expressed as strings or RegExps),
 * that match the environment variable names you wish to find.
 * @return matchingEnvs an object resembling `process.env` but only containing environment variables whose names match
 * the input regexes.
 */
function pickenv(regexArray) {
  // turn any regex strings into proper RegExp objects
  const regexes = regexArray.map(r => isRegExp(r) ? r : new RegExp(r));

  // get all env names
  const allEnvs = keys(process.env);

  // filter down to only the env names that match the regexes
  const matchingEnvs = allEnvs.filter(env => {
    // test all regexes against each env
    return find(regexes, r => r.test(env) );
  });

  // use the matching env names to pick the desired properties from process.env
  return pick(process.env, matchingEnvs);
}

module.exports = pickenv;
