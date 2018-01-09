function calcKMI() {

    var weight = Number(document.getElementById("weight").value);
    var height = Number(document.getElementById("height").value);
    var finalHeight = height / 100;

    if (weight <= 20 || height <= 0) {
        alert("Patikrinkite duomenų tikslumą. Minimalus svoris 21 kg. Ūgis negali būti neigiamas skaičius");
    } else {

        var KMI = (weight / (finalHeight * 2));
        var KMIfinal = Math.round(KMI * 100) / 100;
        document.getElementById("kmi_index").innerHTML = KMIfinal;
    }



    if (KMIfinal < 18.5) {
        document.getElementById("diagnosis").innerHTML = "Jūsų svoris per mažas!";
        document.getElementById("diagnosis").setAttribute("style", "color:red");
    }
    if (KMIfinal >= 18.5 && KMIfinal <= 25) {
        document.getElementById("diagnosis").innerHTML = "Puiku! Jūsų svoris yra normalus.";
        document.getElementById("diagnosis").setAttribute("style", "color:green");
    }


    if (KMIfinal >= 25 && KMIfinal <= 30) {
        document.getElementById("diagnosis").innerHTML = "Jūsų svoris yra ribinis, stenkitės, kad nedidėtų.";
        document.getElementById("diagnosis").setAttribute("style", "color:black");
    }
    if (KMIfinal > 30) {
        document.getElementById("diagnosis").innerHTML = "Jūs turite viršsvorio. Būtina mažinti.";
        document.getElementById("diagnosis").setAttribute("style", "color:red");

    }
}
