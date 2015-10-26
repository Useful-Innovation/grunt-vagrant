module.exports = function(grunt) {
    var cp  = require('child_process'),
        f   = require('util').format;

    grunt.registerTask('vagrant', 'Control vagrant with grunt', function() {
        var args = Array.prototype.slice.call(arguments);
        var config, cwd, execCommand, execFlag, execOptions,
            verb    = args[0],
            done    = this.async();

        config = grunt.config("vagrant");
        if(config && 'path' in config){
            cwd = config.path
        } else {
            cwd = process.cwd();
        }

        execFlag = grunt.option.flags()[0];
        execFlag && args.push(execFlag)
        execOptions = {
            cwd: cwd,
            stdio: [0,1,2]
        };

        process.stdin.setRawMode(false);
        childProcess = cp.spawn("vagrant",args,execOptions);

        childProcess.on('error', function (err) {
            process.stdin.setRawMode(true);
            grunt.log.error(f('Failed with: %s', err));
            done(false);
        });

        childProcess.on('exit', function(code) {
            process.stdin.setRawMode(true);
            grunt.verbose.ok(f('Exited with code: %d.', code));
            done(!code);
        });
    });

};
