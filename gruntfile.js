module.exports = function(grunt) {
	
	// Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		autoprefixer: {			
			single_file: {
				src: 'src/scss/style.css',
				dest: 'css/style.css'
		    }
		},
		uglify:{
			build:{
				src: 'src/js/*.js',
				dest: 'js/script.min.js'
			},
			dev: {
				options: {
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: 'src/js/*.js',
				dest: 'js/script.min.js'
			}
		},
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'src/scss/style.css':'src/scss/style.scss'
				}
			},
			build: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'src/scss/style.css':'src/scss/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['src/scss/**/*.scss'],
				tasks: ['sass:dev']
			},
			styles: {
				files: ['src/scss/style.css'],
				tasks: ['autoprefixer']	
			},
			js: {
				files: ['src/js/*.js'],
				tasks: ['uglify: build']
			}
		}
	});
	
	// Load the plugins
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	
	// Register task(s)
	grunt.registerTask('default', ['uglify:dev','sass:dev']);
	grunt.registerTask('build', ['uglify:build','sass:build']);
	
}