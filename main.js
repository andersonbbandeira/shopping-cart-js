basket = [];

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    } else {
        search.item += 1;
    }

    //console.log(basket);
    update(selectedItem.id);
}

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search.item === 0) {
        return;
    } else {
        search.item -= 1;
    }

    //console.log(basket);
    update(selectedItem.id);
}

let update = (id) => {
    let search = basket.find((x) => x.id == id);
    //console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
}