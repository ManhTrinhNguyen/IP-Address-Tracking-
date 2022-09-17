const ipAddress = document.querySelector(".ip")
const timeZone = document.querySelector(".time-zone")
const locations = document.querySelector(".locations")
const isp = document.querySelector(".isp")
const input = document.querySelector("input")
const btn = document.querySelector(".btn")

// Click btn to apply user input
btn.addEventListener("click", (event) => {

    event.preventDefault()
    //user input
    const userInput = input.value 
    // url
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_P6DFEpSSvaMpK81lVu2yZHCOtXSMm&ipAddress=${userInput}`
   
    // Get data IP address from GEO ipify

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        ipAddress.textContent = data.ip
        timeZone.textContent = data.location.timezone
        locations.textContent = `${data.location.city}, ${data.location.region}`
        isp.textContent = data.isp

        const lat = data.location.lat
        const lon = data.location.lng
         // LEAF Map

        let map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 50,
        attribution: '© OpenStreetMap'
        }).addTo(map);

        let marker = L.marker([lat, lon]).addTo(map);

        })

       input.value = ""

      
})

// Submit user input by Enter

    input.addEventListener("keyup", (event) => {
        event.preventDefault();
        if(event.key === "Enter") {
            const userInput = input.value 
            // url
            const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_P6DFEpSSvaMpK81lVu2yZHCOtXSMm&ipAddress=${userInput}`
           
            // Get data IP address from GEO ipify
        
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                ipAddress.textContent = data.ip
                timeZone.textContent = data.location.timezone
                locations.textContent = `${data.location.city}, ${data.location.region}`
                isp.textContent = data.isp

                const lat = data.location.lat
                const lon = data.location.lng

                // LEAF Map

                let map = L.map('map').setView([lat, lon], 13);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 50,
                attribution: '© OpenStreetMap'
                }).addTo(map);

                let marker = L.marker([lat, lon]).addTo(map);

                
                })
        
               input.value = ""
        }
    }
    )









