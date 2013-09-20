'use strict';

module.exports = function(grunt) {

 
////////////////////////////////////
///////  PROJECT CONFIG
///////////////////////////////////
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    //qunit: {
      //all: ['**/*.html']
    //},
    /*connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost'
        }
      }
    },*/
    open: {
      /*server: {
        path: 'http://localhost:<%= connect.server.options.port %>'
      }*/
      file: {
	    path: '.www/index.html'
      }
    },
    jshint: {
      all: ['js/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
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
          'css/mosaicgrid.css': 'sass/mosaicgrid.scss',
          'css/media_queries.css': 'sass/media_queries.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: 'js/**/*.js',
        tasks: ['jshint'],
        options: {
          spawn: false,
        }
      },
      css: {
	      files: ['sass/*.scss'],
	      tasks: ['sass'],
      },
      options: {
        livereload: 8000
      },
    }
  });


////////////////////////////////////
///////  PLUGINS
///////////////////////////////////

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-open');
  
  
////////////////////////////////////
///////  TASKS
///////////////////////////////////
  grunt.registerTask('default', ['connect', 'jshint', 'concat', 'watch', /*'qunit',*/ 'uglify', 'sass', 'open']);

};