async function generate(url) {
	let res = await fetch(url);
	let data = await res.json();
	putResults(data);
}
function putResults({ activity, participants, price, type }) {
	let div = document.getElementById("showResults");
	div.innerHTML = null;

	var act = document.createElement("p");
	act.innerText = "Activity -" + activity;

	var par = document.createElement("p");
	par.innerText = "Participants -" + participants;
	var pri = document.createElement("p");
	pri.innerText = "Price -" + price;
	var typ = document.createElement("p");
	typ.innerText = "Type -" + type;

	div.append(act, par, pri, typ);
}

function generateResults() {
	let div = document.getElementById("showResults");
	div.setAttribute("style", "display:block");
	div.innerText = "...LOADING";
	var url = "https://www.boredapi.com/api/activity/?";
	let num = document.getElementById("participants").value;
	if (num != "") url += "&participants=" + num;

	let type = document.getElementById("type").value;
	if (type != "Select") url += "&type=" + type;

	let accessibility = document.getElementById("accessibility").value;
	if (accessibility != "")
		url += "&minaccessibility=0&maxaccessibility=" + accessibility;
	generate(url);
}
