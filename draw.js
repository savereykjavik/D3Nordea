//checks if the user pressed "enter", calls function citysearch
function search(ele) {
    if(event.keyCode == 13) {
      citysearch();
    }
};

// create object to store the JSON in
var alldata = {"result": []};

//get the JSON file with jquery
$(function(){
    $.getJSON('mockup.json',function(data){
        console.log('success');
        //Push into global variable alldata
        for (var i = data.result.length - 1; i >= 0; i--) {
          alldata.result.push(data.result[i]);
        };

        console.log(alldata);
        console.log("All transaction data collected successfully")
    })

    .error(function(){
        console.log('error');
    });

});

// create a variable to store result for a particular city
var cityobj = {result: []};

//create a function that runs when you request a specific city
var citysearch = function() {
  //clear the array cityobj so that any old data is taken away
  while(cityobj.result.length > 0) {
    cityobj.result.pop();
  }
  //if a transaction matches the input city, store that transaction in cityobj
  var city = document.getElementById("input").value;
  for (var i = alldata.result.length - 1; i >= 0; i--) {
    if (city == alldata.result[i].where) {
      cityobj.result.push(alldata.result[i]);
    }
  };
  console.log(cityobj);
  console.log(city + " city transaction data collected successfully")

  drawcity(cityobj);
};


//---------------------------------- D3----------------------------------------//

//create a palette
// var palette = {
//     "lightgray": "#819090",
//     "gray": "#536870",
//     "darkgray": "#475B62",
//     "teal": "#008080",
//     "lightteal": "#00a7a7"
//   };

var drawcity = function(cityobj) { 


}

