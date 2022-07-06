function submitData(name, email) {
    return fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'email': email
        })
    })
    .then(response => response.json())
    .then(user => {
        const p = document.createElement("p");
        const div = document.createElement("div");
        document.querySelector('body').append(div);
        p.innerHTML = `${user.id}`;
        div.append(p);
    })
    .catch(errorObj => {
        const p = document.createElement("p");
        const div = document.createElement("div");
        document.querySelector('body').append(div);
        p.innerHTML = `${errorObj.message}`;
        div.append(p);
    })
}