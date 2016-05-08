module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      styles: {
        files: ['css/global/main.scss'],
        tasks: ['sass']
      }
    },
    sass: {
      options: {
		       sourceMap: true
	    },
	    dist: {
		      files: {
			         'app/app.css': 'css/global/main.scss'
		      }
      }
    },
    jshint: {
      files: [
        'Gruntfile.js',
        'app/app.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
