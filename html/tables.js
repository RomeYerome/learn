`TABLES`;
// HTML tables are used to display data in tabular form. An HTML table is defined with the <table> tag. Each table row is defined with the <tr> tag. A table header is defined with the <th> tag. By default, table headings are bold and centered. A table data/cell is defined with the <td> tag

`Example`;
<table>
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>35</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>Doe</td>
        <td>25</td>
    </tr>
</table>


`Key Attributes for Tables`;
// The <table> tag supports the following attributes

`Table Borders`;
// You can add borders to a table using the border attribute. The value can be set to 0 or 1. The default value is 0

`Example`;
<table border="1">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>35</td>
    </tr>
</table>

`Table Width and Height`;
// You can set the width and height of a table using the width and height attributes. The value can be set in pixels or percentage

`Example`;
<table width="100%">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>35</td>
    </tr>
</table>

`Table Cell Padding and Spacing`;
// You can set the padding and spacing of table cells using the cellpadding and cellspacing attributes. The value can be set in pixels

`Example`;
<table cellpadding="10" cellspacing="5">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>35</td>
    </tr>
</table>

`Table Alignment`;
// You can align a table using the align attribute. The value can be set to left, right, or center

`Example`;
<table align="center">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>35</td>
    </tr>
</table>
