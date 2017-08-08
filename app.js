$("#btn-submit").on("click", function(event){
	event.preventDefault();

	var employeeName = $("#employee-name").val().trim();
	var role = $("#role").val().trim();
	var startYear = $("#start-year").val().trim();
	var salary = $("#salary").val().trim();

console.log(employeeName, startYear, salary);


$("#employee-table").append("<tr><td id='name'>" + employeeName + "</td>" + "<td id='role'>" + role + "</td>" + "<td id='year'>" + startYear + "</td>" + "<td id=>" + salary + "</td></tr>");

})

