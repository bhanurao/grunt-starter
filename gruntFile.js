module.exports = function(grunt) {
    'use strict';
    // run grunt as "Grunt watch"
    grunt.initConfig({

        jshint: {
            files: ['Gruntfile.js', 'src/*.js', 'test/*.js'],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }

        },

        watch: {
            scripts: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
        },

        concurrent: {

            options: {
                logConcurrentOutput: true
            },

            dev: {
                tasks: ['watch:scripts']
            }

        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('dev', ['concurrent:dev']);

};