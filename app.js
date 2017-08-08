
  var config = {
    apiKey: "AIzaSyAJ3FMcY2HzfbleApLzUTA2feFIOfL-Wvs",
    authDomain: "ahmer-and-dains-project.firebaseapp.com",
    databaseURL: "https://ahmer-and-dains-project.firebaseio.com",
    projectId: "ahmer-and-dains-project",
    storageBucket: "ahmer-and-dains-project.appspot.com",
    messagingSenderId: "409363391438"
  };
  firebase.initializeApp(config);
	var employeeName;
	var role;
	var startYear;
	var salary;
	var totalSalary;

  var database = firebase.database();

  // database.ref().on("value", function(snapshot){

  // 	employeeName = snapshot.val().employeeName;
  // 	role = snapshot.val().role;
  // 	startYear = snapshot.val().startYear;
  // 	salary = snapshot.val().salary;
  // 	console.log(employeeName, startYear, salary, role);
  // })
timeDiff = function(start,end) {
  	return moment(new Date(end)).diff(new Date(start), 'months', true);
};
$("#btn-submit").on("click", function(event){

	event.preventDefault();
	today = moment().format("DD-MM-YYYY")
	startYear = $("#start-year").val().trim();
	timeBetween = Math.floor(timeDiff(startYear, today));
	employeeName = $("#employee-name").val().trim();
	role = $("#employee-role").val().trim();
	salary = $("#salary").val().trim();
	totalSalary = timeBetween * salary;

	database.ref().push({
		name: employeeName,
		role: role,
		year: startYear,
		salary: salary,
		total: totalSalary,

	});

console.log(employeeName, startYear, salary);



$(".table").append("<tr><td>" + employeeName + "</td><td>" + role + "</td><td>" + 
	startYear + "</td><td>" + salary + "</td><td>" + totalSalary + "</td></tr>")


});







