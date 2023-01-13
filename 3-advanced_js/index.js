
//fill array with 60000 elements
const list = new Array(60).join('1.1').split('.');


function removeItemsFromList() {
    var item;
    setInterval(() => {
        item = list.pop();
        console.log((item));
    }, 200);
    if (item) {
        removeItemsFromList();
    }
};

removeItemsFromList();