function doAnimateShow() {
		box.style.top = "-10px" ;
		box.style.left = "25%" ;
	}

function addNew(){
	// title.innerText="聖誕樹"; 
	var n = height.value ;
	var what = type1.value ;
	show.innerHTML = " ";
	for(var j=1;j<=n;j++){
		for(var a=n-j;a>0;a--){
			show.innerHTML += '<span style="color:white">'+what+'</span>';
		}
		for(var i=1;i<=j;i+=0.5){
			if(j%2 != 0){

			show.innerHTML += '<span style="color:red">'+what+'</span>';
			}
			else{
			show.innerHTML += '<span style="color:green">'+what+'</span>';	
			}
		}
		show.innerHTML+= "<br>";
		}
	} //end of addNew()

function clear() {	
	show.innerHTML = " ";

}
