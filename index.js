
const submitData = (name, email) => {
    const f = fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    }).then((res) => res.json()).then((json) => {
        document.body.append(json.id)
    }).catch((error) => {
        document.body.append(error.message)
    });

    return f;
}