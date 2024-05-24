`Mongoose`;
// Mongoose is an object data mapper (ODM). It is a library for working with MongoDB in Node.js applications. It provides a simple and flexible API for interacting with MongoDB databases, and it is often used to define the schema for your data and perform CRUD operations on the data.

// Mongoose provides a higher-level abstraction over the MongoDB Node.js driver, making it easier to work with MongoDB in Node.js applications. It allows you to define models for your data, which provide an interface for interacting with the database. You can use Mongoose to perform CRUD operations on your data, define validation rules for your data, and create relationships between different types of data.


`Installing Mongoose and dotenv`;
// To use Mongoose in your Node.js application, you need to install the mongoose package. You can do this by running the following command in your terminal:

// dotenv is a package that allows you to load environment variables from a .env file into your Node.js application. You can use it to store sensitive information, such as database connection strings, in a .env file and load them into your application at runtime.

`npm install mongoose`; // This will install the mongoose package and add it to your project's package.json file.
`npm install dotenv`; // This will install the dotenv package and add it to your project's package.json file.


`Using Mongoose`;
// Once you have installed the mongoose package, you can use it to connect to a MongoDB database and define models for your data. Here's how to do this:





`// BASIC STEPS TO USING MONGOOSE`;

`1. Require mongoose in your application ( your main js file)`;

const mongoose = require('mongoose'); // require the mongoose package
const express = require('express'); // require express
const portt = process.env.PORT || 5000;  // get the port from the environment variables or use 5000
require('dotenv').config(); // require dotenv and call the config method to load the environment variables from the .env file



const appp = express();  // create an instance of express




