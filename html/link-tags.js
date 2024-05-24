`LINKS`;
// There are 2 types of links in HTML. The anchor tag and the link tag. 

// The anchor tag is used to create either external links (absolute path links to external websites) OR internal links (relative path links to other pages in your website or sections of the same page using #). 

// The link tag on the other hand is used to link in resources like stylesheets.


`Anchor Tag <a>`;
// The anchor tag is used to create links to other webpages or to sections of the same page. It is a container tag that contains text content. The content inside the <a> tag is displayed as a link text or image or video on the webpage.

// The anchor tag is an inline element. i.e it takes up only the width of the content inside it and does not start on a new line.



`Key Attributes for the Anchor Tag`;

`href`;
// The href attribute is used to specify the URL of the page that the link goes to. The href attribute is a required attribute.

`<a href="https://www.google.com">Google</a>`;
`<a href="https://www.google.com"><img src="google.png" alt="Google"></a>`;


`target`;
// The target attribute is used to specify where the linked page will open. The target attribute can have the following values: _blank, _self, _parent, _top. _blank opens the linked page in a new tab. _self opens the linked page in the same tab. _parent opens the linked page in the parent frame. _top opens the linked page in the full body of the window.

`<a href="https://www.google.com" target="_blank">Google</a>`;
`<a href="https://www.google.com" target="_self">Google</a>`;
`<a href="https://www.google.com" target="_parent">Google</a>`;
`<a href="https://www.google.com" target="_top">Google</a>`;


`title`;
// The title attribute is used to specify extra information about the link. The title attribute is displayed as a tooltip when the user hovers over the link.

`<a href="https://www.google.com" title="Google">Google</a>`;
`<a href="https://www.google.com" title="Google"><img src="google.png" alt="Google"></a>`;


`download`;
// The download attribute is used to specify that the target will be downloaded when a user clicks on the hyperlink. The optional value of the download attribute is the name the file will be downloaded with.

`<a href="google.png" download>Download Google</a>`;







`Link Tag <link>`;
// The link tag is used to link in external resources like stylesheets. It is a self-closing tag that does not contain any content. link tags are placed within the head tag

`<link rel="stylesheet" href="styles.css">`;
`<link rel="icon" href="favicon.ico">`;
`<link rel="preconnect" href="https://fonts.gstatic.com">`;
`<link rel="preload" href="image.jpg" as="image">`;



`Attributes for the Link Tag`;

`rel`;
// The rel attribute is used to specify the relationship between the current document and the linked document. The rel attribute is a required attribute.

`<link rel="stylesheet" href="styles.css">`;

`href`;
// The href attribute is used to specify the URL of the linked document. The href attribute is a required attribute.

`<link rel="stylesheet" href="styles.css">`;

`as`;
// The as attribute is used to specify the type of the linked document. The options are: image, script, style, document, fetch, font, manifest, media, object, report, serviceworker. The as attribute is an optional attribute.

`<link rel="preload" href="image.jpg" as="image">`;

`type`;
// The type attribute is used to specify the media type of the linked document. The options are: text/css, text/html, text/javascript, text/plain, text/xml, application/json, application/javascript, application/xml, application/xhtml+xml, application/rss+xml, application/atom+xml, application/pdf, application/postscript, application/zip, application/x-gzip, application/x-tar, application/x-rar-compressed, application/x-7z-compressed, application/x-shockwave-flash, application/x-javascript, application/x-msdownload, application/x-woff, application/x-font-ttf, application/x-font-otf, application/x-font-woff

`<link rel="stylesheet" href="styles.css" type="text/css">`;

`media`;
// The media attribute is used to specify the media query for the linked document. The media attribute is an optional attribute. The media query is used to specify the conditions under which the linked document should be applied. 

`<link rel="stylesheet" href="styles.css" media="screen">`;

`sizes`;
// The sizes attribute is used to specify the sizes of the linked document. The sizes attribute is an optional attribute. 

`<link rel="icon" href="favicon.ico" sizes="16x16">`;

`title`;
// The title attribute is used to specify extra information about the linked document. The title attribute is an optional attribute.

`<link rel="stylesheet" href="styles.css" title="Styles">`;


`crossorigin`;
// The crossorigin attribute is used to specify the CORS settings for the linked document. This means that the browser will check the CORS settings of the linked document before loading it. The crossorigin attribute is an optional attribute.

`<link rel="stylesheet" href="styles.css" crossorigin="anonymous">`;

`integrity`;
// The integrity attribute is used to specify the integrity settings for the linked document. This means that the browser will check the integrity of the linked document before loading it. The integrity attribute is an optional attribute.


`<link rel="stylesheet" href="styles.css" integrity="sha384-abc123">`;

`referrerpolicy`;
// The referrerpolicy attribute is used to specify the referrer policy for the linked document. By referrer policy, we mean the information that is sent to the linked document about the referring document. The referrerpolicy attribute is an optional attribute.

`<link rel="stylesheet" href="styles.css" referrerpolicy="no-referrer">`;

