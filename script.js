let users = [
    {
      prenom: "jacque",
      nom: "John",
      telephone: "772236534",
      email: "jacque@gmail.com",
      solde:0,
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      transactions: [
        // { numero: 1, date: "12-04-2022", montant: 100000, sens: 1 },
        // { numero: 2, date: "22-11-2022", montant: 2000, sens: -1 },
      ],
    },
    {
      prenom: "alice",
      nom: "dah",
      telephone: "773458267",
      email: "alice@gmail.com",
      solde:0,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      transactions: [
        // { numero: 10, date: "12-04-2022", montant: 100000, sens: -1 },
        // { numero: 20, date: "22-11-2022", montant: 2000, sens: 1 },
        // { numero: 30, date: "01-01-2023", montant: 45000, sens: 1 },
      ],
    },
    {
      prenom: "Mickel",
      nom: "robish",
      telephone: "771234567",
      email: "Mickel@gmail.com",
      solde:0,
      photo: "https://images.unsplash.com/photo-1563721572772-fbf713fff374?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      transactions: [
        // { numero: 6, date: "08-04-202", montant: 50200, sens: -1 }
      ],
    },
    {
      prenom: "Asta",
      nom: "diop",
      telephone: "771236709",
      email: "SyllaAsta@gmail.com",
      solde:0,
      photo: "https://images.unsplash.com/photo-1633419798503-0b0c628f267c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      transactions: [
        // { numero: 6, date: "08-04-202", montant: 50200, sens: -1 },
      // { numero: 13, date: "18-04-2023", montant: 50200, sens: 1 },
      // { numero: 10, date: "18-09-2022", montant: 5000, sens: 1 },
      // { numero: 10, date: "18-09-2022", montant: 5000, sens: -1 },
  
  ],
    },
    {
      prenom: "fatou",
      nom: "Sylla",
      telephone: "771236909",
      email: "SyllaAsta@gmail.com",
      solde:0,
      photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFuJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      transactions: [
      // { numero: 6, date: "08-04-202", montant: 50200, sens: -1 },
      // { numero: 13, date: "18-04-2023", montant: 50200, sens: 1 },
      // { numero: 10, date: "18-09-2022", montant: 5000, sens: 1 },
      // { numero: 10, date: "18-09-2022", montant: 5000, sens: -1 },
  
  ],
    },
  ];
  getData(users)
  function savedata() {
    localStorage.setItem('users',JSON.stringify(users))
  }
function getData(data) {
  const objetData = localStorage[data]
  if (objetData) {
    return JSON.parse(objetData)
  }
  return []
  
}


  savedata(users)
  let lastname = document.querySelector("#lastname");
  let firstname = document.querySelector("#firstname");
  let phone = document.querySelector("#phone");
  let email = document.querySelector("#email");
  let code = document.querySelector("code");
  let montant = document.querySelector("#mnt");
  let btnenregistrer = document.querySelector(".enregistrer");
  let btnnext = document.querySelector(".next");
  let table = document.querySelector("table");
  let btnDetail = document.querySelector('#btnDetail')
  let form =document.querySelector('.form')
  let solde =document.querySelector('#solde')
  let head1 = document.querySelector('.head1')
  let container = document.querySelector('.container')
  let inputphone = document.querySelector('#inputphone')
  let btnsave = document.querySelector('#btnsave')
  let selecttrans = document.querySelector('#trans')
  let notification = document.querySelector('.notification')
  let search = document.querySelector('#search')
  let index = randomPos(users.length)
// ajouter des utilisateurs dans notre projet
  let addnom = document.querySelector('#addnom')
  let addprenom = document.querySelector('#addprenom')
  let addphone = document.querySelector('#addphone')
  let addemail = document.querySelector('#addemail')
  let addsolde = document.querySelector('#addsolde')
  let addphoto = document.querySelector('#addphoto')
  let btnadd = document.querySelector('.btnadd')
  let newIdUser = users[index].transactions.length






// fin ajout
  function printUser(user) {
    const img=document.querySelector('img');
    const photoEl=document.querySelector('.photo');
    const tbody=document.querySelector('tbody');
    let photo=new Image();
    photo.src=user.photo;
    photoEl.innerHTML=photo.outerHTML;
    head1.style.display = 'block'
    container.style.display = 'none'
    photo.onload=()=>{
      head1.style.display = 'none'
      container.style.display = 'flex'
        // desactiver le spinner
        // alert('image chargée')
        //afficher les informations du user
        lastname.innerHTML = `${user.nom}`
        firstname.innerHTML = `${user.prenom}`
        email.innerHTML = `${user.email}`
        phone.innerHTML = `${user.telephone}`
        lastname.innerHTML = `${user.nom}`
        solde.innerHTML = `${user.solde}`
        code.innerHTML = `${user.transactions.length}`
        // afficher les transactions
        tbody.innerHTML="";
        user.transactions.forEach(trans=>{
            tbody.innerHTML+=` <tr>
            <td>${trans.numero}</td>
            <td>${trans.date}</td>
            <td>${trans.sens=='1'?'depot':'retrait'}</td>
            <td>${trans.montant}</td>
        </tr>`
        });


        
    }

    
  }
  printUser(users[index]);
  function randomPos(max) {
    return Math.floor(Math.random()*max);
}
btnnext.addEventListener('click',()=>{
  posCourant=randomPos(users.length);
  printUser(users[posCourant]);
  
})

