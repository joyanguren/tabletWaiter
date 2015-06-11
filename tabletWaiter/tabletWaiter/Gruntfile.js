/// <vs />
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        //Open the package.json
        pkg: grunt.file.readJSON('package.json'),

        //The Concate Task Config
        concat: {
            dist: {
                options: {
                    separator: '\n\r',
                    banner: '/*\nConcatinated JS file \n' +
                            'Author: Jon \n' +
                            'Created Date: <%= grunt.template.today("yyyy-mm-dd") %>' +
                            '\n */ \n'
                },
                src: ['AngularApp/Controllers/addCategoryController.js',
                    'AngularApp/Controllers/addItemController.js',
                    'AngularApp/Controllers/categoryListController.js'],
                dest: 'AngularApp/AllAngularLogic.js'
            }
        },

        //Task for Minification Config
        uglify: {
            build: {
                files: {
                    'AngularApp/build.js': ['AngularApp/Controllers/*.js'],
                    'AngularApp/services.js': ['AngularApp/Services/*.js']
                }
            }
        }
    });

    //The Required Plug-Ins whihc will be loaded for Task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //array of tasks
    grunt.registerTask('default', ['concat', 'uglify']);
};