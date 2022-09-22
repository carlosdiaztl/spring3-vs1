const favorite = document.getElementsByClassName("btn btn--favorite");
const showDetails = document.getElementsByClassName("btn btn--details");
const containerItems = document.getElementById("items");
const verTodo = document.getElementById("vertodo");
const ocultar = document.getElementById("ocultar");
const tipodeinmueble = document.getElementById("tipodeinmueble");
const locations = document.getElementById("locations");
const btnSearch = document.getElementById("btnsearch");
let favoritos = JSON.parse(localStorage.getItem("favoritospage")) || [];
let mostrarArray= JSON.parse(localStorage.getItem("detallespage")) || [];



console.log(btnSearch);



// const filterArray = (word,item) => {
//   dataFiltered = data.filter((inmuebles) =>
//     inmuebles.type.toLowerCase().includes(word.toLowerCase())
//   );
//   console.log(dataFiltered);
// };


const API_URL = "http://localhost:3000";

// coger info

//General
let busqueda=[]
let inmuebles = [];

const getData = async () => {
  try {
    let response = await fetch(`${API_URL}/arriendos`);
    let data = await response.json();
    inmuebles = data;
    items.classList.remove("hidden");
    renderCards();
  } catch (error) {
    console.log(error);
  }
};

const getData2 = async () => {
  try {
    response = await fetch(`${API_URL}/arriendos`);
    data = await response.json();
    busqueda = data;
    items.classList.remove("hidden");
  } catch (error) {
    console.log(error);
  }
};
getData2()
const filterArray = (word,frase) => {
  dataFiltered = busqueda.filter((inmuebles) =>
    inmuebles.type.includes(word) && inmuebles.location.includes(frase)
  );
  console.log(dataFiltered);
};
const handleSearch = () => {
  let query= tipodeinmueble.value;
  let query2=locations.value
  console.log(query,query2)
  getData2()
filterArray(query,query2)
renderCards2()
  }
btnSearch.addEventListener("click", handleSearch);

const renderCards = () => {
  containerItems.innerHTML = "";
  inmuebles.forEach((item) => {
    containerItems.innerHTML += `
        <article class="card">
        <figure>
        <img src="${item.image}" alt="propertys" class="card__image">
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

const renderCards2 = () => {
  containerItems.innerHTML = "";
  dataFiltered.forEach((item) => {
    containerItems.innerHTML += `
        <article class="card">
        <figure>
        <img src="${item.image}" alt="propertys" class="card__image">
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
const showForm = () => {
  containerForm.classList.remove("hidden");
};
const ocultarItems = () => {
  items.classList.add("hidden");
};
const showSearch = () => {
  containerForm.classList.remove("hidden");
};

items.classList.remove("hidden");
ocultar.addEventListener("click", ocultarItems);
verTodo.addEventListener("click", getData);


document.addEventListener("click", ({ target }) => {
  if (target.classList.contains("btn--favorite")) {
    const savefav = inmuebles.find(
      (item) => item.id == target.getAttribute("name")
    );
    const elementExist = favoritos.some((item) => item.id === savefav.id);
    console.log(elementExist);
    if (elementExist == false) {
      favoritos.push(savefav);
      localStorage.setItem("favoritospage", JSON.stringify(favoritos));
    }
  }
});

document.addEventListener("click", ({ target }) => {
  if (target.classList.contains("btn--details")) {
    let seeDetails = inmuebles.find(
      (item) => item.id == target.getAttribute("name")
    );
    const elementExis = mostrarArray.some((item) => item.id === seeDetails.id);
    console.log(elementExis);
      mostrarArray=[seeDetails];
      localStorage.setItem("detallespage", JSON.stringify(mostrarArray));
      location.replace("/pages/mostrar.html")
  }
});



btnSearch.addEventListener("click", handleSearch)

;
/*
const getDatos = async () => {
    try {
      let response = await fetch(`${API_URL}/arriendos`);
      let dati = await response.json();
      datos=dati
    } catch (error) {
      console.log(error);
    }
  };
let datos=[]
datos=localStorage.setItem(dati)
getDatos()
*/





//Get elements General
// const btnNew = document.getElementById('btnNew');
// const containerForm = document.getElementById('containerForm');
// const form = document.getElementById('form');

//Get elements FORM
// const branchInput = document.getElementsByName('branch')[0];
// const referenceInput = document.getElementsByName('reference')[0];
// const modelInput = document.getElementsByName('model')[0];
// const kilometersInput = document.getElementsByName('kilometers')[0];
// const imageInput = document.getElementsByName('image')[0];

// let isEdit = false;
// let indexEdit;

// btnNew.addEventListener('click', showForm);

//     // get elements DOM
//     const btnDeletes = document.getElementsByClassName('btn--delete');
//     const btnEdits = document.getElementsByClassName('btn--edit');

//     //Listeners
//     Array.from(btnDeletes).forEach((element, index) => {
//         element.addEventListener('click', () => {
//             handleDelete(index);
//         })
//     });

//     Array.from(btnEdits).forEach((element, index) => {
//         element.addEventListener('click', () => {
//             handleEdit(index);
//         })
//     });
// }
// verTodo.addEventListener('click',renderCards())

// //Functions events
// const showForm = () => {
//     containerForm.classList.remove('hidden');
// };

// const handleSave = (e) => {
//     e.preventDefault();
//     let newMotorCycle = {
//         branch: branchInput.value,
//         reference: referenceInput.value,
//         model: modelInput.value,
//         kilometers: kilometersInput.value,
//         image: imageInput.value,
//     };
//     motorCycles.push(newMotorCycle);
//     localStorage.setItem('products', JSON.stringify(motorCycles));
//     //Show cards
//     renderCards();
//     //Clean Inputs
//     branchInput.value = '';
//     referenceInput.value = '';
//     modelInput.value = '';
//     kilometersInput.value = '';
//     imageInput.value = '';
//     //Hide Form
//     containerForm.classList.add('hidden');
// };

// const handleUpdate = (e) => {
//     e.preventDefault();
//     let newMotorCycle = {
//         branch: branchInput.value,
//         reference: referenceInput.value,
//         model: modelInput.value,
//         kilometers: kilometersInput.value,
//         image: imageInput.value,
//     };
//     motorCycles[indexEdit] = newMotorCycle;
//     //Update LocalStorage
//     localStorage.setItem('products', JSON.stringify(motorCycles));
//     //Show cards
//     renderCards();
//     //Clean Inputs
//     branchInput.value = '';
//     referenceInput.value = '';
//     modelInput.value = '';
//     kilometersInput.value = '';
//     imageInput.value = '';
//     //Hide Form
//     containerForm.classList.add('hidden');
// }

// const handleDelete = (index) => {
//     //Delete from array
//     motorCycles.splice(index, 1);
//     //Render Data
//     renderCards();
//     //Update LocalStorage
//     localStorage.setItem('products', JSON.stringify(motorCycles));
// }

// const handleEdit = (index) => {
//     isEdit = true;
//     indexEdit = index;
//     showForm();
//     const product = motorCycles[index];
//     branchInput.value = product.branch;
//     referenceInput.value = product.reference;
//     modelInput.value = product.model;
//     kilometersInput.value = product.kilometers;
//     imageInput.value = product.image;
// }

// // //Listeners Events
// btnNew.addEventListener('click', showForm);
// form.addEventListener('submit', (e) => {
//     if (isEdit) {
//         handleUpdate(e);
//     }else {
//         handleSave(e);
//     }
// });
