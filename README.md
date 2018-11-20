# My React Template

React, Redux, Firebase

Users can drag and drop to share their favorite photo. Images are uploaded to Cloudinary storage and references are stored in the firebase. Uses Redux to manage component's state locally.

### Check out this site live on this [Link](http://photo-wall.surge.sh/)

## User Story

- I can create photo that have names and description.

- I can edit these photos.

- I can delete these photos.

- I can upload image for these photos

### Usage

#### 1. install dependencies

```
npm install

```

if node-sass error occured in linux distribution, run the following command, then run npm install again after that.

```
sudo npm install --unsafe-perm node-sass
```

#### 2a. run on localhost

develop environment, run webpack dev server

```
npm start

```

This will get the files running on http://localhost:8080
Webpack will watch for changes and update the browser when file changes.

#### 2b. build dist directory

production environment, run webpack

```
npm run build

```

The minified JS bundle files including the output html file will be store in dist directory.
