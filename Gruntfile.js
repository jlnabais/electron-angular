module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'app/app.css': 'css/global/main.scss'
        }
      }
    },
    jshint: ['Gruntfile.js', 'app/app.js']
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['jshint', 'sass']);
};
