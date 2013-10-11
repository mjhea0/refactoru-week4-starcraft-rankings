$(function() {

	//** parse data */
	function parseData(allData) {
		var results = []
		_.each((allData), function(element) {
			results.push({
				username:element[0].replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""), 
				fullName:element[1], 
				region:element[2], 
				race:element[3],
				wins:element[4],
				losses:element[5],
				score:((element[4]/(element[5]+element[4])))
			})
		})
		return results
	}

	//** append data to html */
	function appendHTML(array) {
		var count = 1
		for (var i = 0; i < data["data"].length; i++) {
			$(".users").append('<tr><td>'+((array[i].score)* 100).toFixed(2)+'</td><td>'+array[i].username+'</td><td>'+array[i].fullName+'</td><td>'+array[i].region+'</td>'+
				'<td>'+array[i].race+'</td><td>'+array[i].wins+'</td><td>'+array[i].losses+'</td></tr>')
			count++
		}
	}

	//** sort the data via event handler*/
	function attachEventHandlers(array) {
		$('.sort').click(function(){
			$('.users').empty()
			var sort = ($(this).text().toLowerCase())
			var test = (_.sortBy(array,function(x){return x[sort]})).reverse()
			appendHTML(test)
		})
	}

	//** run code */
	var parsedData = parseData(data["data"])
	attachEventHandlers(parsedData)

})


