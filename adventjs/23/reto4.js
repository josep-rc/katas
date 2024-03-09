function decode(message) {
    const regex = /\(([^)^(]+)\)/;
    let found = message.match(regex);
    while (found) {
        message = message.replace(found[0], found[1].split("").reverse().join(""))
        found = message.match(regex);
    }
    return message
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus