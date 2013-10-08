$(function() {

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
		return (_.sortBy(results,function(x){return x.score})).reverse() 
	}

	function appendHTML(array) {


		var count = 1
		for (var i = 0; i < data["data"].length; i++) {
			$(".users").append('<tr><td>'+count+'</td><td>'+((array[i].score)* 100).toFixed(2)+'</td><td>'+array[i].username+'</td><td>'+array[i].fullName+'</td><td>'+array[i].region+'</td>'+
				'<td>'+array[i].race+'</td><td>'+array[i].wins+'</td><td>'+array[i].losses+'</td></tr>')
			count++
		}
	}

	
	appendHTML(parseData(data["data"]))


})




