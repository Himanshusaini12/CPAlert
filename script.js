
fetch('https://codeforces.com/api/contest.list')
.then((alldata) => {
	return alldata.json();
})
.then((data) => {
		var displaydata = "";

		data.result.map((values)=>{
			if(values.phase == "BEFORE"){
			displaydata+= `<p>Name : ${values.name} 
			Duration : ${values.durationSeconds/3600} hours
			`;
		}
		});

		document.getElementById('codeforces').innerHTML = displaydata;
})
