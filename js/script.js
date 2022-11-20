// var pop=prompt("ادخل اسمك هنا " ," ");

// window.alert(" مرحبا "   +pop);


    var pop=prompt("Enter Your Name" , "");
    document.querySelector(".masg").innerHTML=" Welcome : "+pop;



//                                        [بسم الله الرحمن الرحيم ]

var ProdcutName=document.getElementById("ProdcutName");
var ProductPrice=document.getElementById("ProductPrice");
var ProdcteCategory=document.getElementById("ProdcteCategory");
var ProducteDescription=document.getElementById("ProducteDescription");


var productContainer;

        if(localStorage.getItem("myProductss")==null){
            productContainer=[];
        }else{
       productContainer=JSON.parse( localStorage.getItem("myProductss"));
       displaayProduct();
        }
      


function addProducte(){
    product={
        name:ProdcutName.value,
        price:ProductPrice.value,
        category:ProdcteCategory.value,
        desc:ProducteDescription.value,

    }
    productContainer.push(product); 
    localStorage.setItem("myProductss",JSON.stringify(productContainer));
    clearForm();
    displaayProduct();
};

function displaayProduct(){
    cartoona=``;
    for(var g=0 ; g<productContainer.length;g++){
        cartoona+=`<tr>
        <td>
           `+g+`
        </td>
        <td>
        `+productContainer[g].price+`
        </td>
        <td>
        `+productContainer[g].price+`
        </td>
        <td>
        `+productContainer[g].category+`
        </td>
        <td>
        `+productContainer[g].desc+`

        </td>
        <td>
            <button onclick="updateProduct(`+g+`)" class="btn btn-outline-info">update</button>
        </td>
        <td>
            <button onclick="deleteProducte(`+g+`)" class="btn btn-outline-danger">delete</button>
        </td>
    </tr>`;
    }
    document.getElementById("teBody").innerHTML=cartoona;
};

function clearForm(){
    
    ProdcutName.value="";
    ProductPrice.value="";
    ProdcteCategory.value="";
    ProducteDescription.value="";
};
            // productContainer.splice(indexValue,1);
            // localStorage.setItem("myProductss" , JSON.stringify(productContainer));
            // displaayProduct();

function deleteProducte(indexValue){
  var delet=(confirm(" Are You Sure to delete the product?"));
    if(delet==true){
        productContainer.splice(indexValue,1);
        localStorage.setItem("myProductss" , JSON.stringify(productContainer));
        displaayProduct();
    }else{
        console.log("not delete")
    };   
};

function searchProduct(nameValue){
    var cartoona=``;
    for(var g=0; g<productContainer.length;g++){
        if(productContainer[g].name.toLowerCase().includes(nameValue.toLowerCase())==true){
            cartoona+=`<tr>
            <td>
               `+g+`
            </td>
            <td>
            `+productContainer[g].name+`
            </td>
            <td>
            `+productContainer[g].price+`
            </td>
            <td>
            `+productContainer[g].category+`
            </td>
            <td>
            `+productContainer[g].desc+`    
    
            </td>
            <td>
                <button onclick="updateProduct(`+g+`)" class="btn btn-outline-info">update</button>
            </td>
            <td>
                <button onclick="deleteProducte(`+g+`)" class="btn btn-outline-danger">delete</button>
            </td>
        </tr>`;
        }
        else{
            console.log("m4 mawgod");
        };        
    };
    document.getElementById("teBody").innerHTML=cartoona;
    
    
};


function updateProduct(indexIndex){

    ProdcutName.value=productContainer[indexIndex].name;
    ProductPrice.value=productContainer[indexIndex].price;
    ProdcteCategory.value=productContainer[indexIndex].category;
    ProducteDescription.value=productContainer[indexIndex].desc;

    document.getElementById("change").innerHTML="update";

}