function ki(ertek){
    if (document.getElementById('eredmeny').value=='0') 
		document.getElementById('eredmeny').value='';
	document.getElementById('eredmeny').value += ertek;
}

function szamol(){
    let x = document.getElementById('eredmeny').value;
    document.getElementById('eredmeny').value = eval(x);
}

function torol(){
    document.getElementById('eredmeny').value = '0';
}

