document.addEventListener("DOMContentLoaded", function(){
  var $form = document.querySelector('form');
  var $name = $form.querySelector("input[type='text']"); 
  $form.addEventListener("submit", function(event){
    event.preventDefault();
    
  });
    
});

function nameArray(name){
	//array=[0]
	return name.split('');
}

function capitalName(splitName){
	return _.map(splitName, function(item, index){
		return item.toUpperCase();
	});
}

function cheer(list, items){
	var grammarA = ["B", "C", "D", "G", "J", "K", "P", "Q", "T", "U", "V", "W", "Y", "Z"];
	var grammarAn = ["A", "E", "F", "H", "I", "L", "M", "N", "O", "R", "S", "X"];
	var gimme = "Give me";
	for(var i = capitalName().length-1; i--;){
	if (_.intersection(capitalName[0], grammarA){
		return gimme + " a " + _.first.capitalName;
		capitalName.splice(i, 1);
	} else {
		return gimme + " an " + _.first.capitalName;
		capitalName.splice(i, 1);
	}
	}
}
