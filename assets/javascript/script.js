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
 

 var vms =  document.getElementsByClassName("vendor-menu-lister")[0],vmsc = vms.children.length,vmsi = 0;
 setInterval(function(){
   
    if(vmsi >= (vmsc - 1)){
        vmsi = 0;
        vms.scrollTo(0,0);
    }else{
    let goto = vms.children[vmsi+1].offsetLeft - 20;
    vms.scrollTo(goto,0);
    vmsi++;
    }

 },3000);
