// Import all SVG files directly
import photosnap from "../assets/photosnap.svg";
import manage from "../assets/manage.svg";
import account from "../assets/account.svg";
import myhome from "../assets/myhome.svg";
import loopStudios from "../assets/loop-studios.svg";
import faceit from "../assets/faceit.svg";
import shortly from "../assets/shortly.svg";
import insure from "../assets/insure.svg";
import eyecam from "../assets/eyecam-co.svg";
import airFilter from "../assets/the-air-filter-company.svg";

// Create a mapping object for easy lookup
const assetMap = {
  "photosnap.svg": photosnap,
  "manage.svg": manage,
  "account.svg": account,
  "myhome.svg": myhome,
  "loop-studios.svg": loopStudios,
  "faceit.svg": faceit,
  "shortly.svg": shortly,
  "insure.svg": insure,
  "eyecam-co.svg": eyecam,
  "the-air-filter-company.svg": airFilter,
};

// Helper function to get the correct asset path
export function getAsset(path) {
  // Extract the filename from the path
  const filename = path.split("/").pop();
  return assetMap[filename] || path;
}