`2. Create a connectDB function to connect to the MongoDB database`;
const connectDBase = async () => {  // usually called connect db
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);  // use the mongoose.connect method to connect to the MongoDB database
        console.log(`MongoDB is connected ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

connectDBase(); // call the connectDB function to connect to the MongoDB database





`3. Define a schema for your data. The schema is a class object that defines the structure of your data and can include validation rules. it is the template with which you model your data. The schema is used to create a model for your collection.`;

const StaffSchema = new mongoose.Schema({ // create a schema for your data
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    tag: String,
    username: String,
    date: {
        type: Date,
        default: Date.now
    }
});


`The permitted SchemaTypes are:`;
// String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map, UUID


// You can add more properties (keys) to the schema as needed. For example, you can add a password field to the schema as shown below:

StaffSchema.add({
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
});



// You can add to the functionality to the schema by adding methods to the schema. For example, you can add a method to the schema to get the full name of the staff as shown below:

StaffSchema.methods.getFullName = function () {
    return `${this.name} ${this.tag}`;
}

// You can also add static methods to the schema. Static methods are methods that are called on the model itself rather than on an instance of the model. For example, you can add a static method to the schema to find all staff with a given tag as shown below:

StaffSchema.statics.findByTag = function (tag) {
    return this.find({ tag: tag });
}

// You can also add validation to the schema. For example, you can add a custom validator to the schema to ensure that the tag is unique as shown below:

StaffSchema.path('tag').validate(async function (value) {
    const tagCount = await this.model('Staff').countDocuments
        ({ tag: value });
    return !tagCount;
}, 'Tag already exists');

// You can also add pre and post hooks to the schema. Pre hooks are functions that are executed before a specific operation, such as saving a document. Post hooks are functions that are executed after a specific operation. For example, you can add a pre hook to the schema to hash the password before saving the document as shown below:

StaffSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// You can also add indexes to the schema. Indexes are used to improve the performance of queries on the database. For example, you can add an index to the schema to index the tag field as shown below:

StaffSchema.index({ tag: 1 });

// You can also add compound indexes to the schema. Compound indexes are indexes that are created on multiple fields. For example, you can add a compound index to the schema to index the name and tag fields as shown below:

StaffSchema.index({ name: 1, tag: 1 });

// You can also add unique indexes to the schema. Unique indexes are indexes that enforce uniqueness constraints on the fields. For example, you can add a unique index to the schema to enforce uniqueness on the tag field as shown below:

StaffSchema.index({ tag: 1 }, { unique: true });


`4. Create a model for your collection using the schema.`;
//A model is a class with which we construct documents. In this case, each document will be a staff with properties and behaviors as declared in our schema. Let's create a staff document representing the front desk guy at a hotel.

//The model provides an interface for interacting with the database. You can use the model to perform CRUD operations on the collection

const Staff = mongoose.model('Staff', StaffSchema); // a model for the staff collection using the staffSchema




`5. Use the model to perform CRUD operations on the collection`;

// CREATE: Add new staff
appp.post('/api/staff', async (req, res) => {
    try {

        `Create a new staff object using the staffSchema defined above`;
        // const staffSchema = {
        //    name: req.body.name,
        //    tag: req.body.tag,
        //    username: req.body.username
        //}

        // if (!staffSchema.name || !staffSchema.tag || !staffSchema.username) {
        //     return res.status(400).json({ success: false, message: 'Please provide name, tag and username' });
        // }

        `Use the staff object to create a new model instance;`

        // const staff = new Staff(staffSchema);    // create a new instance of the Staff model with the request body

        // OR combine the two steps above into one step as shown below:
        const staff = new Staff({   // 
            name: req.body.name,
            tag: req.body.tag,
            username: req.body.username
        });    // create a new instance of the Staff model with the request body

        const newStaff = await staff.save();  // use the Staff model to create a new document in the staff collection
        res.status(201).send({ success: true, data: newStaff });
    } catch (error) {
        res.status(400).send({ success: false, error: error.message });
    }
});


// READ: Get all staff
appp.get('/api/staff', async (req, res) => {
    try {
        const staff = await Staff.find();    // use the Staff model to find all the documents in the staff collection
        res.send({ success: true, data: staff });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

// READ: Get single staff
appp.get('/api/staff/:id', async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);    // use the Staff model to find a single document in the staff collection by its id
        if (!staff) {
            return res.status(404).send({ success: false, error: `Staff with id ${req.params.id} not found` });
        }
        res.send({ success: true, data: staff });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

// UPDATE: Update staff
appp.put('/api/staff/:id', async (req, res) => {
    try {
        const staff = await Staff.findByIdAndUpdate
            (req.params.id, req.body
                , {
                    new: true,
                    runValidators: true
                });    // use the Staff model to find a single document in the staff collection by its id and update it with the request body
        if (!staff) {
            return res.status(404).send({ success: false, error: `Staff with id ${req.params.id} not found` });
        }
        res.send({ success: true, data: staff });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});

// DELETE: Delete staff
appp.delete('/api/staff/:id', async (req, res) => {
    try {
        const staff = await Staff.findByIdAndDelete(req.params.id);    // use the Staff model to find a single document in the staff collection by its id and delete it
        if (!staff) {
            return res.status(404).send({ success: false, error: `Staff with id ${req.params.id} not found` });
        }
        res.send({ success: true, data: {} });
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
});




appp.listen(process.env.PORT, () => {
    console.log('Server is listening on port 5000');
});












`USING MONGOOSE FOR A MORE COMPLEX APPLICATION`;

`DB Connection file - /config/db.js`;
// 1. create a config folder in the root folder and create a db.js file. This file is for making the connection to the MongoDB database using mongoose as shown below:

// 2. Create a .env file (add it to your .gitignore file) in the root of your application and add your MONGO_URI (the db connection string from MongoDB Atlas) and PORT to the .env file as shown below:

// 3. In the db.js file, require mongoose and create a connectDB function as shown below:

// db.js file
const mongoose = require('mongoose');

// create a connectDB function to connect to the MongoDB database. mongoose.connect returns a promise
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);  // the process.env.MONGO_URI is the connection string from MongoDB Atlas
        console.log(`MongoDB is connected ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

// mongoose.set('strictQuery', true); // set the strictQuery option to true to enable strict mode for queries  

// export the connection function to be used in the main js file
module.exports = connectDB;




`main js file - server.js`;
// 4. In your main js file, require the dotenv package and call the config method to load the environment variables from the .env file. Then require the connectDB function from the db.js file and call it to connect to the MongoDB database as shown below:

// server.js file
const express = require('express'); // require express
const apppp = express();  // create an instance of express
require('dotenv').config(); // you must require this to access the environment variables from the .env file

const porttt = process.env.PORT || 5000;  // get the port from the environment variables or use 5000
const connectDB = require('./config/db');

connectDB();

// 5. You can now define a schema for your data and create a model for your collection as shown below:




`models/SchemaName.js - Defining modular Schemas and Creating a Model`;
// To define a schema for your data and create a model for your collection, you can use the Schema and model methods of the mongoose object. Here's how to do this:

// 1. Create a models folder in the root of your application to hold all your models and create a file for eacb model e.g. Idea.js file. The convention is to use a capital letter for the model name and singular form of the collection name e.g. Idea for ideas collection

// 2. In the Idea.js file, require mongoose and create a schema for your data and create a model for your collection as shown below:

// Idea.js file
const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({ // create a schema for your data
    text: {
        type: String,
        required: [true, 'Please add some text']
    },
    tag: {
        type: String,
    },
    username: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Idea', IdeaSchema); // the first argument is the name of the model and the second argument is the schema for the model

// 3. You can now use the Idea model to perform CRUD operations on the ideas collection as shown below:




`routes/ideas.js - using your exported model in main.js or your routes/routesname.js for CRUD Operations`;

// If you have a separate file for your routes, you can require the exported model e.g Idea model from the Idea.js file and use it to perform CRUD operations on the ideas collection. Here's how to do this:

// 1. Create a routes folder in the root of your application to hold all your routes and create a file for each route e.g. ideas.js file.

// 2. In the ideas.js file, require express and create a router object. Then require the Idea model from the Idea.js file and use it to perform CRUD operations on the ideas collection as shown below:

// ideas.js file

const express = require('express');
const routerr = express.Router();
const Idea = require('../models/Idea'); // require the mongoDB Idea model from the Idea.js file

// READ: Get all ideas
routerr.get('/', async (req, res) => {
    try {
        const ideas = await Idea.find();    // use the Idea model to find all the documents in the ideas collection
        res.send({ success: true, data: ideas });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});

module.exports = routerr;

// 3. You can now use the ideasRouter to handle incoming requests to the /api/ideas URL in your main js file as shown below:

// In your main js file, require the ideasRouter from the ideas.js file and use it to handle incoming requests to the /api/ideas URL as shown below:




// server.js file (Your main js file)
const express = require('express'); // require express
require('dotenv').config(); // require dotenv and call the config method to load the environment variables from the .env file
const port = process.env.PORT || 5000;  // get the port from the environment variables or use 5000

const connectDB_ = require('./config/db');   // require the connectDB function from the db.js file

connectDB_();

const app = express();  // create an instance of express


// Body Parser Middleware
app.use(express.json());    // use the express.json() middleware to parse incoming requests with JSON payloads. 

app.use(express.urlencoded({ extended: false }));   // use the express.urlencoded() middleware to parse incoming requests with urlencoded payloads. meaning it can parse incoming requests with form data

app.get('/', (req, res) => {
    res.send({ messagee: 'Welcome to the Random Ideas App' });  // create a route to handle incoming requests to the root URL
});

const ideasRouter1 = require('./routes/ideas'); // require the ideasRouter from the ideas.js file
app.use('/api/ideas', ideasRouter); // use the ideasRouter to handle incoming requests to the /api/ideas URL

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});









`CRUD OPERATIONS WITH MONGOOSE`;

// ideas.js file
const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea'); // require the mongoDB Idea model from the Idea.js file

// READ: Get all ideas
router.get('/', async (req, res) => {
    try {
        const ideas = await Idea.find();    // use the Idea model to find all the documents in the ideas collection
        res.send({ success: true, data: ideas });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});


// READ: Get single idea
router.get('/:id', async (req, res) => {
    try {
        const idea = await Idea.findById(req.params.id);    // use the Idea model to find a single document in the ideas collection by its id
        if (!idea) {
            return res.status(404).send({ success: false, message: `Idea with id ${req.params.id} not found` });
        }
        res.send({ success: true, data: idea });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});


// CREATE: Add new idea
router.post('/', async (req, res) => {
    const idea = new Idea({
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username
    });    // create a new instance of the Idea model with the request body

    try {

        // const idea = await Idea.create(req.body);  // use the Idea model to create a new document in the ideas collection

        const savedIdea = await idea.save();    // save the new document to the ideas collection
        res.json({ success: true, data: savedIdea });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// UPDATE: Update idea

router.put('/:id', async (req, res) => {
    try {
        const idea = await Idea.findByIdAndUpdate
            (req.params.id, req.body
                , {
                    new: true,
                    runValidators: true
                });    // use the Idea model to find a single document in the ideas collection by its id and update it with the request body
        if (!idea) {
            return res.status(404).send({ success: false, message: `Idea with id ${req.params.id} not found` });
        }
        res.send({ success: true, data: idea });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

);

// DELETE: Delete idea
router.delete('/:id', async (req, res) => {
    try {
        const idea = await Idea.findByIdAndDelete(req.params.id);    // use the Idea model to find a single document in the ideas collection by its id and delete it
        if (!idea) {
            return res.status(404).send({ success: false, message: `Idea with id ${req.params.id} not found` });
        }
        res.send({ success: true, data: {} });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});


module.exports = router;
