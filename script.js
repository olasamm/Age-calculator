// var allstudent = ['christiana', 'Tola', 'DJchicken', 'Salo', 'teedollar']
// console.log(allstudent);

// var ages = [34, 87, 45, 30, 17]
// console.log(ages);

// var student = ['Opadeji Mary', 54, 'dark', 'single', 100000, false]
// console.log(student);





// var girlfriends = [ 'Pelumi', 'Gloria', 'Christiana','Mary', 'Janet', 'Blessing', 'Adeola']

// girlfriends.pop()
// girlfriends.shift()
// girlfriends.push('Adunni')
// girlfriends.unshift('Precious')
// console.log(girlfriends);
var cart = [];
// console.log(cart);




function addItems() {
    if (imp.value === ''){
       error.style.display = 'block'
    } else{
        error.style.display = 'none'
        cart.push(imp.value)
        document.getElementById('imp').value = ''
        console.log(cart);
        show.innerHTML = ''


        for(i=0; i < cart.length; i++){
            var element = cart[i]
            show.innerHTML += `<p>${i + 1}.${cart[i]}</p>`
        }
        
    }
}

function add() {
    cart.unshift(imp.value)
    document.getElementById('imp').value = ''
    show.innerHTML = ''
    for(i=0; i < cart.length; i++){
        show.innerHTML += `<p>${i + 1}. ${cart[i]}</p>`
    }
}



function displayTodos(){5
display.innerHTML = ""
for(i=0; i < cart.length; i++){
    show.innerHTML += `<p>${i + 1}. ${cart[i]}</p>`
}
}

function deletes() {
    cart.shift()
    document.getElementById('imp').value = ''
    show.innerHTML = ''
    for(i=0; i < cart.length; i++){
        show.innerHTML += `<p>${i + 1}. ${cart[i]}</p>`
    }
}





function last() {
    cart.pop(imp.value)
    document.getElementById('imp').value = ''
    show.innerHTML = ''
    for(i=0; i < cart.length; i++){
        show.innerHTML += `<p>${i + 1}. ${cart[i]}</p>`
    }
}





function any() {
    var num = Number(prompt("Enter a number to delete"))
    cart.splice(num-1, 1)
    displayTodos()
}



var arrtest = ['tolu', 'tade', 'isola']
arrtest.splice 