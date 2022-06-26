
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

//---------------------------codechef-------------------------------


fetch('https://kontests.net/api/v1/code_chef')
.then((alldata) => {
	return alldata.json();
})
.then((data) => {
		var displaydata = "";

		console.log(data)

        data.map((values)=>{
			{
			displaydata+= `<p>Name : ${values.name} <br/> 
			start_time : ${values.start_time} hours
			`;
		}
		});

		document.getElementById('codechef').innerHTML = displaydata;
})

//-----------------------------------leetcode------------------------------

fetch('https://kontests.net/api/v1/leet_code')
.then((alldata) => {
	return alldata.json();
})
.then((data) => {
		var displaydata = "";

		console.log(data)

        data.map((values)=>{
			{
			displaydata+= `<p>Name : ${values.name} <br/> 
			start_time : ${values.start_time} hours
			`;
		}
		});

		document.getElementById('leetcode').innerHTML = displaydata;
})
