
fetch('https://codeforces.com/api/contest.list')
.then((alldata) => {
	return alldata.json();
})
.then((data) => {
		var displaydata = "";

		data.result.map((values)=>{
			if(values.phase == "BEFORE"){
			displaydata+= `
				<div class="cards">
					 ${values.name}
					<p class="content"> Duration : ${values.durationSeconds/3600} hours</p>
				</div>`;
		}
		});

		document.getElementById('codeforces').innerHTML += displaydata;
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
			displaydata+= `
			<div class="cards">
					 ${values.name}
					<p class="content"> Start Time : ${values.start_time} hours</p>
				</div>`;
		}
		});

		document.getElementById('codechef').innerHTML += displaydata;
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
			displaydata+= `
			<div class="cards">
					 ${values.name}
					<p class="content"> Start Time : ${values.start_time} hours</p>
				</div>`;
		}
		});

		document.getElementById('leetcode').innerHTML += displaydata;
})
