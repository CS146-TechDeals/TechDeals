function tab1Totab2 (){
    
    localStorage.clear();

    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    checkboxes = document.getElementsByName("check-tab1");

    for (var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked){

            //create new row for table2
            var newRow = table2.insertRow(table2.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            
            //fill new row with table 1 elements
            cell1.innerHTML = table1.rows[i+2].cells[0].innerHTML; 
            cell2.innerHTML = table1.rows[i+2].cells[1].innerHTML;
            cell3.innerHTML = table1.rows[i+2].cells[2].innerHTML;
            cell4.innerHTML = "<input type= 'checkbox' name='check-tab2'>";
            
            //remove the transferred rows from table 1
            var index = table1.rows[i+2].rowIndex;
            table1.deleteRow(index);
            i--;
            
        }
    }

    for (var i = 0; i < table2.rows.length-2; i++) {
        localStorage.setItem(table2.rows[i+2].cells[0].innerText , table2.rows[i+2].cells[2].innerHTML);
    }

}




function tab2Totab1 (){

    localStorage.clear();

    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    checkboxes = document.getElementsByName("check-tab2");

    for (var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked){

            //create new row for table1
            var newRow = table1.insertRow(table1.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            
            //fill new row with table2 elements
            cell1.innerHTML = table2.rows[i+2].cells[0].innerHTML; 
            cell2.innerHTML = table2.rows[i+2].cells[1].innerHTML;
            cell3.innerHTML = table2.rows[i+2].cells[2].innerHTML;
            cell4.innerHTML = "<input type= 'checkbox' name='check-tab1'>";
            
            //remove the transferred rows from table 2
            var index = table2.rows[i+2].rowIndex;
            table2.deleteRow(index);
            i--;
            
        }
    }

    for (var i = 0; i < table2.rows.length-2; i++) {
        localStorage.setItem(table2.rows[i+2].cells[0].innerText , table2.rows[i+2].cells[2].innerHTML);
    }
}

function addListing() {
    var itemName = document.getElementById("IName").value;
    var description = document.getElementById("desc").value;
    var price = document.getElementById("price").value;

    var table = document.getElementById("table1");

    var newRow = table.insertRow(2);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = itemName;
    cell2.innerHTML = description;
    cell3.innerHTML = price;
    cell4.innerHTML = "<input type= 'checkbox' name='check-tab1'>";

    document.getElementById("IName").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("price").value = "";
}