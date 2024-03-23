let latestprojest = 0;

// function loader(){
    // setTimeout(loaded,2000)
    // // function loaded(){
    //     document.getElementById('loadimg1').style.display = "none";
    //     document.getElementById('mainsection').style.display = "block";
    //     document.getElementById('mainsection').style.backgroundcolor = "white";
    // }    
    document.getElementById('fashioninfo').style.display = 'none';
    document.getElementById('outerwearinfo').style.display = 'none';
    document.getElementById('onimagebutton').style.display = 'none';

    let productdata = [
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/130-home_default/customizable-mug.jpg",
            naam:"Soylent Green",
            description:"Plastic Bamboo Dustoan & Brush Black",
            rating:"★★★★★",
            price:"$52.44"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/123-home_default/hummingbird-notebook.jpg",
            naam:"Weeds Capital",
            description:"Nike Air Max Invigor 'black' 748948",
            rating:"★★★★★",
            price:"$84.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/119-home_default/brown-bear-notebook.jpg",
            naam:"The Simpsons",
            description:"Smart Speaker & Googlr Assistant, Light Grey",
            rating:"★★★★★",
            price:"$54.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/97-home_default/pack-mug-framed-poster.jpg",
            naam:"Pro Tech Gear",
            description:"GENELEC Compact two-way Active Speaker",
            rating:"★★★★★",
            price:"$37.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/110-home_default/hummingbird-vector-graphics.jpg",
            naam:"Massive Dynamic",
            description:"Natural Wood Ceiling Pendant Light Spade",
            rating:"★★★★★",
            price:"$55.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/105-home_default/brown-bear-vector-graphics.jpg",
            naam:"Looney Tunes",
            description:"Michels Kors Jet Set Tote Bag",
            rating:"★★★★★",
            price:"$82.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/92-home_default/mountain-fox-vector-graphics.jpg",
            naam:"Initech Space",
            description:"Pendant Light Lamps for Home Decor",
            rating:"★★★★★",
            price:"$84.64"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/86-home_default/hummingbird-cushion.jpg",
            naam:"Gadget Zone",
            description:"Multicolored Open-Knit Crewneck",
            rating:"★★★★★",
            price:"$79.00"
        }

    ]
    let see = document.getElementById('lpcards')
    see.innerHTML = productdata.map(cards => `
    <div id="showcards1">
        <img src=" ${cards.imag}" alt="">
        <p> <a href="#"> ${cards.naam} </a> </p>
        <h4> <a href="#"> ${cards.description} </a> </h4>
        <p" style="color: #f2b600;"> ${cards.rating} </p>
        <h4 style="color: #f6891a;"> ${cards.price} </h4>
    </div>`).join('')


    let featuredproduct = [
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/29-home_default/hummingbird-printed-t-shirt.jpg",
            naam:"Gadget Zone",
            description:"Apple AirPods Max Over-Ear Wireless Headphone",
            rating:"★★★★★",
            price:"$42.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/32-home_default/brown-bear-printed-sweater.jpg",
            naam:"Initech Space",
            description:"Apple Smart Watch / Midnight Aluminum",
            rating:"★★★★★",
            price:"$51.04"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/36-home_default/the-best-is-yet-to-come-framed-poster.jpg",
            naam:"Looney Tunes",
            description:"Basic High-Nack Puff Table",
            rating:"★★★★★",
            price:"$76.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/48-home_default/the-adventure-begins-framed-poster.jpg",
            naam:"Massive Dynamic",
            description:"Boat Life Smartwatch 1.69 Inches HD Display",
            rating:"★★★★★",
            price:"$64.17"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/53-home_default/today-is-a-good-day-framed-poster.jpg",
            naam:"Pro Tech Gear",
            description:"Cropped Satin Bomber Bag",
            rating:"★★★★★",
            price:"$94.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/55-home_default/mug-the-best-is-yet-to-come.jpg",
            naam:"The Simpsons",
            description:"Home Decoratve Wood Nught Table Lamp",
            rating:"★★★★★",
            price:"$48.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/66-home_default/mug-the-adventure-begins.jpg",
            naam:"Weeds Capital",
            description:"Apple Mackbook 8Gb/512Gb Ssd/Mac OS",
            rating:"★★★★★",
            price:"$45.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/71-home_default/mug-today-is-a-good-day.jpg",
            naam:"Soylent Green",
            description:"Mens Cotton Casual Short Sleeve T-Shirts",
            rating:"★★★★★",
            price:"$86.00"
        }
    
    ]
    let hee = document.getElementById('fpcards')
    hee.innerHTML = featuredproduct.map(cards => `
    <div id="showcards2">
        <img src=" ${cards.imag}" alt="">
        <p> <a href="#"> ${cards.naam} </a> </p>
        <h4> <a href="#"> ${cards.description} </a> </h4>
        <p" style="color: #f2b600;"> ${cards.rating} </p>
        <h4 style="color: #f6891a;"> ${cards.price} </h4>
    </div>`).join('')
    

    let dealoftheday = [
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/92-home_default/mountain-fox-vector-graphics.jpg",
            naam:"Initech Space",
            description:"Pendant Light Lamp For Home Decor",
            rating:"★★★★★",
            price:"<del> $92.00 </del> $84.64"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/48-home_default/the-adventure-begins-framed-poster.jpg",
            naam:"Massive Dynamic",
            description:"Boat Life SmartWatch 1.69 Inches HD Display",
            rating:"★★★★★",
            price:"<del> $69.00 </del> $64.17"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/73-home_default/mountain-fox-cushion.jpg",
            naam:"Soylent Green",
            description:"Menu Bottle Salt And Papper Grinder Steel",
            rating:"★★★★★",
            price:"<del> $67.00 </del> $56.95"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/110-home_default/hummingbird-vector-graphics.jpg",
            naam:"Massive Dynamic",
            description:"Natural Wood Ceiling Pendant Light Shade",
            rating:"★★★★★",
            price:"<del> $67.00 </del> $55.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/130-home_default/customizable-mug.jpg",
            naam:"Soylent Green",
            description:"Plastic Bomboo Dustpan & Brush Black",
            rating:"★★★★★",
            price:"<del> $57.00 </del> $52.44"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/32-home_default/brown-bear-printed-sweater.jpg",
            naam:"Initech Space",
            description:"Apple Smart Watch / Midnight Aluminum",
            rating:"★★★★★",
            price:"<del> $58.00 </del> $51.04"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/29-home_default/hummingbird-printed-t-shirt.jpg",
            naam:"Gadget Zone",
            description:"Apple AirPods Max Over-Ear Wireless Headphone",
            rating:"★★★★★",
            price:"<del> $47.00 </del> $42.00"
        }
    
    ]
    let dee = document.getElementById('dotdcards')
    dee.innerHTML = dealoftheday.map(cards => `
    <div id="showcards3">
        <img src=" ${cards.imag}" alt="">
        <p> <a href="#"> ${cards.naam} </a> </p>
        <h4> <a href="#"> ${cards.description} </a> </h4>
        <p" style="color: #f2b600;"> ${cards.rating} </p>
        <h4 style="color: #f6891a;"> ${cards.price} </h4>
    </div>`).join('')
 
    let shopbycat = [
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/modules/cz_categoryimagelist/views/img/15-cz_categoryimagelist.jpg",
            naam:"Women's Clothes",
            item:"(15 items)"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg",
            naam:"Men's Clothing",
            item:"(16 items)"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg",
            naam:"Sneakers Shoes",
            item:"(14 items)"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg",
            naam:"Silver Earrings",
            item:"(15 items)"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/modules/cz_categoryimagelist/views/img/19-cz_categoryimagelist.jpg",
            naam:"Leather Watch",
            item:"(15 items)"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/modules/cz_categoryimagelist/views/img/20-cz_categoryimagelist.jpg",
            naam:"Cabinet Table",
            item:"(17 items)"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/modules/cz_categoryimagelist/views/img/21-cz_categoryimagelist.jpg",
            naam:"Headphones",
            item:"(14 items)"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/modules/cz_categoryimagelist/views/img/22-cz_categoryimagelist.jpg",
            naam:"Sunglasses",
            item:"(17 items)"
        }

    ]
    let shopdee = document.getElementById('shopcards')
    shopdee.innerHTML = shopbycat.map(cards => `
    <div id="shopbycatcards">
        <img src=" ${cards.imag}" alt="">
        <h5 style="color: #070707;"> ${cards.naam} </p>
        <p style="color: #565656;"> ${cards.item} </h4>
    </div>`).join('')


