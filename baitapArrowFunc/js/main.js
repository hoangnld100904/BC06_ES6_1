const colorList= ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar']
var loadColor= array => {
    let colorButton=document.getElementsByClassName('color-button');
    // console.log(colorButton)
    for (let i=0; i< array.length; i++) {      
        colorButton[i].classList.add(colorList[i])
        // console.log(colorButton[i].classList)
    }
}
loadColor(colorList);
var house= document.getElementById('house');
var colorButton=document.querySelectorAll('.color-button');
colorButton.forEach((button)=>{
    console.log(button)
    button.addEventListener('click', function(){
        let activeButton=document.querySelector('.active');
        activeButton.classList.remove('active');
        button.classList.add('active');
        console.log(button.classList[1])
        var buttonColor=button.classList[1];
        house.classList.remove(house.classList[1]);
        house.classList.add(buttonColor)
    })
})
    