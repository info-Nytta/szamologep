function szamologep() {
	const gombok = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"];
    document.write("<table>"+
		"<tr>"+
            "<td><button onclick='torol()' id='c'>C</button></td>"+
            "<td colspan='3' ><input type='text' id='eredmeny' value='0' size='10' disabled></td>"+
        "</tr>");
			
	const sor=oszlop=4;
	for (i=0; i<sor; i++)
	{
		document.write("<tr>");
		let fgv="";
		for (j=0; j<oszlop; j++)
		{
			let ti=i+j+i*(oszlop-1);
			if (gombok[ti]=="=") fgv="szamol()";
			else fgv="ki(\""+gombok[ti]+"\")";
			document.write("<td><button onClick='"+fgv+"'>"+gombok[ti]+"</button></td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}

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