function brandlist(){
    document.getElementById('allbrandsdd').style.display = 'block'
}
function brandlistclose(){
    document.getElementById('allbrandsdd').style.display = 'none';
}
function fashioncat(){
    document.getElementById('fashioninfo').style.display = 'block'
}
function fashioncatclose(){
    document.getElementById('fashioninfo').style.display = 'none'
}
function outerwear(){
    document.getElementById('outerwearinfo').style.display = 'block'
}
function outerwearleave(){
    document.getElementById('outerwearinfo').style.display = 'none'
}
function showbutton(){
    document.getElementById('onimagebutton').style.display = 'flex'
}
function showbuttonleave(){
    document.getElementById('onimagebutton').style.display = 'none'
}
function changeimage1(){
    let i = document.getElementById('crowser1');
    i.src = "/images/crowser1.jpg";
    let p = document.getElementById('p').innerHTML = 'STARTING AT ONLY $500';
    let h = document.getElementById('h').innerHTML = 'Women Using VR <br> Headset';
    imagestore = 1;
}
function changeimage2(){
    let i = document.getElementById('crowser1');
    i.src = "/images/crowser2.jpg";
    imagestore = 0;
    let p = document.getElementById('p').innerHTML = 'STARTING AT ONLY $400';
    let h = document.getElementById('h').innerHTML = 'Solid Fabric Living <br> Room Chair';
}

