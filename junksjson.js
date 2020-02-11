let client = {
    name: "Jarvis",
    address: {
        address: "511",
        city: "Arlington",
        state: 'Tx'
    },
    network: 150000.00,
    riskTolerance: "medium",
    nextVisit: "July 26, 2020",
    children: ["Nadia", "Kaliah", "Cam"]
}
console.log(`${client.name} lives in ${client.address.city} and is worth ${client.network}.`)

for (const child of client.children) {
    console.log(child)
}
client.network += 10;
console.log(client.network)
client.children.push("K.J.");
console.log(client.children)
