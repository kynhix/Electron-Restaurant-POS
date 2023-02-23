const AccountPrototype = {
    name: 'undef',
    timestamp: -1,
    username: 'undef',
    password: 'undef', // Only thing that needs encrypted
    privileges: {},
};

function Account(name, username, password, privileges={}) {
    if (!name || !username || !password) {
        throw "Invalid arguments.";
    }

    this.privileges = privileges;
    this.name = name;
    this.username = username;
    this.password = password;
}
Object.setPrototypeOf(Account, AccountPrototype);


function createAccount(name, username, password) {
    
}