function lpnext(){
    if (latestprojest === 0){
    document.getElementById('showcards1').style.marginLeft = '-212px'
    document.getElementById('showcards1').style.transition = 'margin-left 1s'
    latestprojest = 1;
}
    else if (latestprojest === 1){
    document.getElementById('showcards1').style.marginLeft = '-414px'
    document.getElementById('showcards1').style.transition = 'margin-left 1s'
    latestprojest = 2;
}
    else if (latestprojest === 2){
    document.getElementById('showcards1').style.marginLeft = '10px'
    document.getElementById('showcards1').style.transition = 'margin-left 1s'
    latestprojest = 0;
}
}
function lpprevious(){
    if (latestprojest === 2){
        document.getElementById('showcards1').style.marginLeft = '-212px'
        document.getElementById('showcards1').style.transition = 'margin-left 1s'
        latestprojest = 1;
    }
        else if (latestprojest === 1){
        document.getElementById('showcards1').style.marginLeft = '10px'
        document.getElementById('showcards1').style.transition = 'margin-left 1s'
        latestprojest = 0;
    }
        else if (latestprojest === 0){
        document.getElementById('showcards1').style.marginLeft = '-414px'
        document.getElementById('showcards1').style.transition = 'margin-left 1s'
        latestprojest = 2;
    }
}

