const ticketPrototype = {
    isEmpty() { return this.items.length == 0; },
    
    isCompleted() {
        for (let item of this.items) {
            if (!item.completed) { return false; }
        }
        return true;
    },
};

const navPages = new Map();
navPages.set("orders", "ticket-container");
navPages.set("settings", "");
navPages.set("login", "login-page");
navPages.set("admin", "");

function navigatePage(event) {
    hideAllPages();

    const id = navPages.get(event.target.getAttribute("href").substring(1));
    if (!id) { return; }

    const element = document.getElementById(id);
    if (!element) { return; }

    element.style.display = null;
}

function hideAllPages() {
    navPages.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = "None";
        }
    });
}

hideAllPages();

Array.from(document.getElementById('nav-bar').getElementsByTagName('a')).forEach(element => element.addEventListener('click', navigatePage, false))

/**
 * 
 * @param {*} ticket 
 * @returns Returns the div element that contains all the visual components of the ticket
 */
function createTicketDOM(ticket) {
    // The container for the ticket
    const ticketContainer = document.createElement("div");
    ticketContainer.classList.add("ticket");

    // *Title*
    const ticketTitle = document.createElement("ul");
    ticketTitle.classList.add("ticket-title");
    // Name
    const ticketTitleName = document.createElement("li");
    ticketTitleName.appendChild(document.createTextNode(ticket.name));
    ticketTitle.appendChild(ticketTitleName);
    // Table
    const ticketTitleTable = document.createElement("li");
    ticketTitleTable.style = "display: flex; justify-content: center;";
    ticketTitleTable.appendChild(document.createTextNode(ticket.table));
    ticketTitle.appendChild(ticketTitleTable);
    
    const completeTicket = document.createElement("li");
    completeTicket.style = "float: right;";
    completeTicket.appendChild(document.createTextNode(ticket.table));
    ticketTitle.appendChild(completeTicket);

    ticketContainer.appendChild(ticketTitle);
    document.getElementById("ticket-container").appendChild(ticketContainer);

    return ticketContainer;
}

function Ticket(name, table, timestamp, items=[]) {
    this.name = name;
    this.table = table;
    this.timestamp = timestamp;
    this.items = items;
    this.completed = false;
}

Object.setPrototypeOf(Ticket, ticketPrototype);
const ticket = new Ticket("testing", "112", "test");
ticket.div = createTicketDOM(ticket);