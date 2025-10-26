module.exports =  function(grunt){
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        sass:{
			dist:{
				files:{
					'build/styles/main.css':'src/styles/main.scss'
				}	
			}
		}
	})
    grunt.loadNpmTasks('sass');
	grunt.loadNpmTasks('grunt-contrib-sass')
    
    grunt.registerTask('default', ['sass']);
}

