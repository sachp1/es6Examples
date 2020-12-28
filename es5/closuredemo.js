
function test_v1() {
  var arr = ["one", "two", "three", "four", "five"];

  for (var i = 0; i < arr.length; i++) {
    
      console.log("Array value at index ", i, arr[i]);
    
  }
}
test_v1();













function test_v1() {
  var arr = ["one", "two", "three", "four", "five"];
 setTimeout(function() {
  for (var i = 0; i < arr.length; i++) {
   
      console.log("Array value at index ", i, arr[i]);
    }
  }), 1000;
}
test_v1();











function test_v2() {
  var arr = ["one", "two", "three", "four", "five"];

  for (var i = 0; i < arr.length; i++) {
    function inner() {
      var index = i;
      setTimeout(function() {
        console.log("Array value at index ", index, arr[index]);
      }, 1000);
    }
    inner();
  }
}
test_v2();




function test_v3() {
  var arr = ["one", "two", "three", "four", "five"];

  for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log("Array value at index ", i, arr[i]);
    }, 1000);
  }
}
test_v3();
