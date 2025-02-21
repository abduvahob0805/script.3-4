

const card=document.getElementById("card")
const btn=document.getElementById("btn")

async function users(){
   const javob=  await fetch('https://randomuser.me/api/');
   const odam= await javob.json();
   console.log(odam.results[0]);
   userChisiz(odam.results[0]);
}
users()




function userChisiz(odam){
    card.innerHTML=`
     <img src="${odam.picture.large}" alt="">
            <div class="text">
                <h1>${odam.name.title} ${odam.name.first} ${odam.name.last}</h1>
                <h3>Frontend Developer</h3>
            </div>
                
                <div class="line">
                    <p></p>
                    <p></p>
                </div>

            <div class="information">
                <p>Phone: ${odam.phone} </p>
                <p>Manzil: ${odam.location.country} ${odam.location.city} </p>
                <p>Yosh: ${odam.dob.age} </p>
                <p>Email: ${odam.email} </p>
            </div>
            <button class="btn" id="btn">Change users</button>
    
    `;
}


btn.addEventListener("click",()=>{
    users();
    
})

