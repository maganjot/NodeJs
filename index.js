
var path = require('path');
var express = require('express')
var mustacheExpress = require('mustache-express');
var app = express()

// var express = require('express')
//   , sm = require('sitemap');
 
// var app = express()
//   , sitemap = sm.createSitemap ({
//       hostname: 'http://www.stackdatalabs.com/',
//       cacheTime: 600000,  // 600 sec cache period 
//       urls: [
//         { url: '',  changefreq: 'daily', priority: 0.3 },
//       ]
//     });
// var defaultRouter =  express.Router();
// defaultRouter.get('/', function(request, response, next) {
//     response.render('index', { title: 'Express' });
// });
// defaultRouter.get('/derp', function(request, response, next) {
//     response.send('You done derped');
// });
// app.use('/', defaultRouter);

// var sitemap = require('express-sitemap');
// sitemap = sitemap();
// sitemap.generate4(app);
// sitemap.toFile();

 
// app.get('/sitemap.xml', function(req, res) {
//   res.header('Content-Type', 'application/xml');
//   res.send( sitemap.toString() );
// });
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'static')));

app.engine('html', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/templates');

app.get('/', function (req, res) {
    res.render('index.ejs');
});
app.get('/company/who-we-are', function (req, res) {
    res.render('about-us.ejs');
});
app.get('/contact-us/enroll-apply-industrial-training-chandigarh-hyderabad', function (req, res) {
    res.render('apply.ejs');
});
app.get('/certification/cloud-computing-bigdata-data-science-java-python', function (req, res) {
    res.render('certifications.ejs');
});
app.get('/enterprise-training', function (req, res) {
    res.render('enterprise.ejs');
});

app.get('/locations', function (req, res) {
    res.render('locations.ejs');
});
app.get('/chandigarh', function (req, res) {
    res.render('chandigarh.ejs');
});
app.get('/hyderbad', function (req, res) {
    res.render('hyderabad.ejs');
});



app.get('/training', function (req, res) {
    res.render('programs.ejs');
});

app.get('/training/bigdata-hadoop-spark-training', function (req, res) {
    res.render('programs-bigdata.ejs');
});


app.get('/training/cloud-computing-openstack-amazon-azure-devops', function (req, res) {
    res.render('programs-cloud.ejs');
});


app.get('/training/data-science-machine-learning-python-ai-nlp', function (req, res) {
    res.render('programs-datascience.ejs');
});



app.get('/training/devops-ansible-automation-ci-chef-puppet', function (req, res) {
    res.render('programs-devops.ejs');
});


app.get('/training/data-visualization-javascript-angular.js-tableau', function (req, res) {
    res.render('programs-data-visualization.ejs');
});

app.get('/training/internet-of-things-embedded-sensors-platform-iot', function (req, res) {
    res.render('programs-iot.ejs');
});



app.get('/datascience-iot', function (req, res) {
    res.render('training_big-data_data-science_iot.ejs');
});

app.get('/contact-us/career-insights-jobs-placement-bigdata-cloud-iot', function (req, res) {
    res.render('know-more.ejs');
});

app.get('/contact-us/register-internship-bigdata-cloud-iot', function (req, res) {
    res.render('reach-us.ejs');
});

app.get('/training/big-data', function (req, res) {
    res.render('big-data-course-detail.ejs');
});

app.get('/training/cloud-computing', function (req, res) {
    res.render('cloud-computing-course-detail.ejs');
});

app.get('/training/data-science-iot', function (req, res) {
    res.render('data-science-course.ejs');
});

app.get('/training/devops', function (req, res) {
    res.render('devops-course.ejs');
});

app.get('/training/data-visualization', function (req, res) {
    res.render('datavisualization-course.ejs');
});

app.get('/training/bussiness-intelligence', function (req, res) {
    res.render('bussiness-course.ejs');
});

app.get('/enterprise-training/training-finishing-school-cloud-bigdata-data-science-iot', function (req, res) {
    res.render('learn.ejs');
});

app.get('/enterprise-training/learning-institue-internship-chandigarh', function (req, res) {
    res.render('develop.ejs');
});

app.get('/placement-career-jobs-companies-bigdata-cloud', function (req, res) {
    res.render('career.ejs');
});

app.get('/enterprise-training/cloud-computing-labs-analytics-platform', function (req, res) {
    res.render('explore.ejs');
});

app.get('/partners', function (req, res) {
    res.render('partners.ejs');
});

app.get('/company/alumini', function (req, res) {
    res.render('alumini.ejs');
});

app.get('/cloud-computing', function (req, res) {
    res.render('cloud-computing.ejs');
});

app.get('/data-science', function (req, res) {
    res.render('data-science.ejs');
});

app.get('/internet-of-things', function (req, res) {
    res.render('Internet-of-things.ejs');
});

app.get('/big-data', function (req, res) {
    res.render('big-data.ejs');
});

app.get('/devops', function (req, res) {
    res.render('docker.ejs');
});

app.get('/python-data-science-web-scrapping-analytics', function (req, res) {
    res.render('python.ejs');
});

app.get('/apache-spark-storm-flink-training-chandigarh', function (req, res) {
    res.render('apache-spark.ejs');
});

app.get('/python-aritifical-intelligence-deep-learning-training', function (req, res) {
    res.render('artificial-intelligence.ejs');
});

app.get('/devops-containers-kubernetes', function (req, res) {
    res.render('kubernetes.ejs');
});

app.get('/data-science-machine-learning-training-chandigarh', function (req, res) {
    res.render('machine-learning.ejs');
});

app.get('/team-industry-experts-faculty-instructors', function (req, res) {
    res.render('team.ejs');
});

//redirects

app.get('/Internet-of-things.html', function (req, res) {
    res.redirect(301, '/internet-of-things')
});

app.get('/register-for-internship-training.html', function (req, res) {
    res.redirect(301, '/contact-us/register-internship-bigdata-cloud-iot')
});

app.get('/data-science.html', function (req, res) {
    res.redirect(301, '/data-science')
});

app.get('/about-us.html', function (req, res) {
    res.redirect(301, '/company/who-we-are')
});

app.get('/program-courses.html', function (req, res) {
    res.redirect(301, '/training')
});

app.get('/iot-smart-sensors-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/Training/Internet-of-things-embedded-Sensors-Platform-IoT')
});

