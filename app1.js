function login() {
    let a = parseInt(prompt(document.getElementById("nhapvao").value))

    switch (a) {
        case 0:
            alert('0')
            break;
        case 1:
            alert('1')
            break;
        case 2:
        case 3:
            alert('2,3')
            break;
    }
}