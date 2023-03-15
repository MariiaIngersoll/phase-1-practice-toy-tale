let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});



const toyCollectionDiv = document.querySelector("#toy-collection")


fetch("http://localhost:3000/toys")
.then(responce => responce.json())
.then((somedata) => {
  
  const arrayOfToyObjects  = somedata
  console.log(arrayOfToyObjects)

  arrayOfToyObjects.map( (eachToyObject) => {
     const divForToyCard = document.createElement("div")
           divForToyCard.className = "card"
     const h2ForToyCard = document.createElement("h2")
           h2ForToyCard.textContent = eachToyObject.name 
     const imageForToyCard = document.createElement("img")
           imageForToyCard.src = eachToyObject.image
           imageForToyCard.className = "toy-avatar" 
     const pTagForToyCard = document.createElement('p')
           pTagForToyCard.textContent = `${eachToyObject.likes} likes `
     const buttonForToyCard = document.createElement("button")
           buttonForToyCard.innerText = "Like <3"
           buttonForToyCard.className = "like-bnt"
           buttonForToyCard.id = eachToyObject.id
           buttonForToyCard.addEventListener("click", () => console.log("Increment those likes"))
     

    divForToyCard.append(
      h2ForToyCard , 
      imageForToyCard ,
      pTagForToyCard ,
      buttonForToyCard
    )
    toyCollectionDiv.append(divForToyCard)
  })
})

