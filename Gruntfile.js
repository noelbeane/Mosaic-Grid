'use strict';

module.exports = function(grunt) {

 
////////////////////////////////////
///////  PROJECT CONFIG
///////////////////////////////////
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    connect: {
      server: {
        options: {
          port: 9001,
          base: '_preview',
          hostname: 'localhost',
          open: true,
          livereload: 9001
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/<%= pkg.name %>.min.js': ['js/<%= pkg.name %>.js']
        }
      }
    },
    sass: {
      dist: {
        files: {
          '_preview/css/mosaicgrid.css': 'sass/mosaicgrid.scss',
          '_preview/css/media_queries.css': 'sass/media_queries.scss',
          '_preview/css/style.css': 'sass/style.scss',
          '_preview/css/colors.css': 'sass/colors.scss'
        }
      }
    },
    validation: {
      options: {
        stoponerror: false,
        reset: true
      },
      files: {
        src: ['_preview/*.html']
      }
    },
    watch: {           
      options: {
         livereload: 8001
      },
      scripts: {
        files: 'js/<%= pkg.name %>.js',
        tasks: ['uglify','copy'],
        options: {
          spawn: false
        }
      },
      css: {
	    files: ['sass/*.scss'],
	    tasks: ['sass']
      },
      html: {
	    files: ['_preview/*.html'],
	    tasks: []
      }
    },
    copy: {
	      main: {
		      files: [
		      	{expand: true, src: ['js/*'], dest: '_preview/', filter: 'isFile'},
		      	{expand: true, cwd: 'components/', src: ['**'], dest: '_preview/components/'}
		      ]
	      }
      }
  });


////////////////////////////////////
///////  PLUGINS
///////////////////////////////////

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
////////////////////////////////////
///////  TASKS
///////////////////////////////////
  grunt.registerTask('default', ['connect', 'watch', 'uglify', 'sass', 'copy', 'validation']);

};