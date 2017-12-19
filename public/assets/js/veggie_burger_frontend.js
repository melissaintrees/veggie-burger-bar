$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");

    var newEatenState = {
      devoured: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/veggieburgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed foodform to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newVB = {
      veggieburger_name: $("#vb_id").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/veggieburgers", {
      type: "POST",
      data: newVB
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-veggieburger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/veggieburgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted vb", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
