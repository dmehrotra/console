
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass:{
            dev:{
                options:{
                    outputStyle:'expanded'
                },
                files:{
                    'css/styles.css' : 'src/scss/application.scss'
                }
            }
        },
        jshint: {
          files: ['Gruntfile.js', '', 'test/**/*.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },
        watch:{
            js:{
                files:['src/js/*.js'],
                tasks:['uglify:dev', 'jshint']
            },
            css:{
                files:['src/scss/application.scss'],
                tasks:['sass:dev']
            },
        },
        uglify: {
            options: {
                sourceMap: true
            },
            dev:{
                options:{
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: {
                    'js/app.min.js': ['src/js/vendor/jquery-1.7.1.min.js','src/js/vendor/jquery-mousewheel.min.js','src/js/vendor/terminal.js','src/js/vendor/dterm.js','src/js/vendor/underscore.min.js','src/js/utilities/*.js', 'src/js/*.js']
                }
            },
            build: {
                files: {
                    'js/app.min.js': ['src/js/vendor/*.js', 'src/js/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default',['uglify:build']);
    grunt.registerTask('dev',['uglify:dev', 'sass:dev']);

};