btnsave.addEventListener('click',()=>{
  // solde.innerText = parseInt(solde.innerText) - parseInt(montant.value)
  let usercourant=users[index];
  if (montant.value =='' || montant.value<0) {
    myalert("vos champs ne peuvent pas etre vides ou negatifs !",'','700px')
    return
  }
  // depot 
  if (montant.value!='' && selecttrans.value=='d'&& montant.value>=500 && inputphone.value=='') {
    // let usercourant=users[index];
    myalert("depot avec succes",'green','900px')
    usercourant.transactions.push(
        {
          numero:newIdUser,
          date:new Date().toLocaleDateString(),
          montant:+montant.value,
          sens:1
        }
      )
      newIdUser++
  printUser(users[index]);
  usercourant.solde = parseInt(solde.innerText) + parseInt(montant.value)

  }
  if (montant.value!='' && selecttrans.value=='d'&& montant.value<500 && inputphone.value=='') {
    myalert(" le montant à deposer doit etre superieur ou egal a 500",'','600px')

  }
  if (montant.value!='' && selecttrans.value=='d'&& montant.value>=500 && inputphone.value!='') {
    usercourant.solde = parseInt(solde.innerText) - parseInt(montant.value)
    transfererMontant(inputphone.value,montant.value)
  }
  // retrait
  if (montant.value > usercourant.solde && selecttrans.value=='r') {
    myalert("votre solde est insuffisant",'','700px')

  }
  if (montant.value < 500 && selecttrans.value=='r') {
    myalert(" le montant à retirer doit etre superieur ou egal a 500",'','600px')

  }
  if (montant.value < 500 && selecttrans.value=='d' && inputphone!='') {
    myalert(" le montant à transferer doit etre superieur ou egal a 500",'','700px')

  }
  
  if (montant.value <= usercourant.solde && selecttrans.value=='r' && montant.value >=500) {
    myalert("retrait avec succes ! ",'green',taille='900px')

    usercourant.transactions.push(
      {
        numero:newIdUser,
        date:new Date().toLocaleDateString(),
        montant:-montant.value,
        sens:-1
      }
    )
    newIdUser++
printUser(users[index]);
usercourant.solde = parseInt(solde.innerText) - parseInt(montant.value)
  }

console.log(index);
})
btnDetail.addEventListener('click',()=>{
  if (form.style.display == 'block') {
      form.style.display = 'none'
  }
  else{
      form.style.display = 'block'
  }
  
  })
  function myalert(message="",color='',taille) {
    notification.innerText =message
    notification.style.left =taille
    notification.style.backgroundColor =color
    setTimeout(()=>{
      notification.style.left= "-5000px";

    },3000)
  }

  function trouverUtilisateurParTelephone(telephone) {
    return users.find((user) => user.telephone === telephone);
  }
  
  // Traitement du transfert
  function transfererMontant(destinataire, montant) {
    const utilisateurDestinataire = trouverUtilisateurParTelephone(destinataire);
    const  utilisateurExpediteur= users[index];
    // Vérification si l'utilisateur existe et s'il a suffisamment de fonds pour le transfert
    if (!utilisateurDestinataire) {
    //  setTimeout(function(){
    //     utilisateurExpediteur.solde -= montant;
    //     utilisateurExpediteur.transactions.push({
    //     numero:11,
    //     date:new Date().toLocaleDateString(),
    //     montant:-montant,
    //     sens:-1

    //   });
    //  },3000)
    //  utilisateurExpediteur.solde += montant
     
    } else if (parseInt(solde.innerText) < parseInt(montant)) {
      myalert("Fonds insuffisants !","",'700px');
      return
    } 
    else {
      // // Ajout de la transaction d'expédition
      utilisateurExpediteur.transactions.push({
        numero:newIdUser,
        date:new Date().toLocaleDateString(),
        montant:-montant,
        sens:-1

      });
      newIdUser++
      // Ajout de la transaction de réception
      utilisateurDestinataire.transactions.push({
        numero:newIdUser,
        date:new Date().toLocaleDateString(),
        montant:montant,
        sens:1

      });
      newIdUser++
      myalert(`Transfert de ${montant} FCFA réussi à ${utilisateurDestinataire.nom} ${utilisateurDestinataire.prenom} !`,'green','650px');
      utilisateurDestinataire.solde = parseInt(solde.innerText) + parseInt(montant)
      utilisateurExpediteur.solde = parseInt(solde.innerText) - parseInt(montant)
    }
    printUser(utilisateurDestinataire)
  }
  let phonesuggestion = document.querySelector('#phonesuggestion')
  inputphone.addEventListener('input',()=>{
    let phonesaisit = inputphone.value
    const telephoneSuggestions = users
      .filter((user) => user.telephone.startsWith(phonesaisit))
      .map((user) => user.telephone);
      // on efface les suggestions precedentes
      phonesuggestion.innerHTML = ''
       // Créez une liste déroulante des suggestions de téléphone
    if (phonesaisit.length >= 3) {

      const select = document.createElement("select");
      select.classList.add('from-control')
      select.setAttribute("id", "telephoneSuggestionsSelect");
      select.addEventListener("click", handleTelephoneSelection);
      telephoneSuggestions.forEach((telephoneSuggestion) => {
        const option = document.createElement("option");
        option.setAttribute("id", telephoneSuggestion);
        option.innerHTML = telephoneSuggestion;
        select.appendChild(option);
      });
      select.selectedIndex = 0
      phonesuggestion.appendChild(select);
     
    }
  })
  function handleTelephoneSelection() {
    // Récupérez la valeur sélectionnée dans la liste déroulante
    const selectedTelephone = document.getElementById("telephoneSuggestionsSelect").value;

    // Affichez la valeur sélectionnée dans le champ de saisie de texte
    inputphone.value = selectedTelephone;
    
    // Effacez les suggestions de téléphone
    phonesuggestion.innerHTML = "";
  }

