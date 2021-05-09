function addCustomer(id, refreshCallback)
{
    arr.push(id);
    refreshCallback();  
}

function refreshCustomerList() {
    for(var i=0;i<arr.length;i++)
    document.write(arr[i]+"<br>");
}
var arr=[1,2];
addCustomer(3, refreshCustomerList);