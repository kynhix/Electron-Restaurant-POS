const accountPrototype = {
    name: 'undef',
    timestamp: -1,
    username: 'undef',
    password: 'undef', // Only thing that needs encrypted
    permissions: {},
};

export function Account(name, username, password, permissions={}) {
    if (!name || !username || !password) {
        throw "Invalid arguments.";
    }

    this.permissions = permissions;
    this.name = name;
    this.username = username;
    this.password = password;
}
Object.setPrototypeOf(Account, accountPrototype);