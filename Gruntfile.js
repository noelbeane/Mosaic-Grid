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
          base: 'test',
          hostname: 'localhost',
          open: 'http://localhost:9001',
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
    //uglify: {
      //options: {
       // banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      //},
     // dist: {
      //  files: {
     //     'js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
     //   }
     // }
   // },
    sass: {
      dist: {
        files: {
          'test/css/base.css': 'sass/base.scss',
          'test/css/layout.css': 'sass/layout.scss',
          'test/css/module.css': 'sass/module.scss',
          'test/css/state.css': 'sass/state.scss',
          'test/css/theme.css': 'sass/theme.scss'
        }
      }
    },
    reload: {
        port: 9001,
        proxy: {
            host: 'localhost',
            port: 9001,
            base: 'test',
            files: ['*']
        }
    },
    validation: {
      options: {
        stoponerror: false
      },
      files: {
        src: ['test/index.html']
      },
    },
    watch: {           
      options: {
        livereload: true
      },
      scripts: {
        files: 'js/**/*',
        tasks: ['copy'/*,'uglify'*/],
        /*options: {
          spawn: false,
        }*/
      },
      css: {
	      files: ['sass/*.scss'],
	      tasks: ['sass']
      },
      html: {
	      files: ['test/*.html'],
	      tasks: ['reload'/*,'validation'*/]
      }
    },
    copy: {
	      main: {
		      files: [
		      	{expand: true, src: ['js/*'], dest: 'test/', filter: 'isFile'},
		      	{expand: true, cwd: 'components/', src: ['**'], dest: 'test/components/'}
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
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  
////////////////////////////////////
///////  TASKS
///////////////////////////////////
  grunt.registerTask('default', ['connect', /*'concat',*/ 'watch', 'uglify', 'sass', 'copy', 'validation', 'reload'/*,'jshint'*/ ]);

};