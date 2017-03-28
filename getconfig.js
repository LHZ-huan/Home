var getConfig = function(callback) {
	 $.ajax({
		 url: "../configdata.php",
		 type: "get",
		 success: function(data) {
		 callback(data);
	 }
	 })
}
 
module.exports = getConfig;