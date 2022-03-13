export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  //copy of entity attributes
  description: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: 'moon',
  description: 'Album of pictures of moon'
}

const picture: Picture = {
  id: 1,
  title: 'family',
  orientation: PhotoOrientation.Portrait
}

let newPicture = {} as Picture;
newPicture.id = 1;
newPicture.title = 'beach';
newPicture.orientation = PhotoOrientation.Square;