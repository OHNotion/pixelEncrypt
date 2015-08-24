function CtoD(string) {
  var arr = [], strLength = string.length;
  var squareSide = (Math.ceil(Math.sqrt(strLength)));
  for (var i = 0; i < strLength; i++) {
    arr[i] = string.charCodeAt(i);
  }
  var rem = strLength%3;
  if (rem == 1) {
    arr[strLength] = 0;
    arr[strLength+1] = 0;
  } else if (rem == 2) {
    arr[strLength] = 0;
  }
  return arr;
}

function createDiv(side,pos,col) {
  var newDiv = document.createElement("div");
  var container = document.getElementById("container");
  side.toString();
  var pos1 = pos[0].toString();
  var pos2 = pos[1].toString();
  var col1 = col[0].toString();
  var col2 = col[1].toString();
  var col3 = col[2].toString();
  newDiv.style.width = side+"px";
  newDiv.style.height = side+"px";
  newDiv.style.position = "absolute";
  newDiv.style.top = pos1+"px";
  newDiv.style.left = pos2+"px";
  newDiv.style.backgroundColor = "rgb("+col[0]+","+col[1]+","+col[2]+")"
  container.appendChild(newDiv);
}

function ColorEncrypt(string) {
  var arr = CtoD(string);
  var arrLength = arr.length;
  var noOfSquares = arrLength/3;
  var squaresEachSide = Math.ceil(Math.sqrt(noOfSquares));
  var side = 200/squaresEachSide;
  var i,j=0,k=0, col1, col2, col3;
  var pos = [0,0];
  for (i = 0; i < arrLength; i = i + 3) {
    col1 = arr[i];
    col2 = arr[i+1];
    col3 = arr[i+2];
    pos = [k,j*side];
    createDiv(side,pos,[col1,col2,col3]);
    j++;
    if (j == squaresEachSide) {
      j = 0;
      k = k + side
    }
  }
}

document.getElementById("encrypt").onclick = function() {
  var string = document.getElementById("textarea").childNodes[1].value;
  console.log(string);
  ColorEncrypt(string);
}

$(document).ready(function() {
  $("#encrypt").mousedown(function() {
    $(this).css("background-color", "#005388");
  });
  $("#encrypt").mouseup(function() {
    $(this).css("background-color", "#0099FF");
  });
  $("#reset").mousedown(function() {
    $(this).css("background-color", "#C30000");
  });
  $("#reset").mouseup(function() {
    $(this).css("background-color", "red");
  });
  $("#reset").click(function() {
    $("#container").empty();
  });
});
