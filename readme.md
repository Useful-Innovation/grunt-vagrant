# grunt-vagrant
Control vagrant with grunt

## Installation

 - Add the dependency to package.json:

    `"grunt-vagrant": "git+ssh://git@github.com/Useful-Innovation/grunt-vagrant"`

 - Load in Gruntfile:

    `grunt.loadNpmTasks('grunt-vagrant');`

## Configuration
### path
The path to your Vagrantfile. Default to `.`.
```javascript
grunt.initConfig({
    vagrant: {
        path: '../'
    }
});
```


## Usage
A new grunt task `vagrant` is now provided. Vagrant commands are appended as a subtask: `grunt vagrant:up`. Any flags passed from command line is also pushed along to vagrant. For example `grunt vagrant:reload --provision`. You can of course include it in another task aswell:
```javascript
grunt.registerTask('dev', ['do:stuff','vagrant:up']);
```