var elementContainer = $("#generated-element-container")

$("#make-red-element").click(function() {  
  var newElement = $("<div>Hello!</div>")
  newElement.css({background: "red"})

  elementContainer.append(newElement)
})