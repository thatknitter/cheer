var q = QUnit;

q.test("split function", function(assert){
	var name = "Kimberly";
	var splitName = ["K","i","m","b","e","r","l","y"];
	
	assert.deepEqual(nameArray(name), splitName);
});

q.test("make the letter caps", function(assert){
	var name = "Kimberly";
	var splitName = ["K","i","m","b","e","r","l","y"];
	var capName = ["K", "I", "M", "B", "E", "R", "L", "Y"];
	
	assert.deepEqual(capitalName(splitName), capName);
});

q.test("run cheer", function(assert){
	var capitalName = ["B", "O", "B"];
	var cheerName = ["Give me a B", "Give me an o", "Give me a b"];
	
	assert.deepEqual(cheer(capitalName), cheerName);
});
