var colour1 = "";
var colour2 = "";

var row0 = ["red", "green", "yellow", "pink", "orange", "red"];
var row1 = ["pink", "green", "yellow", "blue", "blue", "orange"];

var rows = [row0, row1];

rows.forEach((row, rowIndex) => {
  var rowContent = '<div class="row' + rowIndex + '">';

  row.forEach((colour, colIndex) => {
    console.log({ rowIndex, colIndex, colour });
    rowContent +=
      '<p class="card colour-' +
      colour +
      '">' +
      rowIndex +
      "" +
      colIndex +
      "</p>";
  });

  rowContent += "</div>";

  $("body").append(rowContent);
});

$(".card").click((event) => {
  var card = event.target;

  console.log({ card });

  // find the colour of the card we clicked on
  // from the class list

  var classes = card.className.split(" ");
  console.log({ classes });

  var colour = classes
    .find((classes) => {
      return classes.startsWith("colour-");
    })
    .replace("colour-", "");

  console.log({ colour });

  $(card).css("background-color", colour);

  // ----------------------------------------------------

  // check colour 1
  // if colour 1 is not set, set it!

  if (colour1 === "") {
    console.log("setting colour 1", colour);
    colour1 = colour;
  }

  //  else , that means we've just clicked on the second card
  //  and we need to check colour 1 versus colour 2
  else {
    console.log("setting colour 2", colour);
    colour2 = colour;

    // if they are the same
    if (colour1 === colour2) {
      console.log("colours are the same!", colour);

      //  - reset the colour variables! so that the _next click_ checks colour 1 again
      colour1 = "";
      colour2 = "";
    }

    // else, they are not the same.. so reset the board!
    else {
      console.log("colours are NOT the same!", { colour1, colour2 });

      $(".card").css("background-color", "white");
    }
  }
});
