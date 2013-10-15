Mosaic Grid
==============

Mosaic Grid is a responsive theme which surfaces content in a presentation that is easy to scan and digest. The design encourages exploration and engagement by focusing on imagery and directional text. Less clutter and more substance is the core objective. Embracing the latest technologies in CSS3, HTML5, and JQuery, the experience is alive with intuitive interactions that engage and entice a viewer to view more. The theme is designed to surface content in easy to swallow chunks that encourages and enables the audience to explore more. The present and future of online content must embrace a landscape of unlimited devices. From the smallest handheld phone to the largest flat screen television the same content must convey the same message on a variety of viewports. Mosaic Grid offers a more organic and intuitive user experience that is equipped to deliver a clean presentation at any scale.

### Next-Generation Web Technologies
Mosaic Grid utilizes HTML5, CSS3 and Javascript libraries including JQuery, Modernizr, Masonry and others.

**Grunt** is a Javascript automation tool installed and managed via npm, the Node.js package manager that will make your life as a front-end developer a hell of a lot easier. With Grunt and any of its 25 plugins installed you can automate a variety of tasks that will clean, copy, and validate your JS and SASS files among other things. You will find the latest version of Mosaic Grid (github) comes packaged with several Grunt plugins that will speed your production. Tasks included in the Github download:
* **connect** - connect to port 9001 and open in browser)
* **concat** - reduce packages to js/mosaicgrid.js)
* **uglify** - creates  js/mosaicgrid.min.js)
* **sass** - creates _www/css/mosaicgrid.css, _www/css/media_queries.css)
* **copy** - copies js/* and components/** to _www/ and _www/components)
* **watch** - concat, copy, uglify, sass, and validation)


**Bower** is a package manager for self-contained JavaScript components. The core elements of Mosaic Grid are built with a variety of JS packages. Bower enables us to update and install the latest and greatest packages available on the web. Bower dependencies included in the download:
* JQuery
* JQuery UI
* Masonry
* Modernizr


**JSON** or JavasScript Object Notation is a commonly used language that represents data in easy to parse JavaScript Objects. Individual tiles and metadata are parsed from the JSON file **‘mosaicgrid_demo.json’**. The function can be found in the source file **‘tile.js’**. JSON is a common format CMS Integration, and you should have no problem exporting your content data from popular content systems (i.e Drupal, Wordpress, Movable Type, etc.). JSON fields defined in the included file:
* **title**
* **name**
* **field_post_type**
* **created**
* **field_post_desc**
* **field_post_cover**
* **field_post_cover_height**
* **field_post_cover_width**
* **path**
* **ID** (not listed in the JSON file, is an additional field generated from the parse function) 


**Sass** is an extension of CSS3, adding nested rules, variables, mixins, selector inheritance, and more. It’s translated to well formatted, standard CSS using the command line tool or a web-framework plugin. The source Sass files included in the download can be located in the folder ‘sass’. Through the use of the Grunt task ‘sass’ any updates to these files and the files in ‘partials’ will automatically generate CSS3 to the folder ‘_www/css/’.


### Social Sandbox
Another important feature is the Social Sandbox. This container holds quick links for sharing the page with the most popular social sites. Each icon represents its corresponding social network and is created using font icons (more about that here: [http://css-tricks.com/examples/IconFont/](http://css-tricks.com/examples/IconFont/)). With a little CSS you can easily change size or color or even add a shadow. The Social Sandbox scales responsively across all viewports and offers a simple solution for sharing content.