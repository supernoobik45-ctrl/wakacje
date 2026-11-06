const DATA_WAKACJI = new Date(2027, 1, 0);
/**
* Dopisuje 0;
*@param {number} liczba;
*@returns {number} licbe z zerem;
*@author Ananich Yaraslau
*/
function DopiszZero(liczba){
    if(liczba < 10){
        return "0" + liczba;
    }
    return String(liczba);
}
/**
* Dopisuje 0;
*@param {number} liczba;
*@returns {number} licbe z zerem;
*@author Ananich Yaraslau;
*/
function pokazZegar(){
    const teraz = new Date();
    const godziny = DopiszZero(teraz.getHours());
    const minuty = DopiszZero(teraz.getMinutes());
    const sekundy = DopiszZero(teraz.getSeconds());
    document.getElementById("zegar").textContent = godziny + ":" + minuty + ":" + sekundy;
}
/**
* Pokazuje date;
*@author Ananich Yaraslau;
*/
function pokazDate(){
    const teraz = new Date();
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");
}
/**
* Oblicza ilosc dni do daty koncowej;
*@param {number} dataOd data poczatkowa;
*@param {number} dataDo data koncowa;
*@returns {number} ile dni zostalo;
*@author Ananich Yaraslau;
*/
function ileDniDo(dataOd, DataDo){
    const ronicaMs = DataDo - dataOd;
    const MS_W_DNIU = 1000*60*60*24;
    return Math.ceil(ronicaMs/MS_W_DNIU);
}
/**
* pokazuje dni;
*@author Ananich Yaraslau;
*/
function pokazDni(){
    document.getElementById("dni").textContent = ileDniDo(new Date(), DATA_WAKACJI);
}
/**
* pokazuje dzien tygodnia;
*@author Ananich Yaraslau;
*/
function dzienTygodnia(){
    const teraz = new Date();
    document.getElementById("dzienTygodnia").textContent = teraz.toLocaleDateString("pl-PL",{weekday:"long"});
}
pokazDate();
pokazZegar();
pokazDni();
dzienTygodnia();
setInterval(pokazZegar, 1000);