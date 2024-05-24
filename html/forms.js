`FORMS`;
// Forms in HTML are used to collect user input. An HTML form is defined with the <form> tag. The form tag contains various form elements such as input fields, radio buttons, checkboxes, and submit buttons. The form elements are defined with the <input>, <textarea>, and <button> tags

// Forms are created with the form tag as shown below

<form>
    {/* form elements go here */}
</form>

`Key Attributes of the Form Tag`;
// The form tag supports the following attributes

`Action`;
// The action attribute specifies where to send the form data when the form is submitted. The value of the action attribute is a URL

`Method`;
// The method attribute specifies the HTTP method to use when sending form data. The value can be GET or POST

`Name`;
// The name attribute specifies the name of the form. The name attribute is used to identify the form data after the form is submitted. You can reference a form by its name in JavaScript or server-side code

`Example`;
<form action="/submit-form" method="POST">
    {/* form elements go here */}
</form>









`FORM ELEMENTS`;
// Form elements are used to collect user input. The most common form elements are input fields, radio buttons, checkboxes, and submit buttons


`General Attributes That Apply to All Form Elements`;

`Name`;
// The name attribute specifies the name of the form element. The name attribute is used to identify the form data after the form is submitted. You can reference a form element by its name in JavaScript or server-side code

`Id`;
// The id attribute specifies a unique id for the form element. The id attribute is used to reference a form element in JavaScript or CSS

`Value`;
// The value attribute specifies the initial value of the form element. The value attribute is used to set the default value of the form element

`Class`;
// The class attribute specifies one or more class names for the form element. The class attribute is used to define styles for the form element using CSS

`Style`;
// The style attribute specifies an inline style for the form element. The style attribute is used to define styles for the form element using CSS

`Disabled`;
// The disabled attribute specifies that the form element is disabled. Disabled form elements cannot be interacted with and are not submitted with the form data

`Readonly`;
// The readonly attribute specifies that the form element is read-only. Read-only form elements cannot be edited by the user but are submitted with the form data

`Required`;
// The required attribute specifies that the form element must be filled out before submitting the form. If the required attribute is present, the form element is required

`Autofocus`;
// The autofocus attribute specifies that the form element should automatically get focus when the page loads. Only one form element can have the autofocus attribute










`GENERAL ATTRIBUTES FOR TEXT INPUT FIELDS`;
// The text input fields are text, password, email, search, url. The following attributes apply to text input fields

`Type`;
// The type attribute specifies the type of input field to display. The value can be text, password, email, number, date, etc

`Placeholder`;
// The placeholder attribute specifies a short hint that describes the expected value of the input field. The placeholder text is displayed in the input field until the user enters a value

`Size`;
// The size attribute specifies the width of the input field in characters. The size attribute is used to define the width of the input field. Not important anymore because of CSS

`Maxlength`;
// The maxlength attribute specifies the maximum number of characters allowed in the input field. The maxlength attribute is used to limit the number of characters that can be entered in the input field  

`Pattern`;
// The pattern attribute specifies a regular expression that the input field's value must match. The pattern attribute is used to validate the input field value

`Autocomplete`;
// The autocomplete attribute specifies whether the input field should have autocomplete enabled. The value can be on or off

`Multiple`;
// The multiple attribute specifies that the user can enter multiple values in the input field. The multiple attribute is used with the email and file input types

`Checked`;
// The checked attribute specifies that the radio button or checkbox is checked by default. The checked attribute is used with the radio and checkbox input types

`Autocapitalize`;
// The autocapitalize attribute specifies whether the input field should have automatic capitalization enabled. The value can be on or off

`Autocorrect`;
// The autocorrect attribute specifies whether the input field should have automatic correction enabled. The value can be on or off

`Spellcheck`;
// The spellcheck attribute specifies whether the input field should have spell checking enabled. The value can be true or false










`GENERAL ATTRIBUTES FOR NUMERIC INPUT FIELDS`;
// The numeric input fields are range, number, and date. The following attributes apply to numeric input fields

`Min`;
// The min attribute specifies the minimum value allowed in a numeric or date input field. 

`Max`;
// The max attribute specifies the maximum value allowed in a numeric or date input field. 

`Step`;
// The step attribute specifies the increment or decrement for a numeric input field. For example 2 will increment the value by 2 every time you change it with the up and down arrows

`List`;
// The list attribute specifies the id of a datalist element that contains pre-defined options for the input field. The list attribute is used with the number and range input types




`GENERAL ATTRIBUTES FOR THE SUBMIT BUTTON`;
// The following attributes apply to the submit button element

`Form`;
// The form attribute specifies the form the input field belongs to. The form attribute is used to group input fields together in a form

