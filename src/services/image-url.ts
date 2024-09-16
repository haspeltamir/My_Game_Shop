/* image-usl.ts 
In this Service model , we will define Hey utility (service) to get the image URL from the server, 
and modify it.
then this will be used in the GameCard component to display the image of the game.

We will use this when, for example We don't want to load the full image(Like if you have slow Internet connection )
*/

import noImage from "../assets/Image_Placeholder/no-image-placeholder.webp";
const getCroppedImage = (imageURL: string) => {
  if (!imageURL) {
    return noImage;
  }
  const targetWordInURL = "media/";
  const index = imageURL.indexOf(targetWordInURL) + targetWordInURL.length;
  return imageURL.slice(0, index) + "crop/600/400/" + imageURL.slice(index);
};

// export { getCroppedImage };
// if i do :"export { getCroppedImage }", i will import it like this:
// import { getCroppedImage } from "./services/image-usl";

export default getCroppedImage;
// if i do :"export default getCroppedImage", i will import it like this:
// import getCroppedImage from "./services/image-usl";

// const getCroppedImage = (imageURL: string, width: number, height: number) => {
//   const image = new URL(imageURL);
//   image.searchParams.set("w", width.toString());
//   image.searchParams.set("h", height.toString());
//   return image.toString();
// };
