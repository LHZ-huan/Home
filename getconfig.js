var getConfig = function(callback) {
	 $.ajax({
			 url: "configdata.php",
			 type: "get",
			 success: function(data) {
			 callback(data);
	 	}
	 })
}
console.log(getConfig)
module.exports = getConfig;