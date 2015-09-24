module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			scss: {
				dist: {
					options: {
						style: 'compressed'
					}, // options
					files: {
						'styles.css': ['styles.scss']
					} // files
				} // dist
			}, // scss

			uglify: {
				dist: {
					files: {
						'script.js': ['*.js']
					} // files
				} // dist
			}, // uglify

			watch: {
				options: {
					livereload: 6464
				}, // options
				scripts: {
					files: ['*.js'],
					tasks: ['uglify']
				}, // scripts
				html: {
					files: ['*.html']
				}, // html
				css: {
					files: ['*.scss'],
					tasks: ['scss']
				} // css
			} // watch
	}) // initConfig
	grunt.registerTask('default',['watch']);
} // grunt-wrapper