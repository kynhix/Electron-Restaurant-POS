/*===========================
    Navigation
===========================*/
const navPages = new Map();
navPages.set("orders", "ticket-container");
navPages.set("settings", "");
navPages.set("login", "login-page");
navPages.set("admin", "admin-page");

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

/*===========================
    Sidebar
===========================*/

function showSidebar() {
    document.getElementById("sidebar").style.transform = "translate(0, 0)";
}

function hideSidebar() {
    document.getElementById("sidebar").style.transform = "translate(-20em, 0)";
}


/*===========================
    Login
===========================*/
function startLogin() {
    document.getElementById("password").parentElement.style.display = null; 
    document.getElementById("username").parentElement.style.display = "None";
}

function submitLogin() {
    document.getElementById("password").parentElement.style.display = "None"; 
    document.getElementById("username").parentElement.style.display = null;
}

Array.from(document.getElementById('nav-bar').getElementsByTagName('a'))
.forEach(element => element.addEventListener('click', navigatePage, false));

/*===========================
    Tickets
===========================*/
const ticketPrototype = {
    isEmpty() { return this.items.length == 0; },
    
    isCompleted() {
        for (let item of this.items) {
            if (!item.completed) { return false; }
        }
        return true;
    },
};

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