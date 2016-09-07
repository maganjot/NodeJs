
// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/index.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about-us.html',
				controller  : 'aboutController'
			})

			// route for the apply page
			.when('/apply', {
				templateUrl : 'pages/apply.html',
				controller  : 'applyController'
			});


			// route for the program page
			.when('/programs_main' , {

				templateUrl : 'pages/programs.html',
				controller  : 'programs_mainController'
			});

			// route for the program-bigdata page
			.when('/programs-bigdata' , {
				templateUrl :'pages/programs-bigdata.html',
				controller : 'programs-bigdataController'

			});

			// route for the program-cloud page
			.when('/programs-cloud' , {
				templateUrl :'pages/programs-cloud.html',
				controller : 'programs-cloudController'
			});

			// route for the program-datascience page
			.when('/programs-datascience' , {
				templateUrl :'pages/programs-datascience.html',
				controller : 'programs-datascienceController'
			});

			// route for the programs-data-visualization page
			.when('/programs-data-visualization' , {
				templateUrl : 'pages/programs-data-visualization.html' ,
				controller : 'programs-data-visualizationController'
			});

			// route for the programs-devops page
			.when('/programs-devops' , {
				templateUrl : 'pages/programs-devops.html' ,
				controller : 'programs-devopsController'
			});

			// route for the programs-iot page
			.when('/programs-iot' ,{
				templateUrl : 'pages/programs-iot.html' ,
				controller : 'programs-iotController'
			});

			// route for the big-data page
			.when('/big-data', {
				templateUrl : 'pages/big-data.html' ,
				controller : 'big-dataController'
			});

			// route for the cloud-computing page
			.when('/cloud-computing' , {
				templateUrl : 'pages/cloud-computing.html' ,
				controller : 'cloud-computingController'
			});

			// route for the data-science page
			.when('/data-science' , {
				templateUrl : 'pages/data-science.html' ,
				controller : 'data-scienceController'
			});

			// route for the Internet-of-things page
			.when('/Internet-of-things' , {
				templateUrl : 'pages/Internet-of-things.html' ,
				controller : 'Internet-of-thingsController'
			});

			// route for the certifications page
			.when('/certifications' , {
				templateUrl : 'pages/certifications.html' ,
				controller : 'certificationsController'
			});

	});

