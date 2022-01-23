// Custom little thing for Bitburner's script editor to use some intellicomplete thing, idk, RTFM.
/**
* @param {NS} ns
**/

// Array of who to iterate through and smack around. I was going to automate the gathering but the scan() function doesn't have a depth param, so this is easier for now. Don't feel like writing a wholeass worm yet.
const patheticVictims = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "max-hardware", "zer0", "nectar-net", "CSEC", "neo-net", "silver-helix", "omega-net", "phantasy"];

export async function main(ns) {
  for (let victims of patheticVictims) {
    await ns.scp(ns.args[0], "home", victims); // We're assuming you're running this from the home directory because where else would you be doing so.
    ns.tprint("Copied script to " + victims); // Visual confirmation because I like validation.
  };
};