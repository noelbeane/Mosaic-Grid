Mosaic Grid
==============

Mosaic Grid is a responsive theme designed to surface content in easy to swallow chunks that encourage further exploration with less clutter and more substance. The main content area is built with the [Masonry](http://masonry.desandro.com/) cascading grid layout. This Javascript library places elements in optimal position based on available vertical space. 

From the smallest handheld device to the largest flat screen Mosaic Grid offers a clean presentation at any scale. The default breakpoints are broken into four recognizable sizes (small, medium, large, and x-large), where small represents most handheld devices and large represents your average desktop computer. Feel free to add or remove breakpoints in the **media_queries.scss** file located in the **sass/** folder. This is a good time to discuss the file structure of the download.

###File Structure
* **_preview** – contains a full demo of the theme. Any changes you make will be reflected here.
* **components** – contains a large number of javascript libraries that are available to enchance your development (JQuery, Masonry, Modernizr, etc.)
* **js** – contains the core Mosaic Grid package. Any changes to this folder will compile and be reflected in the _preview folder
* **node_modules** – contains dependencies for running Grunt tasks
* **sass** – contains your core css files written in SASS. Updates here will compile and copy to the css folder in _preview
* **themes** – contains the files for downloading the Mosaic Grid theme. Currently there is only a Drupal 7 version, but more themes are on the way.


### Next-Generation Web Technologies
Mosaic Grid utilizes HTML5, CSS3 and Javascript libraries including JQuery, Modernizr, Masonry and others.

**Grunt** is an automation tool installed and managed via npm, the Node.js package manager that will make your life a hell of a lot easier. With Grunt and its growing number of plugins installed you can automate a variety of tasks that can clean, copy, or validate your JS, SASS, CSS, or HTML files among other things. You will find the download comes packaged with several Grunt plugins that will speed your prototyping and production. [Learn more about Grunt...](http://gruntjs.com/)

Tasks included in the download:
* **connect** - opens a preview in a browser window connected to the localhost port 9001; livereload is enabled, so you may want to be sure you have the latest version installed and running
* **uglify** - minifies the package **mosaicgrid.js** to **mosaicgrid.min.js**
* **sass** - compiles .scss files in the folder **sass/** to .css files in the folder **_preview/css/**
* **html-validation** – runs validation on html files in the folder **_preview/**
* **copy** - copies files located in the folder **js/** and **components/** to the folders **_preview/js/** and **_preview/components/**
* **watch** - when changes occur to files in the folders **js/** or **sass/** Grunt will run the tasks **copy**, **uglify**, **sass** as well as reload the **_preview/** files in the browser



**Bower** is a package manager for self-contained JavaScript components. The core elements of Mosaic Grid are built with a variety of JS packages. Bower enables us to update and install the latest and greatest packages available on the web. [Learn more about Bower...](http://bower.io/)

Bower dependencies included in the download:
* JQuery
* JQuery UI
* Masonry
* Modernizr


**JSON** is a common data-interchange format that is easy to manipulate and output from most content management systems (i.e Drupal, Wordpress, Movable Type, etc.). For this reason the Mosaic Grid theme uses this format to parse data to build out the individual tiles. The function **loadJSON(file)** can be found in **js/mosaicgrid.js** and parses data from the file **_preview/mosaicgrid.json**. These fields were created for demonstration only so please feel free to adjust according to your needs.

JSON fields defined in the download:
* **title** - is the title of the content item
* **name** - is the name of the publishing author/editor
* **field_post_type** - is the defined content type. For demonstration purposes seven content types typical in most blogs have been identified here. They include Article, Audio, Document, Photo, Video, Image, Link.
* **created** – is the original publish date of the content
* **field_post_desc** – is the short description of the content item
* **field_post_cover** – is the cover image of the content
* **field_post_cover_height** – is the height of the cover image
* **field_post_cover_width** – is the width of the cover image
* **path** – is the destination url for the content item
* **ID** is the unique identifier for each item (not listed in the JSON file, but is an additional field generated from the parse function)  


**Sass** is an extension of CSS3, which allows the use of nested rules, variables, mixins, selector inheritance, and much more. The source Sass files included in the download are located in the folder **sass/**. Through the use of the Grunt tasks any updates to the files in this folder or its subfolder **sass/_partials/** will automatically compile to the folder **_preview/css/**. [Learn more about Sass...](http://sass-lang.com/)
