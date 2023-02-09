const ITEM_TYPES = {
  image: drawImage,
  sound: drawSound,
  video: drawVideo,
};

function drawImage(item) {
  const imageElement = document.createElement("img");
  imageElement.classList = "gallery-item__image";
  imageElement.src = item.resourse;

  return imageElement;
}

function drawSound(item) {
  const soundElement = document.createElement("audio");
  soundElement.classList = "gallery-item__audio";
  soundElement.src = item.resourse;
  soundElement.controls = true;

  return soundElement;
}

function drawVideo(item) {
  const videoElement = document.createElement("video");
  videoElement.classList = "gallery-item__video";
  videoElement.src = item.resourse;
  videoElement.controls = true;

  return videoElement;
}

export function drawGalleryItem(item) {

  const itemElement = document.createElement("div");
  itemElement.classList = "gallery-item";

  const resourseWrapElement = document.createElement("div");
  resourseWrapElement.classList = "gallery-item__resourse";

  const drawerForType = ITEM_TYPES[item.type];
  resourseWrapElement.appendChild(drawerForType(item));

//   if (item.type === "image") {
//     const imageElement = document.createElement("img");
//     imageElement.classList = "gallery-item__image";
//     imageElement.src = item.resourse;

//     itemElement.appendChild(imageElement);
//   } else if (item.type === "sound") {
//     const audioElement = document.createElement("audio");
//     audioElement.classList = "gallery-item__audio";
//     audioElement.src = item.resourse;
//     audioElement.controls = true;

//     resourseWrapElement.appendChild(audioElement);
//   }


  const titleElement = document.createElement("span");
  titleElement.classList = "gallery-item__title";
  titleElement.textContent = item.title;

  itemElement.appendChild(resourseWrapElement);
  itemElement.appendChild(titleElement);

  return itemElement;
}
