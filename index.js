function newImage(char, s, x, y, z){
char = document.createElement('img')
char.src = s
char.style.position = z
char.style.left = x
char.style.bottom = y
document.body.append(char)
}

function newItem(item, s, x, y, z){
    item = document.createElement('img')
    item.src = s
    item.style.position = z
    item.style.left = x
    item.style.bottom = y
    document.body.append(item)
    item.addEventListener('dblclick', function(){
        item.remove()
})
}

newImage('greenCharacter', ' assets/green-character.gif', '100px', '100px', 'fixed')
newImage('pineTree', ' assets/pine-tree.png', '450px', '200px', 'fixed')
newImage('tree', ' assets/tree.png', '200px', '300px', 'fixed')
newImage('pillar', ' assets/pillar.png', '350px', '100px', 'fixed')
newImage('crate', ' assets/crate.png', '150px', '200px', 'fixed')
newImage('well', ' assets/well.png', '500px', '425px', 'fixed')


newItem('sword', ' assets/sword.png', '500px', '405px', 'fixed')
newItem('shield', ' assets/shield.png', '165px', '185px', 'fixed')
newItem('staff', ' assets/staff.png', '600px', '100px', 'fixed')
