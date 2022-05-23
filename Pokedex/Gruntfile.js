module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['less/style.less'],
                    compress: true,
                    compact: true
                },
                files: {
                  'dist/css/style.min.css': 'less/style.less'
                },
                
              },
        },
        uglify: {
            build: {
                files: {
                    'dist/js/test.min.js': ['utils/*.js','js/*.js'],
                }
            }
        },
        clean: {
            options: {
              force: true,
            },
            files: ['dist']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');  
    grunt.registerTask('default', ['clean','uglify','less']);
}