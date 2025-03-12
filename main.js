async function getPizza() {
   
        const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
        const data = await response.json();


        const result = data.recipes.map(function (ele) {
            return `
            <div class='ele'>
                <h2>${ele.title}</h2>
                <img src="${ele.image_url}" alt="${ele.title}">
            </div>
            `;
        })

        document.querySelector(".user").innerHTML = result;

   
}

getPizza();
