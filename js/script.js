fetch("https://striveschool-api.herokuapp.com/books")
  .then(responseObj => responseObj.json())
  .then(books => {
    console.log(books);

    const grid = document.getElementById("book-container");
    grid.innerHTML = "";

    books.forEach(books => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
        <div class="card">
            <div class="card-body"> 
            <img src="${books.img}" class="card-img-top" alt="copertina">
            <span class="badge bg-dark">${books.asin}</span >
                <h5 class="card-title">${books.title}</h5>
                <p class="card-text fw-bold">${books.price}</p>
                <button type="button" class="btn btn-primary">Aggiungi al carrello🛒</button>
                <button id="btn" type="button" class="btn btn-danger">Scarta ❌</button>
            </div>
        </div>`;

      const discard = col.querySelector("#btn");
      discard.onclick = () => {
        col.remove();
      };
      grid.appendChild(col);
    });
  })
  .catch(error => console.log("CATCH", error));
