// Plans to create flyweight items
const ItemPrototype = {
    name: 'undef',
    id: -1,
    price: 0,
    modifiers: [],

    isValid: function() { return id != -1; }
};

const TicketPrototype = {
    items: [],
    id: -1,
    timestamp: -1,

    addItem: function(item) {
        this.items.concat(item);
    },
};

/**
 * 
 * @param {Array} items 
 * @param {Number} id Leave blank for random id
 */
var createTicket = function(items, id=-1) {
    this.items = items;
    // Randomly generates IDs
    if (id == -1) {
        id = Math.trunc(Math.random()*100000);
    }
    this.id = id;
    this.timestamp = Math.trunc(Date.now() / 1000);
}
Object.setPrototypeOf(createTicketData, ItemPrototype);

// This will be moved to a seperate file for maximum modularity
/* 
    Restaurant Ticket File
*/
const RestaurantTicketDataPrototype = {
    completed: false,
    name: 'undef',
}

