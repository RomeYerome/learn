`INHERITANCE`;
// SASS lets you extend the styles of one class into another class. This is called inheritance. You do it using the @extend directive. 

// First you create the base template class you want to extend from using the percent sign %. Then you create a new class that extends the base class.

// Here is an example:

`%message {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}

.success {
    @extend .message;
    background-color: lightgreen;
}

.error {
    @extend .message;
    background-color: lightcoral;
}`;

// In this example, the %message class is the base class. The .success and .error classes are the subclasses that extend the .message class.

// This will compile to:

`.message, .success, .error {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}

.success {
    background-color: lightgreen;
}

.error {
    background-color: lightcoral;
}`;

// As you can see, the .message, .success, and .error classes all have the same styles. This is because the .success and .error classes extend the .message class.


// Inheritance will help you avoid writing duplicate code and also avoid having multiple unnecessary classes in your html.