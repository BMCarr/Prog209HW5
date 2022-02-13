let bookArray = [];
let selectedType = "";

let BookObject = function (title, author, year, publisher, vendor, estValue, condition) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.publisher = publisher;
    this.vendor = vendor;
    this.estValue = estValue;
    this.condition = condition;
}

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {

        bookArray.push(new BookObject(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("year").value,
        document.getElementById("publisher").value, document.getElementById("vendor").value, document.getElementById("estValue").value, selectedType));
        console.log(bookArray);
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
        document.getElementById("publisher").value = "";
        document.getElementById("vendor").value = "";
        document.getElementById("estValue").value = "";
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

});