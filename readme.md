# grunt-vagrant
Control vagrant with grunt

## Installation

 - Add the dependency to package.json:

    `"grunt-vagrant": "git+ssh://git@github.com/Useful-Innovation/grunt-vagrant"`

 - Load in Gruntfile:

    `grunt.loadNpmTasks('grunt-vagrant');`

## Usage
A new grunt task `vagrant` will is now available. Vagrant commands are appended as a subtask: `grunt vagrant:up`. Any flags passed from command line is also pushed along to vagrant. For example `grunt vagrant:reload --provision`.