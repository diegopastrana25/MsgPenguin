async function fetchPhoneJSON(){
    try{
        // Fetch the JSON data from the api
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        const select = document.getElementById("country");
        
        select.innerHTML='<option disabled selected>Select a country</option>';
        // Compare the countries by their name and then sort them
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
        countries.forEach(country => {
            // Check if the country has a valid idd and root property
            if(!country.idd || !country.idd.root) return;

            const code = country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '');
            const name = country.name.common;

            const option = document.createElement("option");
            // we remove the + because whatsapp does not accept it
            option.value = code.replace("+", "");
            option.textContent = `${name} (${code})`;
            select.appendChild(option);
        });
        /* extra feature
        if the user has already used it previously, we save it in the localStorage for maintain it when he reconnect it*/
        const saved = localStorage.getItem("lastCountryCode");
        if (saved){
            select.value = saved;
        }
    }catch(error){
        console.error("Error loading countries:", error);
        const select = document.getElementById("country");
        select.innerHTML='<option disabled selected>Error loading countries</option>';
    }
}

fetchPhoneJSON();

