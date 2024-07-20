fetch('./tips.json').then((response) => {
	response.json().then((result) => {
		for (var i = 0; i < result.length; i++) {
			let item = result[i];
			document.querySelector("#content").innerHTML += `<div class="box"><h3>نکته شماره ${i + 1}</h3><p${item.important ? ' class="blink_text"' :	''}>${item.content}</p></div><br/>`;
		}
	});
});