`Formaction`;
// The formaction attribute specifies the URL where to send the form data when the form is submitted. The formaction attribute is used with the submit button

`Formenctype`;
// The formenctype attribute specifies the encoding type to use when sending form data. The value can be application/x-www-form-urlencoded, multipart/form-data, or text/plain. The formenctype attribute is used with the submit button

`Formmethod`;
// The formmethod attribute specifies the HTTP method to use when sending form data. The value can be GET or POST. The formmethod attribute is used with the submit button

`Formnovalidate`;
// The formnovalidate attribute specifies that the form data should not be validated when the form is submitted. The formnovalidate attribute is used with the submit button

`Formtarget`;
// The formtarget attribute specifies where to display the response after submitting the form. The value can be _self, _blank, _parent, or _top. The formtarget attribute is used with the submit button









`FORM ELEMENTS`;

`LABEL TAG`;
// The label tag is used to define a label for an input field. The for attribute of the label tag should match the id attribute of the input field to bind them together

`key Attributes of the Label Tag`;

`For`; // The for attribute specifies the id of the input field the label is bound to. The for attribute is used to bind the label to the input field

// Example
<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"></input>
</form>









`TEXTAREA TAG`;
// The textarea tag is used to create a multi-line text input field. The textarea tag is used to collect long-form text input from the user


`Key Attributes Specific to Textarea Tag`;

`Name, Id, Readonly, Required, Disabled`;

`Rows`; // The rows attribute specifies the number of rows in the textarea. The rows attribute is used to define the height of the textarea in rows

`Cols`; // The cols attribute specifies the number of columns in the textarea. The cols attribute is used to define the width of the textarea in columns

`Placeholder`; // The placeholder attribute specifies a short hint that describes the expected value of the textarea. The placeholder text is displayed in the textarea until the user enters a value

`Wrap`; // The wrap attribute specifies how the text in the textarea should wrap. The value can be hard, soft, or off. hard wraps the text at the specified width, soft wraps the text at the nearest whitespace, and off does not wrap the text

`Example`;
<form>
    <label for="comments">Comments:</label>
    <textarea id="comments" name="comments"></textarea>
</form>



`INPUT FIELDS`;
// Input fields are used to collect user input. The input tag is used to create input fields. The type attribute specifies the type of input field to display. The most common types are text, password, email, number, and date


`Types of Input Fields`;

`TEXT INPUT`;
// The text type is used to create a single-line text input field

`Key Attributes of the Text Input Field`;

// `Type, Name, Id, Value, Placeholder, Size, Maxlength, Pattern, Autocomplete, Autofocus, Readonly, Disabled, Required, Class, Style, Autocapitalize, Autocorrect, Spellcheck`;




`PASSWORD INPUT`;
// The password type is used to create a password input field. The characters entered in a password field are masked

`Key Attributes of the Password Input Field`;

// `Type, Name, Id, Value, Placeholder, Size, Maxlength, Pattern, Autofocus, Readonly, Disabled, Required, Class, Style`;






`EMAIL INPUT`;
// The email type is used to create an email input field. The email field is validated to ensure that the input is a valid email address

`Key Attributes of the Email Input Field`;

// `Type, Name, Id, Value, Placeholder, Size, Maxlength, Pattern, Autocomplete, Autofocus, Readonly, Disabled, Required, Class, Style`;

'Multiple';
// The multiple attribute specifies that the user can enter multiple email addresses in the input field. 





`Number`;
// The number type is used to create a number input field. The number field is validated to ensure that the input is a number

`Date`;
// The date type is used to create a date input field. The date field displays a date picker for selecting a date

`Color`;
// The color type is used to create a color input field. The color field displays a color picker for selecting a color

`Checkbox`;
// The checkbox type is used to create a checkbox input field. The checkbox field allows the user to select one or more options from a list of choices. The checkboxes are independent of each other, and the user can select multiple checkboxes

// For example, the user can select multiple toppings on a pizza as shown below

<form>
    <input type="checkbox" name="topping" value="pepperoni"></input>
    <label for="topping">Pepperoni</label>
    <input type="checkbox" name="topping" value="mushrooms"></input>
    <label for="topping">Mushrooms</label>
    <input type="checkbox" name="topping" value="olives"></input>
    <label for="topping">Olives</label>
</form>


`Radio`;
// The radio type is used to create a radio button input field. The radio field allows the user to select one option from a list of choices. The radio buttons are dependent on each other, and the user can select only one radio button. They are grouped together using the name attribute


`Submit`;
// The submit type is used to create a submit button. The submit button is used to submit the form data to the server

`Button`;
// The button type is used to create a button. The button field is used to trigger a JavaScript function when clicked

`Textarea`;
// The textarea tag is used to create a multi-line text input field. The textarea tag is used to collect long-form text input from the user

