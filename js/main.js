(function($) {});
function contactSubmit(event) {
	event.preventDefault();

	$("#submit-button").val("Submitting");
	$("#submit-button").attr("disabled", true);

	var formData = new FormData();

	formData.append("name", $("#firstName").val());
	formData.append("email", $("#email").val());
	formData.append("phone", $("#phone").val());
	formData.append("org", $("#org").val());
	formData.append("message", $("#message").val());

	$.ajax({
		url: "/contactApi.php",
		data: formData,
		processData: false,
		contentType: false,
		type: "POST",
		success: function(data) {
			toastr.success(
				"We will get back to you at the earliest!",
				"Thank you for contacting us"
			);
			$("#contact-form").trigger("reset");
			$("#submit-button").val("Submit");
			$("#submit-button").attr("disabled", false);
		}
	});
}

function quickEnqSubmit(event) {
	event.preventDefault();

	var formData = new FormData();
	formData.append("email", $("#quick-email").val());

	$.ajax({
		url: "/quickEnqApi.php",
		data: formData,
		processData: false,
		contentType: false,
		type: "POST",
		success: function(data) {}
  });
  
	toastr.success(
		" We will get back to you at the earliest!",
		"Thank you for contacting us"
	);
	$(".quick-enq").trigger("reset");
}
