let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");

dollar.onkeyup = function(){
    pound.value = dollar.value * 48.73;
}
pound.onkeyup = function(){
    dollar.value = pound.value * 0.0204;
}