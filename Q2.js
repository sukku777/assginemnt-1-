let d=prompt("Enter your Date of Birth(DD/Month/YYYY):");
document.write(d);
let diff=2021-parseInt(d.substring(d.length-4));
document.write(diff)
if(diff>=18 && diff<=44){
    location.replace("https://selfregistration.cowin.gov.in");
}
else{
    document.write("<br>You are not eligible for taking vaccine");
}