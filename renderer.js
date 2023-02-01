const ticketPrototype = {
    isEmpty() { return self.items.length == 0; },

    update() {

    },
};

function createTicketDOM(ticket) {
    // The container for the ticket
    const ticketContainer = document.createElement("div");
    ticketContainer.classList.add("ticket");
    const title = document.createTextNode(ticket.name + ticket.timestamp);

    ticketContainer.appendChild(title);
    document.getElementById("ticket-container").appendChild(ticketContainer);

    return ticketContainer;
}

function Ticket(name, timestamp, items=[]) {
    self.name = name;
    self.timestamp = timestamp;
    self.items = items;
    self.completed = false;
}

Object.assign(Ticket.prototype, ticketPrototype);

const ticket = new Ticket("testing", "test");
ticket.div = createTicketDOM(ticket);