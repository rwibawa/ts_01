function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Ryan",
    lastName: "Wibawa"
};
document.body.innerHTML = greeter(user);
