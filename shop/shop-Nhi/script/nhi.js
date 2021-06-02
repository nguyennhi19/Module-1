let products=["Sony Xperia","Samsung Galaxy"," Nokia 6", "Xiaomi Note 4", "Iphone 6s", "Xiami Mi 5s Plus"];
function showProduct(){
    let tbProduct= document.getElementById('tbProduct');
    let total=document.getElementById(`totalProduct`)
    tbProduct.innerHTML=`${products.length}products`
    tbProduct.innerHTML="";
    products.forEach(function(value,index){
        tbProduct.innerHTML+=`
        <tr>
        <td>1</td>
        <td>IP 6s</td>
        <td><a href="javascript:;" class="btn btn-warning">Edit</a>
            <a href="javascript:;" class="btn btn-danger">Remove</a>
        </td>
        </tr>
        `;
        
    })

}
function AddProduct(){
    let productName=document.getElementById(`product-name`).value;
    products.push(productName);
    clean();
    showProduct();
}
function clean(){
    document.getElementById(`product-name`).value;
}
function documentReady(){
    showProduct();

}
documentReady()