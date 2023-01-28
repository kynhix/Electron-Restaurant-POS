const ticketPrototype = {
    initDOM() {
        const newDiv = document.createElement("div");
        newDiv.classList.add("ticket");
        const newContent = document.createTextNode(self.name + self.timestamp);

        newDiv.appendChild(newContent);
        document.getElementById("ticket-container").appendChild(newDiv);
    },

    update() {

    },
};

function initTicketDOM() {
    
}

function Ticket(name, timestamp, table=[]) {
    self.name = name;
    self.timestamp = timestamp;
    self.table = table;

    ticketPrototype.initDOM();
}

Object.assign(Ticket.prototype, ticketPrototype);

new Ticket("testing", "test");