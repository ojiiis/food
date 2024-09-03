var vmi = document.getElementsByClassName("vendor-menu-image");
for(i of vmi){
    i.style.backgroundImage = `url(${i.getAttribute('data-src')})`;
    i.style.backgroundPosition = "center";
    i.style.backgroundSize = "cover";
    i.style.backgroundRepeat = "no-repeat"
    console.log()
}
 const close_elem = (elem) =>{
    if(document.getElementById(elem))
    document.getElementById(elem).style.visibility = "hidden";
 }

 
const cqi = document.getElementsByClassName('cart-qty');
for(let i of cqi){
    i.parentElement.parentElement.children[2].innerText = Intl.NumberFormat().format(i.id * i.value)
    i.onchange = function(){
        i.parentElement.parentElement.children[2].innerText = Intl.NumberFormat().format(i.id * i.value)
        document.getElementById('subtotal').innerText = new Intl.NumberFormat().format(sumCart());
    }
    document.getElementById('subtotal').innerText = new Intl.NumberFormat().format(sumCart());
}

function sumCart(){
    const cqi = document.getElementsByClassName('cart-qty');
   let total = 0
    for(let i of cqi){
        total += i.id * i.value
    }  
    return total; 
}
 var vms =  document.getElementsByClassName("vendor-menu-lister")[0],vmsc = vms?.children.length,vmsi = 0;
 setInterval(function(){
   
    if(vmsi >= (vmsc - 1)){
        vmsi = 0;
        vms.scrollTo(0,0);
    }else{
    let goto = vms?.children[vmsi+1].offsetLeft - 20;
    vms?.scrollTo(goto,0);
    vmsi++;
    }

 },3000);
