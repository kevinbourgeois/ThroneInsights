const { filter } = require('d3-array');
const runes = require('runes')

const filtersContainer = document.querySelector("#filters-container");
console.log(document);

let filters = [];
filtersContainer.addEventListener("click", (e) => {
    
  

  if (e.target.classList.contains('filter')) {
      
      if (!filters.includes(e.target.value)) {
        e.target.classList.add("active");
        filters.push(e.target.value);

    
    } else {
        e.target.classList.remove("active");
        //enlève le filtre de la liste
        filters = filters.filter((filter) => filter !== e.target.value);
    }
  }
  applyFilters(filters);
    
});

const applyFilters = (data) => {
    const symbols = document.querySelectorAll(".symbol");
    
  if (data.length !== 0) {

    symbols.forEach((symbol) => {
        const emoji = runes(symbol.innerHTML)[0]
        if (!data.includes(emoji)) {
            symbol.style.display = "none";
        } else {
            symbol.style.display = "block";
        }
    });
  } else {
    symbols.forEach((symbol) => {
        symbol.style.display = "block";
    });
  }
}