`Select`;
// The select tag is used to create a dropdown list. The select tag contains one or more option tags that define the options in the dropdown list. The user can select one option from the dropdown list

`Option`;
// The option tag is used to define an option in a select dropdown list. The value attribute specifies the value of the option, and the text between the opening and closing option tags is displayed to the user

`Hidden`;
// The hidden type is used to create a hidden input field. The hidden field is used to store data that is not displayed to the user. Hidden input fields are used to store data that is sent to the server when the form is submitted

`Range`;
// The range type is used to create a slider input field. The range field allows the user to select a value from a range of values using a slider

`File`;
// The file type is used to create a file input field. The file field allows the user to select a file to upload to the server

`Reset`;
// The reset type is used to create a reset button. The reset button is used to reset the form fields to their initial values

`Search`;
// The search type is used to create a search input field. The search field is used to enter search queries. The search field may have a clear button to clear the search query. The clear button is displayed when the search field is focused

`Tel`;
// The tel type is used to create a telephone input field. The tel field is used to enter a telephone number. It displays a numeric keypad on mobile devices

`Url`;
// The url type is used to create a URL input field. The url field is used to enter a URL. It is validated to ensure that the input is a valid URL

`Week`;
// The week type is used to create a week input field. The week field is used to select a week and year. It displays a week picker for selecting a week and year

`Month`;
// The month type is used to create a month input field. The month field is used to select a month and year. It displays a month picker for selecting a month and year

`Datetime-local`;
// The datetime-local type is used to create a date and time input field. The datetime-local field is used to select a date and time. It displays a date and time picker for selecting a date and time

`Time`;
// The time type is used to create a time input field. The time field is used to select a time. It displays a time picker for selecting a time


`Example`;
<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"></input>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password"></input>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"></input>

    <label for="number">Number:</label>
    <input type="number" id="number" name="number"></input>

    <label for="date">Date:</label>
    <input type="date" id="date" name="date"></input>

    <label for="color">Color:</label>
    <input type="color" id="color" name="color"></input>

    <label for="topping">Toppings:</label>
    <input type="checkbox" name="topping" value="pepperoni"></input>
    <label for="topping">Pepperoni</label>
    <input type="checkbox" name="topping" value="mushrooms"></input>
    <label for="topping">Mushrooms</label>
    <input type="checkbox" name="topping" value="olives"></input>
    <label for="topping">Olives</label>

    <label for="size">Size:</label>
    <input type="radio" name="size" value="small"></input>
    <label for="size">Small</label>
    <input type="radio" name="size" value="medium"></input>
    <label for="size">Medium</label>
    <input type="radio" name="size" value="large"></input>
    <label for="size">Large</label>

    <button type="submit">Submit</button>

    <button type="button">Click Me</button>

    <textarea id="comments" name="comments"></textarea>

    <select id="country" name="country">
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
    </select>

    <input type="hidden" name="secret" value="12345"></input>

    <input type="range" id="volume" name="volume"></input>

    <input type="file" id="file" name="file"></input>

    <button type="reset">Reset</button>

    <input type="search" id="search" name="search"></input>

    <input type="tel" id="phone" name="phone"></input>

    <input type="url" id="website" name="website"></input>

    <input type="week" id="week" name="week"></input>

    <input type="month" id="month" name="month"></input>

    <input type="datetime-local" id="datetime" name="datetime"></input>

    <input type="time" id="time" name="time"></input>

</form>









'Key Attributes of the Input Tag';
// The input tag supports the following attributes

`Type`;
// The type attribute specifies the type of input field to display. The value can be text, password, email, number, date, etc

`Name`;
// The name attribute specifies the name of the input field. The name attribute is used to identify form data after the form is submitted. You can reference an input field by its name in JavaScript or server-side code

`Id`;
// The id attribute specifies a unique id for the input field. The id attribute is used to reference an input field in JavaScript or CSS

`Value`;
// The value attribute specifies the initial value of the input field. The value attribute is used to set the default value of the input field

`Placeholder`;
// The placeholder attribute specifies a short hint that describes the expected value of the input field. The placeholder text is displayed in the input field until the user enters a value

`Required`;
// The required attribute specifies that the input field must be filled out before submitting the form. If the required attribute is present, the input field is required

`Class`;
// The class attribute specifies one or more class names for the input field. The class attribute is used to define styles for the input field using CSS

`Hidden`;
// The hidden attribute specifies that the input field is hidden from view. Hidden input fields are used to store data that is not displayed to the user



`Example`;
<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"></input>
</form>


`Label Tag`;
// The label tag is used to define a label for an input field. The for attribute of the label tag should match the id attribute of the input field to bind them together

`Example`;
<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"></input>
</form>