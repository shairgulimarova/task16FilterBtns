

window.addEventListener("load", getApiData); 
 const productsInner = document.querySelector(".products__inner")

function getApiData(){
    fetch("db.json")
    .then ((res) => {
        return res.json();
    })
    .then ((data) =>{
        

        data.forEach((elem) =>{
            let cards = document.createElement("div"); 
            cards.classList = `cards ${elem.category}`;
            productsInner.appendChild(cards);
            
            let img = document.createElement("img"); 
            img.src = elem.img;
            img.className = "products__item-photo";
            cards.appendChild(img);

            let allInfo = document.createElement("div");
            allInfo.className = "products__item-info";
            cards.appendChild(allInfo); 

            let title = document.createElement("h3"); 
            title.className = "products__title"; 
            title.innerText = elem.title;
            allInfo.appendChild(title); 

            let price = document.createElement("p");
            price.innerText = elem.price +`сом`;
            price.className = "products__price"
            allInfo.appendChild(price); 

            let description = document.createElement("p");
            description.className = "products__item-text"; 
            description.innerText = elem.desc; 
            cards.appendChild(description);
            
             

             // filtering 
             const filteredCards = document.querySelectorAll('.cards');

             const btns = document.querySelector('.products__filters')
             
             
             btns.addEventListener('click', (event) => {

                if (event.target.tagName !== 'BUTTON') return false;
                let filterClass = event.target.dataset['filter'];
            
                filteredCards.forEach(elem => {
                    elem.classList.remove('hide');
                    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                        elem.classList.add('hide');
                    }
                });
            
            });
        })
        
       
    })
    .catch((error) =>{
        console.log(error);
    });
};