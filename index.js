// Add your code here
function submitData(name, email) {
    const userObject = {
        name: name,
        email: email
    };
    return fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                'accept': "application/json"
            },

            body: JSON.stringify(userObject)
        })
        .then(res => res.json())
        .then(user => {
            const userid = document.createElement('h1');
            const body = document.querySelector('body');
            userid.textContent = user.id;
            body.appendChild(userid);

        })
        .catch(error => {
            appendError(error);
        });
}

function appendError(error) {
    const divError = document.querySelector('.error');
    divError.style.color = 'red';
    divError.textContent = error.message

}
