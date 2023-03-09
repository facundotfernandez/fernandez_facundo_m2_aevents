import { data } from "./data.js";

function init_CategoriesAndEvents() {

    let EventsGroup = []
    let CategoriesGroup = []
    let CategoriesHTMLSection = ""

    data.events.forEach(event => {

        if (!CategoriesGroup.includes(event.category)) {


            CategoriesGroup.push(event.category)

            CategoriesHTMLSection += `
                <input type="checkbox" class="btn-check" id="btncheck_${event._id}" value="${event.category}">
                <label class="btn categories-category" for="btncheck_${event._id}">${event.category}</label>
            `;

        };

        EventsGroup.push(event)

    });

    
    document.getElementById("NavMainCategories").innerHTML = CategoriesHTMLSection
    updateEventsShown(EventsGroup)

};

function updateEventsShown(EventsAvailable) {

    let EventsHTMLSection = "";
    let CategoriesChecked = [];
    let SearchInput = document.getElementById("SearchInput").value.toLowerCase();

    EventsAvailable.forEach(event => {

        if ((CategoriesChecked.length == 0 || CategoriesChecked.includes(event.category)) && (SearchInput.length == 0 || (event.name.toLowerCase()).includes(SearchInput))) {

            EventsHTMLSection += `
                <div class="col">
                    <div class="card h-100 w-100">
                        <img src="${event.image}" class="card-img p-2 rounded-5" alt="${event.name} Event Image">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <p class="card-title fs-4">${event.name}</p>
                            <p class="card-text">${event.description}</p>
                            <div class="card-footer d-flex justify-content-between">
                                <p class="card-text my-0 py-1 px-2"">$ ${event.price}</p>
                                <a class="card-text see-more py-1 px-2 rounded-3" href="./details.html" id="${event._id}_DetailsId"">See more</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

        };
      
    });

    document.getElementById("CardMainGroup").innerHTML = EventsHTMLSection

};

init_CategoriesAndEvents()