function feapnext(){
    if (latestprojest === 0){
    document.getElementById('showcards2').style.marginLeft = '-212px'
    document.getElementById('showcards2').style.transition = 'margin-left 1s'
    latestprojest = 1;
}
    else if (latestprojest === 1){
    document.getElementById('showcards2').style.marginLeft = '-414px'
    document.getElementById('showcards2').style.transition = 'margin-left 1s'
    latestprojest = 2;
}
    else if (latestprojest === 2){
    document.getElementById('showcards2').style.marginLeft = '10px'
    document.getElementById('showcards2').style.transition = 'margin-left 1s'
    latestprojest = 0;
}
}
function feapprevious(){
    if (latestprojest === 2){
        document.getElementById('showcards2').style.marginLeft = '-212px'
        document.getElementById('showcards2').style.transition = 'margin-left 1s'
        latestprojest = 1;
    }
        else if (latestprojest === 1){
        document.getElementById('showcards2').style.marginLeft = '10px'
        document.getElementById('showcards2').style.transition = 'margin-left 1s'
        latestprojest = 0;
    }
        else if (latestprojest === 0){
        document.getElementById('showcards2').style.marginLeft = '-414px'
        document.getElementById('showcards2').style.transition = 'margin-left 1s'
        latestprojest = 2;
    }
}

function shopbynext(){
    if (latestprojest === 0){
    document.getElementById('shopbycatcards').style.marginLeft = '-212px'
    document.getElementById('shopbycatcards').style.transition = 'margin-left 1s'
    latestprojest = 1;
}
    else if (latestprojest === 1){
    document.getElementById('shopbycatcards').style.marginLeft = '0px'
    document.getElementById('shopbycatcards').style.transition = 'margin-left 1s'
    latestprojest = 0;
}
}
function shopbyprevious(){
        if (latestprojest === 1){
        document.getElementById('shopbycatcards').style.marginLeft = '0px'
        document.getElementById('shopbycatcards').style.transition = 'margin-left 1s'
        latestprojest = 0;
    }
        else if (latestprojest === 0){
        document.getElementById('shopbycatcards').style.marginLeft = '-212px'
        document.getElementById('shopbycatcards').style.transition = 'margin-left 1s'
        latestprojest = 1;
    }
}

function dotdnext(){
    if (latestprojest === 0){
    document.getElementById('showcards3').style.marginLeft = '-212px'
    document.getElementById('showcards3').style.transition = 'margin-left 1s'
    latestprojest = 1;
}
    else if (latestprojest === 1){
    document.getElementById('showcards3').style.marginLeft = '10px'
    document.getElementById('showcards3').style.transition = 'margin-left 1s'
    latestprojest = 0;
}
}
function dotdprevious(){
        if (latestprojest === 1){
        document.getElementById('showcards3').style.marginLeft = '10px'
        document.getElementById('showcards3').style.transition = 'margin-left 1s'
        latestprojest = 0;
    }
        else if (latestprojest === 0){
        document.getElementById('showcards3').style.marginLeft = '-212px'
        document.getElementById('showcards3').style.transition = 'margin-left 1s'
        latestprojest = 1;
    }
}


function revnext(){
    if (latestprojest === 0){
    document.getElementById('img1').style.marginLeft = '-446px'
    document.getElementById('img1').style.transition = 'margin-left 1s'
    latestprojest = 1;
}
    else if (latestprojest === 1){
    document.getElementById('img1').style.marginLeft = '32px'
    document.getElementById('img1').style.transition = 'margin-left 1s'
    latestprojest = 0;
}
}
function revprevious(){
        if (latestprojest === 1){
        document.getElementById('img1').style.marginLeft = '32px'
        document.getElementById('img1').style.transition = 'margin-left 1s'
        latestprojest = 0;
    }
        else if (latestprojest === 0){
        document.getElementById('img1').style.marginLeft = '-446px'
        document.getElementById('img1').style.transition = 'margin-left 1s'
        latestprojest = 1;
    }
}


function bgnext(){
    if (latestprojest === 0){
    document.getElementById('bgchild1').style.marginLeft = '-320px'
    document.getElementById('bgchild1').style.transition = 'margin-left 1s'
    latestprojest = 1;
}
    else if (latestprojest === 1){
    document.getElementById('bgchild1').style.marginLeft = '30px'
    document.getElementById('bgchild1').style.transition = 'margin-left 1s'
    latestprojest = 0;
}
}
function bgprevious(){
        if (latestprojest === 1){
        document.getElementById('bgchild1').style.marginLeft = '30px'
        document.getElementById('bgchild1').style.transition = 'margin-left 1s'
        latestprojest = 0;
    }
        else if (latestprojest === 0){
        document.getElementById('bgchild1').style.marginLeft = '-320px'
        document.getElementById('bgchild1').style.transition = 'margin-left 1s'
        latestprojest = 1;
    }
}


