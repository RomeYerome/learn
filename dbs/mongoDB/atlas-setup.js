`MongoDB Atlas`;
// MongoDB Atlas is a cloud-based database service that provides a web-based interface for managing MongoDB databases. It is designed to be easy to use and highly available, and it provides a number of features that make it a good choice for web applications and other types of software.

`Using MongoDB Atlas`;
// After signing up for MongoDB Atlas, you can create a new cluster, which is a group of servers that store your data. You can then create a new database within the cluster and add collections to the database. Once you have created a database, you can connect to it from your Node.js application using the connection string provided by MongoDB Atlas.

`Steps to use MongoDB Atlas`;
// 1. Sign up for / Sign into MongoDB Atlas
// 2. Click on the New Project button (top right) to create a new project
// 3. Name the project and add tags to help organize your projects
// 4. Add members to the project (optional) and click on the Create Project button

// 5. Next, Create a deployment by clicking on the create button under deployment
// 6. Choose a cloud provider, region, and cluster tier (you have a free option)
// 7. Click the Create Cluster button
// 8. Next Enter a username and password and create a user
// 9. Select where you'll like to connect from - your local application most likely or cloud environment

// 10. Copy the connection string and save it in a .env file in your application. you'll have to input the password you set and put the db name before the ? in the connection string. Save as MONGO_URI='connection string' in the .env file

// 11. Next click on the database tab on the menu
// 12. Click on the browse collections option and click on add my own data
// 13. Create a database name and collection name and save it

// 14. Next, click on the connect button and click on connect your application
// 15. Select how you want to connect to your application - Node.js or using compass, shell (cli) etc
// 16. Copy the connection string and use it in your application to connect to your database

// 17. You can also use the connect with MongoDB Compass option to connect to your database using MongoDB Compass