search.addEventListener("input",()=>{
  const searchvalue = search.value
  // on fait la recherche
  let utilisateur = users.find(user=>user.prenom===searchvalue)
  if (utilisateur) {
    printUser(utilisateur)
    search.value = ''
  }
  let phoneutilisateur = users.find(user=>user.telephone===searchvalue)
  if (phoneutilisateur  && searchvalue.length==9) {
    printUser(phoneutilisateur)
    search.value = ''
  }
  let nomutilisateur = users.find(user=>user.nom===searchvalue)
  if (nomutilisateur) {
    printUser(nomutilisateur)
    search.value = ''
  }
  let emailutilisateur = users.find(user=>user.email===searchvalue)
  if (emailutilisateur) {
    printUser(emailutilisateur)
    search.value = ''
  }
  // if (!utilisateur && searchvalue.length<7) {
  //   myalert('utilisateur inexistant','','750px')
  //   // search.value = ''
  // }

})
document.querySelector('.add-user').addEventListener('click',()=>{
  if (document.querySelector('.add-user-content').style.display == 'flex') {
    document.querySelector('.add-user-content').style.display = 'none'
  }
  else{
    document.querySelector('.add-user-content').style.display = 'flex'
  }
  
  })

btnadd.addEventListener('click',()=>{
  let addnomvalue =addnom.value
  let addprenomvalue =addprenom.value
  let addphonevalue =addphone.value
  let addemailvalue =addemail.value
  let addsoldevalue =addsolde.value
  let addphotovalue =addphoto.value
  if (addnom.value===''|| addprenom.value===''||addphone.value===''||addemail.value===''|| addsolde.value==='' || addphoto.value==='') {
    myalert("veiller remplir tous les champs",'','600px')
  }
 else{
 let usercourant = users[randomPos(users.length)]

  users.splice(
    index,0,
    {
      prenom:addprenomvalue,
      nom:addnomvalue,
      telephone:addphonevalue,
      email:addemailvalue,
      solde:addsoldevalue,
      photo:`${addphotovalue}`,
      transactions:[]

    }
    )
    addDepot(usercourant,addsoldevalue)
  myalert("utilisateur ajouté avec succés",'green','600px')


 }
 
  addemail.value = ''
  addnom.value = ''
  addphone.value = ''
  addsolde.value = ''
  addprenom.value = ''
  addphoto.value = ''
 
})

function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
const validate = () => {
  email = document.querySelector("#addemail").value;

  if (checkEmail(email)) {
  } else {
      myalert('Adresse e-mail non valide','','700px');
  }
  return false;
}

function addDepot(utilisateur,montant) {
  utilisateur.solde +=montant;
  utilisateur.transactions.push({
    numero:newIdUser,
    date:new Date().toLocaleDateString(),
    montant:montant,
    sens:1
   })
   newIdUser++
}