fetch("https://www.boredapi.com/api/activity/?")
	.then((data) => data.json())
	.then((res) => putResults(res));

function putResults({ activity, participants, price, type }) {
	let div = document.getElementById("showResults");
	div.setAttribute("style", "display:block");
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
