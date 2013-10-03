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
          base: '_www',
          hostname: 'localhost',
          open: true,
          livereload: true
        }
      }
    },
    /*jshint: {
      all: ['js/**'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },*/
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        src: ['js/src/**/*.js'],
        dest: 'js/mosaicgrid.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    sass: {
      dist: {
        files: {
          '_www/css/mosaicgrid.css': 'sass/mosaicgrid.scss',
          '_www/css/media_queries.css': 'sass/media_queries.scss'
        }
      }
    },
    reload: {
        port: 9001,
        proxy: {
            host: 'localhost',
            port: 9001,
            base: '_www',
            files: ['*']
        }
    },
    validation: {
      options: {
        stoponerror: false
      },
      files: {
        src: ['_www/index.html']
      },
    },
    watch: {           
      options: {
        livereload: {
          port: 9001,
          base: '_www'
        }
      },
      scripts: {
        files: 'js/**/*',
        tasks: ['concat','copy','uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
	    files: ['sass/*.scss'],
	    tasks: ['sass']
      },
      html: {
	    files: ['_www/*.html'],
	    tasks: ['reload'/*,'validation'*/]
      }
    },
    copy: {
	      main: {
		      files: [
		      	//{expand: true, cwd: 'css/', src: ['**'], dest: '_www/css/'},
		      	{expand: true, src: ['js/*'], dest: '_www/', filter: 'isFile'},
		      	{expand: true, cwd: 'components/', src: ['**'], dest: '_www/components/'}
		      ]
	      }
      }
  });


////////////////////////////////////
///////  PLUGINS
///////////////////////////////////

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  
////////////////////////////////////
///////  TASKS
///////////////////////////////////
  grunt.registerTask('default', ['connect', 'concat', 'watch', 'uglify', 'sass', 'copy', 'validation', 'reload'/*,'jshint'*/ ]);

};