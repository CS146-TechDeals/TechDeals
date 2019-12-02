function loadCart(){

    var temp = document.getElementById("TAB");
    if(localStorage.length != 0){
        for (var i = 0; i < localStorage.length; i++){
            // create new row and 2 cells for item and price
            var newRow = temp.insertRow(temp.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);

            //fill cells
            cell1.innerHTML = localStorage.key(i);
            cell2.innerHTML = localStorage[localStorage.key(i)];
        }
    }
    
}