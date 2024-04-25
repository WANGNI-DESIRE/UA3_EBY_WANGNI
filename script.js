document.getElementById("imc-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Récupérer les valeurs saisies
    let weight = parseFloat(document.getElementById("weight").value);
    let originalWeightUnit = document.getElementById("weight-unit").value;
    let height = parseFloat(document.getElementById("height").value);
    let originalHeightUnit = document.getElementById("height-unit").value;

    // Convertir le poids en kg si nécessaire
    if (originalWeightUnit === "lbs") {
        weight *= 0.453592;
    }

    // Convertir la taille en mètres si nécessaire
    if (originalHeightUnit === "feet") {
        height *= 0.3048;
    }

    // Calculer l'IMC
    let bmi = weight / (height * height);

    // Afficher le résultat de l'IMC
    let resultDiv = document.getElementById("result");
    let resultMessage;

    if (bmi < 18.5) {
        resultMessage = "<h2 style='color: red;'>Votre IMC est : " + bmi.toFixed(2) + "</h2>";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultMessage = "<h2 style='color: green;'>Votre IMC est : " + bmi.toFixed(2) + "</h2>";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultMessage = "<h2 style='color: orange;'>Votre IMC est : " + bmi.toFixed(2) + "</h2>";
    } else {
        resultMessage = "<h2 style='color: red;'>Votre IMC est : " + bmi.toFixed(2) + "</h2>";
    }

    resultDiv.innerHTML = resultMessage;

     // Ajouter le bouton avec un lien
     let buttonContainer = document.createElement("div");
     buttonContainer.innerHTML = "<button onclick='window.location.href=\"RA.html\"'>Visualisez virtuellement votre morphologie";
     resultDiv.appendChild(buttonContainer);

    // Afficher le tableau d'interprétation de l'IMC
    document.getElementById("imc-table").style.display = "block";
    document.getElementById("imc-table-title").style.display = "block";

    // Afficher la conversion du poids
    let weightConversion = "";
    if (originalWeightUnit === "lbs") {
        let weightInKg = weight * 0.453592;
        weightConversion = weight + " lbs" + " (" + weightInKg.toFixed(2) + " kg)";
    } else {
        weightConversion = weight + " kg";
    }
    document.getElementById("weight-conversion").innerText = weightConversion;

    // Afficher la conversion de la taille
    let heightConversion = "";
    if (originalHeightUnit === "feet") {
        let heightInMeters = height * 0.3048;
        heightConversion = height + " feet" + " (" + heightInMeters.toFixed(2) + " m)";
    } else {
        heightConversion = height + " m";
    }
    document.getElementById("height-conversion").innerText = heightConversion;
});

