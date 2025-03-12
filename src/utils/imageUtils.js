export function getImagePath(relativePath) {
  // Remove the "../" from the path since we want to reference from the public directory
  const cleanPath = relativePath.replace("../", "/");
  return cleanPath;
}
