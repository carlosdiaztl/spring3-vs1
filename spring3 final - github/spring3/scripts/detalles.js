let mostrarArray= JSON.parse(localStorage.getItem("detallespage")) || [];
console.log(mostrarArray);
const containerCards=document.getElementsByClassName('items')[0];
console.log(containerCards);
const renderCards = () => {
    containerCards.innerHTML = "";
    mostrarArray.forEach((item) => {
      containerCards.innerHTML += `
          <article class="cartas">
          <figure>
          <img src="${item.image}" alt="propertys" class="cards__image">
          </figure>
          <div class="card__description">
          <div class="description__name">
          <p>type:</p>
          <p>location:</p>
          <p>price:</p>
          <p>space:</p>
          <p>parking:</p>
          <p>status:</p>
          </div>
          <div class="description__details">
          <p>${item.type}</p>
          <p>${item.location}</p>
          <p>${item.price}</p>
          <p>${item.space}</p>
          <p>${item.park}</p>
          <p>${item.status}</p>
                      </div>
                      </div>
                      <div class="actions">
                      <button class="btn btn--details" name="${item.id}">show details</button>
                      <button class="btn btn--favorite" name="${item.id}">favorite</button>
                      </div>
                      </article>
                      `;
    });
  };
  renderCards()
  