function instaimgn(){
    if (latestprojest === 0){
    document.getElementById('insta1').style.marginLeft = '-234px'
    document.getElementById('insta1').style.transition = 'margin-left 1s'
    latestprojest = 1;
}
    else if (latestprojest === 1){
    document.getElementById('insta1').style.marginLeft = '-468px'
    document.getElementById('insta1').style.transition = 'margin-left 1s'
    latestprojest = 2;
}
    else {
    document.getElementById('insta1').style.marginLeft = '0px'
    document.getElementById('insta1').style.transition = 'margin-left 1s'
    latestprojest = 0;
}

}
function instaimgp(){
        if (latestprojest === 2){
        document.getElementById('insta1').style.marginLeft = '-468px'
        document.getElementById('insta1').style.transition = 'margin-left 1s'
        latestprojest = 1;
    }
        else if (latestprojest === 1){
        document.getElementById('insta1').style.marginLeft = '-234px'
        document.getElementById('insta1').style.transition = 'margin-left 1s'
        latestprojest = 0;
    }
    else{
        document.getElementById('insta1').style.marginLeft = '0px'
        document.getElementById('insta1').style.transition = 'margin-left 1s'
        latestprojest = 2;
    }
}

function register(){
    
    let naam = document.getElementById('naam').value;
    let uname = document.getElementById('uname').value;
    let mob = document.getElementById('mob').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;

    let object ={
        Names:naam,
        Username:uname,
        Number:mob,
        Password:pass,
        Confirm_Password:cpass
    }

    if (naam === "")
    {
        alert (" Please Enter Your Name. ");
        return false;
    }
    else if (uname === "")
    {
        alert (" Please Enter Your Mail Address. ")
    }
    else if (!(uname.includes ('@gmail.com') || (uname.includes('@yahoo.com') || (uname.includes('@outlook.com')))))
    {
        alert (" Please Enter Correct Email Address.");
        return false;
    }
    else if (pass === "")
    {
        alert (" Please Enter Password. ");
        return false;
    }
    else if (pass.length < 8)
    {
        alert("Your password must be have at least 8 characters long 1 uppercase & 1 lowercase character 1 number.");
        return false;
    }
    else if (cpass === "")
    {
        alert (" Please Enter Confirm Password. ");
        return false;
    } 
    fetch('http://localhost:3000/database',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(object)
    }).then(alert("Registration Successfull"))    
}

async function login(){

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let aftertrimuname = username.trim();

    let data = await fetch('http://localhost:3000/database');
    let response = await data.json();

    let founder = response.find(items=> items.Username === aftertrimuname && 
        items.Password === password );

    if(founder){
        if(aftertrimuname === "satyambadal48@gmail.com" &&
        password === "12121212"){
        alert("Welcome Boss")
        window.open('dashboard.html')
        }
        else {
            alert("Login Succesfully")
            window.open('index.html')
        }
    }
    else{
        alert("Not Exist Please Sign In First")
        window.open('signin.html')
    }

}

async function dashboard(){
    
    document.getElementById('all').style.display = 'flex'
    document.getElementById('searchbox').style.display = 'flex'
    document.getElementById('analytics').style.display = 'none'
    document.getElementById('loaddash').style.display = 'block'

    let data = await fetch('http://localhost:3000/database');
    let response = await data.json();
    document.getElementById('allusers').innerHTML = response.length
    document.getElementById('admindatatable').innerHTML = '';   
           
}

