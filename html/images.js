`IMAGES`;
// Images in HTML are created with the <img /> tag. It is a self closing tag and takes some key attributes  like source, alt etc. that provide the needed information to render your image

`Two types of images`;
// There are two types of images, internal and external. The key difference is that src attribute of the internal images link to image files in your project folder while the external links to urls of images in external websites/servers

`Internal Images`;
<img src='/my-images/image-one.jpg' alt='profile-picture' />

`External Images`;
<img src='http://some-website.com/images/image-one' alt='oak-tree' />




`Key Attributes for the Image Tag`;
// The image tag has some key attributes that are important to know when working with images in HTML

`src`;
// The src attribute is the most important attribute of the image tag. It specifies the source of the image file. It can be a relative path to an image file in your project folder or an absolute path to an image file in an external website/server

`alt`;
// The alt attribute is used to provide a text description of the image. It is important for accessibility and SEO. The text is displayed if the image fails to load or if the user is using a screen reader

`sizes`;
// The sizes attribute specifies the sizes of the image for different viewports. It is used in conjunction with the srcset attribute to provide responsive images. It takes a list of media conditions and image sizes separated by commas like sizes="(max-width: 600px) 300px, 600px"  which means that the image is 300px wide when the viewport is less than 600px and 600px wide when the viewport is 600px or more

`srcset`;
// The srcset attribute specifies a list of image files to use in different situations. It is used to provide responsive images that look good on different devices and screen sizes. It takes a list of image files separated by commas like srcset="image-one.jpg 300w, image-two.jpg 600w" which means that image-one.jpg is 300 pixels wide and image-two.jpg is 600 pixels wide. The browser will choose the best image file to use based on the device's pixel density and viewport size. If the browser with is 400px and the pixel density is 2, the browser will choose image-two.jpg because it is 600 pixels wide and the device's pixel density is 2

`loading`;
// The loading attribute specifies how the browser should load the image. It can take three values, lazy, eager and auto. Lazy means the image will be loaded only when it comes into view, eager means the image will be loaded as soon as possible and auto means the browser will decide the best way to load the image

`crossorigin`;
// The crossorigin attribute specifies how the browser should handle cross-origin requests for the image. It can take three values, anonymous, use-credentials and none. Anonymous means the browser will not send any credentials with the request, use-credentials means the browser will send credentials with the request and none means the browser will not send any credentials with the request

