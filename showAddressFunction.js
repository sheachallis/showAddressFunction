
let address = {
    street: '17 Brook Road',
    town: 'Montpelier',
    city: 'Bristol',
    postCode: 'BS6 5LR'
}

function showAddress() {
    for (let key in address)
      console.log(key, address[key]);
}

showAddress(); 
