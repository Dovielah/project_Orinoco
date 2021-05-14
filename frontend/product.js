
function getQueryParam(param, defaultValue = undefined) {
    location.search.substr(1)
            .split("&")
            .some(function(item) { // returns first occurence and stops
                return item.split("=")[0] == param && (defaultValue = item.split("=")[1], true)
            })
    return defaultValue;
}

// RECUPERER L'URL DU PRODUIT
// const id = document.querySelectorAll(".product__price");

let id = getQueryParam("id");
let oneCamera;
const projectInfo = document.querySelector(".product__infos");
const fetchOneCamera = async() => {
oneCamera = await fetch("http://localhost:3000/api/cameras/"+id).then(res => res.json());
};

const showCamera = async() => {
   await fetchOneCamera();

   projectInfo.innerHTML = (`

   <p class="product__title">${oneCamera.name}</p>
   <p class="product__description">${oneCamera.description}</p>
   <label for="lenses">Lentilles :</label>
   <select name="lenses" id="lenses">
       <option value="1">Option 1</option>
       <option value="2">Option 2</option>
       <option value="3">Option 3</option>
       <option value="4">Option 4</option>
   </select>
   <div>
       <p>
       ${oneCamera.price}
       </p>
       <button type="button">
           <i class="fas fa-cart-plus"></i>
       </button>
   </div>
   
   `);
};

showCamera();