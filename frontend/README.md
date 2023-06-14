# AI IMAGE GENERATION APP (FRONTEND)

These web-app can be use to create new images (powered by DALL-E API) by using promps input by the user or sort at our webapp and also to share the created image in our gallery. The main goal of the app was to clone [OpenAI's DALL-E web-app](https://labs.openai.com/).


## FEATURES
-[X] Navigate between the main page (homepage) and create page;
-[x] Create a new image by sorting promps from these webapp (by clicking on the surprise me button at the create page);
-[x] Create a new image by inputing your own promps;
-[x] Share a new image made by the user;
-[x] Fetch images (also who made and what promps has been used) to show in a gallery at the main page;
-[x] Filter the images in the main's page gallery;

## ABOUT THE FRONTEND

The frontend was built using [React.js]() and [Tailwindcss]() - for styling the components.

## HOW TO USE THIS REPOSITORY

1. Open up two terminals one in the backend and other in the frontend directory;
2. Type these command in each terminal: ``npm install``;
3. Sign up at MongoDB, Cloudinary and OpenAI, and create a cloud at Cloudinary, a database at MongoDB and get a api key at OpenAI;
4. Now it's time to setup the envrionment variables for our backend at the file ``/backend/.env``:
```
PORT=

MONGODB_URL=

OPENAI_API_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
5. After setup the env variables go to the file ``/frontend/src/config/api/index`` and change the value for the url of your backend server:
```
export const apiURL = ''; // INSERT THE BACKEND'S URL OR THE PORT RUNNING THE SERVER AT LOCALHOST
```
6. At both terminals type: ``npm run dev`` or ``npm start``;


## (FULL STACK DEMO)[https://gorgeous-piroshki-1692d0.netlify.app/]