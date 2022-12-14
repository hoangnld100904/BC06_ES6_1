
tinhDTB=((...e)=>{
    let sum=0;
    e.map(e=>{
        sum+=parseFloat(e);
    })
    console.log(sum/e.length)
    return (sum/e.length).toFixed(2);
})
var btnKhoi1 = document.querySelector('#btnKhoi1')
btnKhoi1.addEventListener('click',()=>{
    var toan= document.getElementById('inpToan').value
    var ly= document.getElementById('inpLy').value
    var hoa= document.getElementById('inpHoa').value
    var output= document.getElementById('tbKhoi1')
    output.innerHTML= tinhDTB(toan, ly, hoa)
})
var btnKhoi2 = document.querySelector('#btnKhoi2')
btnKhoi2.addEventListener('click', ()=>{
    var van= document.getElementById('inpVan').value
    var su= document.getElementById('inpSu').value
    var dia= document.getElementById('inpDia').value
    var English= document.getElementById('inpEnglish').value
    var output=document.getElementById('tbKhoi2')
    output.innerHTML= tinhDTB(van, su, dia, English)
})