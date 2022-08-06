function generateTable(){
    let table = document.getElementById('tableValue').value;
    document.getElementById('h3').innerHTML="";
    for (let index = 1; index <= 5; index++){
        document.getElementById('h3').innerHTML+="<h1>" + table +  "x" + index + "=" + index * table +"</h1>";
 for (let index = 1; index <= 10; index++)
                document.getElementById('h3').innerHTML+="<h1>" + table +  "x" + index + "=" + index * table +"</h1>";}}