async function searching(){

    let searchtext = document.getElementById('box').value;
    let optionsearch = document.getElementById('searchfilter').value;
    
    let data = await fetch('http://localhost:3000/database')
    let response = await data.json();

    if (optionsearch ===  "name"){
        let fil = response.filter(items=> items.Names === searchtext);
        document.getElementById('admindatatable').innerHTML = fil.map(
            items=> `
           <table> <tr>
           <td>${items.Names}</td>
           <td>${items.Username}</td>
           <td>${items.Number}</td>
           <td>${items.Password}</td>
           <td>${items.Confirm_Password}</td>
           </tr></table> `).join(" ")
    }
    else if (optionsearch ===  "email"){
        let fil = response.filter(items=> items.Username === searchtext);
        document.getElementById('admindatatable').innerHTML = fil.map(
            items=> `
           <table> <tr>
           <td>${items.Names}</td>
           <td>${items.Username}</td>
           <td>${items.Number}</td>
           <td>${items.Password}</td>
           <td>${items.Confirm_Password}</td>
           </tr></table> `).join(" ")
    }
    else if (optionsearch ===  "mob"){
        let fil = response.filter(items=> items.Number === searchtext);
        document.getElementById('admindatatable').innerHTML = fil.map(
            items=> `
           <table> <tr>
           <td>${items.Names}</td>
           <td>${items.Username}</td>
           <td>${items.Number}</td>
           <td>${items.Password}</td>
           <td>${items.Confirm_Password}</td>
           </tr></table> `).join(" ")
    }
    else {
        alert("Please Select Field")
    }
    
}

async function records(){

    let data = await fetch('http://localhost:3000/database');
    let response = await data.json();
    document.getElementById('analytics').style.display = 'none'
    document.getElementById('loaddash').style.display = 'block'


    document.getElementById('admindatatable').innerHTML = 
    response.map(items=> `
    <table> <tr>
    <td>${items.Names}</td>
    <td>${items.Username}</td>
    <td>${items.Number}</td>
    <td>${items.Password}</td>
    <td>${items.Confirm_Password}</td>
    </tr></table> `).join(" ")
}

function analytics() {
    document.getElementById('analytics').style.display = 'block'
    document.getElementById('loaddash').style.display = 'none'
}

function logout(){
    window.open('index.html')
}


function arrivalloading(){ 

let newarrival = [
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/29-home_default/hummingbird-printed-t-shirt.jpg",
        naam:"Gadget Zone",
        description:"Apple AirPods Max Over-Ear Wireless Headphone",
        rating:"★★★★★",
        price:"$42.00"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/32-home_default/brown-bear-printed-sweater.jpg",
        naam:"Initech Space",
        description:"Apple Smart Watch / Midnight Aluminum",
        rating:"★★★★★",
        price:"$51.04"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/36-home_default/the-best-is-yet-to-come-framed-poster.jpg",
        naam:"Looney Tunes",
        description:"Basic High-Nack Puff Table",
        rating:"★★★★★",
        price:"$76.00"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/48-home_default/the-adventure-begins-framed-poster.jpg",
        naam:"Massive Dynamic",
        description:"Boat Life Smartwatch 1.69 Inches HD Display",
        rating:"★★★★★",
        price:"$64.17"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/53-home_default/today-is-a-good-day-framed-poster.jpg",
        naam:"Pro Tech Gear",
        description:"Cropped Satin Bomber Bag",
        rating:"★★★★★",
        price:"$94.00"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/55-home_default/mug-the-best-is-yet-to-come.jpg",
        naam:"The Simpsons",
        description:"Home Decoratve Wood Nught Table Lamp",
        rating:"★★★★★",
        price:"$48.00"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/66-home_default/mug-the-adventure-begins.jpg",
        naam:"Weeds Capital",
        description:"Apple Mackbook 8Gb/512Gb Ssd/Mac OS",
        rating:"★★★★★",
        price:"$45.00"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/71-home_default/mug-today-is-a-good-day.jpg",
        naam:"Soylent Green",
        description:"Mens Cotton Casual Short Sleeve T-Shirts",
        rating:"★★★★★",
        price:"$86.00"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/92-home_default/mountain-fox-vector-graphics.jpg",
        naam:"Initech Space",
        description:"Pendant Light Lamp For Home Decor",
        rating:"★★★★★",
        price:"<del> $92.00 </del> $84.64"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/130-home_default/customizable-mug.jpg",
        naam:"Soylent Green",
        description:"Plastic Bamboo Dustoan & Brush Black",
        rating:"★★★★★",
        price:"$52.44"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/123-home_default/hummingbird-notebook.jpg",
        naam:"Weeds Capital",
        description:"Nike Air Max Invigor 'black' 748948",
        rating:"★★★★★",
        price:"$84.00"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/119-home_default/brown-bear-notebook.jpg",
        naam:"The Simpsons",
        description:"Smart Speaker & Googlr Assistant, Light Grey",
        rating:"★★★★★",
        price:"$54.00"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/97-home_default/pack-mug-framed-poster.jpg",
        naam:"Pro Tech Gear",
        description:"GENELEC Compact two-way Active Speaker",
        rating:"★★★★★",
        price:"$37.00"
    },
    {
        imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/86-home_default/hummingbird-cushion.jpg",
        naam:"Gadget Zone",
        description:"Multicolored Open-Knit Crewneck",
        rating:"★★★★★",
        price:"$79.00"
    }
]
let newarr = document.getElementById('newarrive')
newarr.innerHTML = newarrival.map(cards => `
<div id="narrival">
    <img src=" ${cards.imag}" alt="">
    <p> <a href="#"> ${cards.naam} </a> </p>
    <h4> <a href="#"> ${cards.description} </a> </h4>
    <p" style="color: #f2b600;"> ${cards.rating} </p>
    <h4 style="color: #f6891a;"> ${cards.price} </h4>
</div>`).join('')

}