app.get('/java-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/bigdata-hadoop-spark-training')
});

app.get('/big-data.html', function (req, res) {
    res.redirect(301, '/big-data')
});
app.get('/partners.html', function (req, res) {
    res.redirect(301, '/partners')
});
app.get('/data-science-machine-learning-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/iot-robotics-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/training-finishing-school-cloud-bigdata-data-science-iot', function (req, res) {
    res.redirect(301, '/training')
});
app.get('/cloud-amazon-aws-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/cloud-openstack-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/bigdata-analytics-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/training/cloud-Computing-amazon-google', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/who-we-are', function (req, res) {
    res.redirect(301, '/company/who-we-are')
});
app.get('/training-data', function (req, res) {
    res.redirect(301, '/training')
});
app.get('/learning-institue-internship-chandigarh', function (req, res) {
    res.redirect(301, '/training')
});
app.get('/training/open-stack-virtualization-chandigarh', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/data-science-artificial-intelligence-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/python-training', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/data-science-r-programming-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/training/machine-learning-python-chandigarh', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/training/data-science-essentials-chandigarh', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/devops-continous-delivery-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/devops')
});
app.get('/kubernetes-training', function (req, res) {
    res.redirect(301, '/training/devops')
});
app.get('/cloud-computing-course-detail', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/alumini', function (req, res) {
    res.redirect(301, '/company/alumini')
});
app.get('/training/big-data-java-scala-chandigarh', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/cloud-computing-labs-analytics-platform', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/training/apache-spark-python-chandigarh', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/blog/', function (req, res) {
    res.redirect(301, '/')
});
app.get('/acadmyfordatabase/', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/arcadian-lab.html', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/application-web-development.html', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/register-for-workshop.html', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/register-industr', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/academy-for-application/', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});

app.get('/iot-devices-integration%20-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/register-industrial-training.html', function (req, res) {
    res.redirect(301, '/team-industry-experts-faculty-instructors')
});
app.get('/cloud-computing-blogs.html', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/arcadianlearning-courses.html', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/industry-experience-instructor.html', function (req, res) {
    res.redirect(301, '/team-industry-experts-faculty-instructors')
});
app.get('/telecom-4g-lte.html', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/training/cloud-computing/', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/about-us', function (req, res) {
    res.redirect(301, '/company/who-we-are')
});
app.get('/programs', function (req, res) {
    res.redirect(301, '/training')
});
app.get('/programs-bigdata', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/programs-datascience', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/apply', function (req, res) {
    res.redirect(301, '/contact-us/enroll-apply-industrial-training-chandigarh-hyderabad')
});
app.get('/arcadianlearning-bigdata-training.html', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/reach-us', function (req, res) {
    res.redirect(301, '/contact-us/enroll-apply-industrial-training-chandigarh-hyderabad')
});
app.get('/career-insights-jobs-placement-bigdata-cloud-iot', function (req, res) {
    res.redirect(301, '/placement-career-jobs-companies-bigdata-cloud')
});
app.get('/docker-training', function (req, res) {
    res.redirect(301, '/training/devops')
});
app.get('/programs-devops', function (req, res) {
    res.redirect(301, '/training/devops')
});
app.get('/blog.html', function (req, res) {
    res.redirect(301, '/')
});
app.get('/training/telecom-4g-lte/', function (req, res) {
    res.redirect(301, '/training')
});
app.get('/register-internship-bigdata-cloud-iot', function (req, res) {
    res.redirect(301, '/contact-us/register-internship-bigdata-cloud-iot')
});
app.get('/register-industrial-training/', function (req, res) {
    res.redirect(301, '/contact-us/register-internship-bigdata-cloud-iot')
});
app.get('/certifications', function (req, res) {
    res.redirect(301, '/certification/cloud-computing-bigdata-data-science-java-python')
});
app.get('/training/big-data/', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/team', function (req, res) {
    res.redirect(301, '/team-industry-experts-faculty-instructors')
});
app.get('/programs-cloud', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/artificial-intelligence-training', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/machine-learning-training', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/apache-spark-training', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/academy-for-web/', function (req, res) {
    res.redirect(301, '/certification/cloud-computing-bigdata-data-science-java-python')
});
app.get('/programs-data-visualization', function (req, res) {
    res.redirect(301, '/training/data-visualization')
});
app.get('/iot.html', function (req, res) {
    res.redirect(301, '/training/data-science-iot')
});
app.get('/industrial-training/', function (req, res) {
    res.redirect(301, '/training')
});
app.get('/training/', function (req, res) {
    res.redirect(301, '/training')
});
app.get('/cloud-computing-private-cloud-public-cloud/', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/certification.html', function (req, res) {
    res.redirect(301, '/certification/cloud-computing-bigdata-data-science-java-python')
});
app.get('/cloud-computing-hadoop-platform.html', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/academy-for-cloudsecurity-2/', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/4glte/', function (req, res) {
    res.redirect(301, '/training/devops')
});
app.get('/academy-for-wireless-comms/', function (req, res) {
    res.redirect(301, '/training/devops')
});
app.get('/html5/', function (req, res) {
    res.redirect(301, '/training/data-visualization')
});
app.get('/bigdata-hadoop-training.html', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/tag/six-month-industrial-training/', function (req, res) {
    res.redirect(301, '/team-industry-experts-faculty-instructors')
});
app.get('/arcadianlearning-courses', function (req, res) {
    res.redirect(301, '/training')
});
app.get('/for-winter-training/', function (req, res) {
    res.redirect(301, '/team-industry-experts-faculty-instructors')
});
app.get('/securitythreat/', function (req, res) {
    res.redirect(301, '/training/devops')
});
app.get('/training/application-web-development/', function (req, res) {
    res.redirect(301, '/training/devops')
});
app.get('/bigdata-hadoop-administration-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/devops')
});
app.get('/certification-courses.html', function (req, res) {
    res.redirect(301, '/certification/cloud-computing-bigdata-data-science-java-python')
});
app.get('/bigdata-spark-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/big-data')
});
app.get('/iot-raspberry-pi-chandigarh.html', function (req, res) {
    res.redirect(301, '/training/data-visualization')
});
app.get('/cloud-computing.html', function (req, res) {
    res.redirect(301, '/training/cloud-computing')
});
app.get('/mobile/enroll-apply-industrial-training-chandigarh-hyderabad', function (req, res) {
    res.redirect(301, '/contact-us/enroll-apply-industrial-training-chandigarh-hyderabad')
});
app.get('/college-workshop.html', function (req, res) {
    res.redirect(301, '/contact-us/enroll-apply-industrial-training-chandigarh-hyderabad')
});
app.get('/Profile.html', function (req, res) {
    res.redirect(301, '/company/who-we-are')
});
app.get('/apply.html', function (req, res) {
    res.redirect(301, '/contact-us/enroll-apply-industrial-training-chandigarh-hyderabad')
});
app.get('/design-uiux.html', function (req, res) {
    res.redirect(301, '/training/data-visualization')
});
app.get('/enroll-apply-industrial-training-chandigarh-hyderabad', function (req, res) {
    res.redirect(301, '/contact-us/enroll-apply-industrial-training-chandigarh-hyderabad')
});
app.get('/data-science-nlp-training-chandigarh.html', function (req, res) {
    res.redirect(301, '/datascience-iot')
});

app.listen(3001);
