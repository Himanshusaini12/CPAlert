
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

var button=document.getElementsByTagName("button");

function func1(){
	var newlink=document.querySelector("link");
	newlink.href="style1.css";
	button[0].className="theme1 hide";
	button[1].className="theme2";
}

function func2(){
	var newlink=document.querySelector("link");
	newlink.href="style.css";
	button[0].className="theme1";
	button[1].className="theme2 hide";
}
