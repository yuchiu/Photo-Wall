# My React Template

Recipe and Image Upload App w/ React Redux Firebase

### Check out this site live on this [Link](http://recipe-app.surge.sh/) 

![Demo](https://github.com/yuchiu/React-Redux-Recipe-App/blob/master/demo2.gif)

## User Story

- I can create recipes that have names and ingredients.

- I can edit these recipes.

- I can delete these recipes.

- I can upload image for these recipes



### Usage 
#### 1. First install package cross-env globally

```
npm i -g cross-env

```
Ensure npm scripts work properly across Linux, Windows, and all environments.

#### 2. install everything else

```
npm install

```

#### 3a. run on localhost
develop environment, run webpack dev server

```
npm start

```
This will get the files running on http://localhost:8080
Webpack will watch for changes and update the browser when file changes.

#### 3b. build dist directory
production environment, run webpack

```
npm run build

```
The minified JS bundle files including the output html file will be store in dist directory.