function bestdeals(){ 

    let newarrival = [
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/29-home_default/hummingbird-printed-t-shirt.jpg",
            naam:"Gadget Zone",
            description:"Apple AirPods Max Over-Ear Wireless Headphone",
            rating:"★★★★★",
            price:"$32.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/32-home_default/brown-bear-printed-sweater.jpg",
            naam:"Initech Space",
            description:"Apple Smart Watch / Midnight Aluminum",
            rating:"★★★★★",
            price:"$41.04"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/48-home_default/the-adventure-begins-framed-poster.jpg",
            naam:"Massive Dynamic",
            description:"Boat Life Smartwatch 1.69 Inches HD Display",
            rating:"★★★★★",
            price:"$54.17"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/53-home_default/today-is-a-good-day-framed-poster.jpg",
            naam:"Pro Tech Gear",
            description:"Cropped Satin Bomber Bag",
            rating:"★★★★★",
            price:"$84.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/55-home_default/mug-the-best-is-yet-to-come.jpg",
            naam:"The Simpsons",
            description:"Home Decoratve Wood Nught Table Lamp",
            rating:"★★★★★",
            price:"$38.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/66-home_default/mug-the-adventure-begins.jpg",
            naam:"Weeds Capital",
            description:"Apple Mackbook 8Gb/512Gb Ssd/Mac OS",
            rating:"★★★★★",
            price:"$35.00"
        },
        {
            imag:"https://demos.codezeel.com/prestashop/PRS20/PRS200492/130-home_default/customizable-mug.jpg",
            naam:"Soylent Green",
            description:"Plastic Bamboo Dustoan & Brush Black",
            rating:"★★★★★",
            price:"$32.44"
        }
    ]
    let newarr = document.getElementById('newarrive')
    newarr.innerHTML = newarrival.map(cards => `
    <div id="narrival">
        <img src=" ${cards.imag}" alt="">
        <p> <a href="#"> ${cards.naam} </a> </p>
        <h4> <a href="#"> ${cards.description} </a> </h4>
        <p" style="color: #f2b600;"> ${cards.rating} </p>
        <h4 style="color: #f6891a;"> ${cards.price} </h4>
    </div>`).join('')
    
    }
