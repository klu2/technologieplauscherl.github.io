'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		watch: {
			sass: {
				files: ['_sass/{,*}*.scss'],
				tasks: ['sass']
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/main.css' : '_sass/main.scss'
				}
			}
		}
	});

	grunt.registerTask('default', [
		'sass'
	]);

	grunt.registerTask('obacht', [
		'sass',
		'watch'
	]);
};
