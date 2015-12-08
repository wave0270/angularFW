# Angular JS Project

#### Requirement:
Node.js
npm
git

#### Installation:
    > npm -g install grunt-cli
    > npm -g install bower
    > npm -g install yo
    > npm -g install generator-karma
    > npm -g install generator-angular
    > npm install protractor grunt-protractor-runner --save-dev
    > npm install generator-env-config
    > npm install grunt-replace --save-dev
    > npm install
    > bower install

#### Configuration file:
    For Development: 
        -> ./config/environments/development.json   
    For QA: 
        -> ./config/environments/qa.json
    For Staging: 
        -> ./config/environments/staging.json     
    For Production: 
        -> ./config/environments/production.json    
    
#### Start a connect web server: Development (default) | Production
    Development environment
        > grunt serve
    QA environment
        > grunt serve:qa
    Staging environment
        > grunt serve:staging
    Production environment
        > grunt serve:production

#### Build distribution: Development (default) | Production
    Development environment
        > grunt build
    QA environment
        > grunt build:qa
    Staging environment
        > grunt build:staging
    Production environment
        > grunt build:production


#### How to create a project
    1. Create a ng-app folder for all your codelab work:
        > mkdir ng-app && cd ng-app
        > yo angular
        Configure your generator
            Some generators will also provide optional settings to customize your app with common developer libraries to speed up the initial setup of your development environment.
            The AngularJS generator provides options to use Sass (with Compass) and include Twitter Bootstrap. For this codelab, we won't use Sass but will use Bootstrap. Enter n then y respectively to these options.

    2. Environment Specific Configuration:
        Yeoman Generators
            To install generator-env-config from npm, run:
            > npm install -g generator-env-config

            To install grunt-replace from npm, run:
            > npm install grunt-replace --save-dev

            Finally, initiate the generator:
            > yo env-config

            To create an environment config with a specific name:
            > yo env-config staging
            > yo env-config production
        AngularJS Config
            To create an AngularJS config:
            > yo env-config:angular config


        Modify Grunfile.js

        add replace task:

            replace: {
                    development: {
                        options: {
                            patterns: [
                                {
                                    json: grunt.file.readJSON('./config/environments/development.json')
                                }
                            ]
                        },
                        files: [
                            {
                                expand: true,
                                flatten: true,
                                src: ['./config/config.js'],
                                dest: '<%= yeoman.app %>/scripts/services/'
                            }
                        ]
                    },
                    staging: {
                        options: {
                            patterns: [
                                {
                                    json: grunt.file.readJSON('./config/environments/staging.json')
                                }
                            ]
                        },
                        ...
                    },
                    production: {
                        options: {
                            patterns: [
                                {
                                    json: grunt.file.readJSON('./config/environments/production.json')
                                }
                            ]
                        },
                        ...
                    }
                }

        modify serve task:

            grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
                ...
                grunt.task.run([
                    ...
                    'replace:production',
                    'watch'
                ]);
            });

        add two new tasks:

            grunt.registerTask('staging', [
                'replace:staging',
                // run other command
                'clean:server',
                'wiredep',
                'concurrent:server',
                'autoprefixer',
                'connect:livereload',
                'watch'
            ]);

            grunt.registerTask('production', [
                'replace:production',
                // run other command
                'clean:server',
                'wiredep',
                'concurrent:server',
                'autoprefixer',
                'connect:livereload',
                'watch'
            ]);

    3. Running: Development (default) | Staging | Production
        > grunt serve | staging | production
    
    4. Build: Development (default) | Staging | Production

        
        > grunt build | staging | production
