"use string"

let author = document.querySelectorAll(".author");
let title = document.querySelectorAll(".title");


// Заполнение элементов контентом
function fillElement(inputThread) {

    let titleCount = title.length;
    let i = 0;
    while (i < titleCount) {
        title[i].innerHTML = inputThread[i].title;
        i++;
    }

    let authorCount = author.length;
    let j = 0;
    while (j < authorCount) {
        author[j].innerHTML = inputThread[j].author;
        j++;
    }

}

//Fetch

fetch('http://localhost:8000/books/')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(books => {

        fillElement(books);
    });


//Поиск



let input = document.getElementById("search-field").oninput = function () {
    let val = this.value.trim();
    let collItems = document.querySelectorAll(".col");

    if (val != "") {
        collItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1)
            // elem.innerText.toLowerCase().indexOf(val)  
            {
                elem.classList.add("hide");
            } else {
                elem.classList.remove("hide");
            }
        });

    } else {
        collItems.forEach(function (elem) {
            elem.classList.add("hide");
        });
    }
}


//Показать все книги

let collItems = document.querySelectorAll('.col');
let showAllBtn = document.querySelector(".search-all-btn");
let searchItem = document.querySelector(".search");


showAllBtn.onclick = function () {

    for (let i = 0; i < collItems.length; i++) {
        collItems[i].classList.remove('hide');
    }
    searchItem.classList.add("up");


};