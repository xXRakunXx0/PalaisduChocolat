

fetch("chocolatier.json")
  .then((response) => response.json())
  .then((data) => {
    AfficherLeSlogan(data);
    AfficherLesProduit(data.produits);
    AfficherLeNEntreprise(data);
    AfficherBene(data.listeBeneficesClients);
    AfficherAvisClient(data.clients);
    
  });




// Function pour afficher le nom du entreprise (Header)

function AfficherLeNEntreprise(donnee) {
  // console.log(entreprise.produits);

  document.getElementById("Header").innerHTML += `
    
     <ul class="flex textCenter spaceBetween alignCenter" id="Header">
                <p class="paraHeader">
                    ${donnee.nomEntreprise}
                </p>
                <li><a href="#Acceuil" class="coleurHeader">Acceuil</a></li>
                <li><a href="#Produits" class="coleurHeader">Produit</a></li>
                <img src="asset/logo-chocolat-2.png" alt="" class="w15 logoColor">
                <li><a href="#Benefice" class="coleurHeader">Nos bénefices</a></li>
                <li><a href="#Client" class="coleurHeader">Nos clients</a></li>
            </ul>
    
    `;
}

// Function pour afficher le slogan
function AfficherLeSlogan(donnee) {
  // console.log(slogan.produits);

  document.getElementById("containerCarte").innerHTML += `
    
     <section class="hero">
            <div class="textCenter">
                <h1>${donnee.slogan}</h1>
                <a href="" class="btm BlurAndBgc top20 marginAuto">${donnee.bouton}</a>
            </div>
        </section>
    
    `;
}

// Function pour afficher les produit

function AfficherLesProduit(tableauDeProduit) {
  tableauDeProduit.forEach((produit) => {
    document.getElementById("CarteProduit").innerHTML += `
                  <div class="carte top20" data-aos="flip-right" data-aos-duration="2000">
                    <div class="">
                        <img src="${produit.imageurl}" alt="" class="w100 imgCarte">
                        <div class="marginLeft">
                            <h3>${produit.titre}</h3>
                            <p class="top40 para1">${produit.presentation}</p>
                        </div>
                    </div>
                    <div class="TextRight">
                        <a href="" class="btmAcheter">Acheter</a>
                    </div>
                </div>
      `;
  });
}

// Function pour afficher les Benefice

function AfficherBene(tableauBenefice) {
  tableauBenefice.forEach((bene) => {
    document.getElementById("CarteBene").innerHTML += `
    
    
                <div class="carteBene textCenter" data-aos="fade-up" data-aos-duration="3000">
                    <div>
                        <img src="${bene.urlImg}" alt="" class="w100"> 
                        <p class=" marginAuto para2">${bene.txt}</p>
                    </div>
                </div>
            
    `;
  });
}


// Function qui permet tranformer la note en etoile


function Etoile(note){

let etoiles = ""

  if(note == 5){
   etoiles='★★★★★'
  }else if(note == 4){
    etoiles='★★★★✩'
  }else if(note == 3){
    etoiles='★★★✩✩'
  }else if(note == 2){
    etoiles='★★✩✩✩'
  }else if(note == 1){
    etoiles='★✩✩✩✩'
  }

  return etoiles
}




// Function pour afficher les avis client

function AfficherAvisClient(tableauAvisClient) {
  tableauAvisClient.forEach((avis) => {

    let note = Etoile(avis.note)

    document.getElementById("AvisClient").innerHTML += `
    
                      <div class="carteAvisClient top20" data-aos="flip-down" data-aos-duration="2000">
                        <div class="flex alignCenter">
                            <img src="${avis.imgProfil}" alt="" class="w20">
                            <p class="marginLeft">${avis.nom}</p>
                        </div>
                        <p class="note">${note}</p>
                        <p class="type top10">${avis.typePrestation}</p>
                        <p class="commentaire">${avis.commentaire}</p>
                    </div>
                </div>
    
    `;
  });
}



// Animation

AOS.init();
