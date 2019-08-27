var contenedor=document.getElementById("caja");
console.log(contenedor);
const request = new XMLHttpRequest();
request.addEventListener('readystatechange',(e)=>{
	if(e.target.readyState===4){
		const datos=JSON.parse(e.target.responseText);
		console.log(datos);

	for(var i=0;i<=datos.length-1;i++){
		contenedor.append(datos[i].name);
	}
	contenedor.style.color="blue";
	contenedor.style.lineHeight="1.5";
	contenedor.style.paddingLeft="8px";
	}
});
request.open('GET','https://jsonplaceholder.typicode.com/users');
request.send();
