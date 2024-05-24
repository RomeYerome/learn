`HOSTING BACKEND APPS ON RENDER`

// Hosting on render.com is a simple process. You can host a static site, a node.js app, or a docker container. Sign up or sign in with github and deploy the application from there.

// The following steps will guide you through the process of deploying a node.js app on render.com:

// 1. Sign up or sign in with github
// 2. Click on the create new button on the top right corner of the dashboard
// 3. Select the type of deployment you want to make (web service, static site, or docker service). For backend apps, select web service
// 4. Select the repository you want to deploy from github
// 5. Configure the settings for the deployment. You can set the name of the service, the environment, the build command, and the start command
// 6. Click on the deploy button to deploy the app
// 7. Once the app is deployed, you can access it from the URL provided by render.com

`BEFORE YOU DEPLOY`
// 1. Use Font Awesome CDN to prevent size warnings. i.e delete the line where you import font awesome in your index.js and add the stylesheet cdn link (from cdn.js or the font awesome site) on your html page instead
// 2. Change mode to production in webpack.config.js
// 3. Change the #apiUrl in the services/some-api.js file. Remove the http://localhost/3000 and replace it with the directory instead (e.g /api/ideas) add that to a proxy in the  webpack config file under devServer to allow you continue running the app in development mode
// 4. run npm run build to create a build or public folder
// 5. Push to Github
// 6. Register at render.com, create new web service, select the repository
// 7. Create the env variable for MONGO_URI on render.com
// 8. Add the host IP address to MongoDB Atlas network access