export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation
}

//function showing a picture
function showPicture(picture: Picture) {
  console.log(`[Title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}

let myPicture = {
  title: 'Test title',
  date: '2022/03/12',
  orientation: PhotoOrientation.Landscape,
}

showPicture(myPicture);
showPicture({
  title: 'test title 2',
  date: '2022/03/18',
  orientation: PhotoOrientation.Portrait,
  // extra: 'test' //error!
})

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config:PictureConfig) {
  const picture = {title: '', date: '', orientation: ''};
  if (config.title) {
    picture.title = config.title;
  }

  if (config.date) {
    picture.date = config.date;
  }

  return picture;
}

let picture = generatePicture({});
console.log('picture: ', picture);
picture = generatePicture({
  title: 'test 3',
  date: '2022/03/20'
});
console.log('picture: ', picture);


//read only interface
interface User {
  readonly id: number;
  username: string;
  isPro: boolean;
}

let user: User;
user = {id: 10, username: 'ernanvr', isPro: true};
console.log(user);
user.isPro = false;
console.log(user);

//Interfaces inheritance
