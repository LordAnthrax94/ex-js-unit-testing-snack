
function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto = nomeCompleto.split(" ");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlag(titolo) {
  if(!titolo){
    throw new Error("Il titolo non può essere vuoto");
  }
  return titolo.toLowerCase().replaceAll(" ", "-");
}

function avarage(numeri){
  let somma = 0;
  numeri.forEach(numero => {
    somma += numero;
  });
  return somma / numeri.length;
}

function isPalindrome(parola){
  const parolaInvertita = parola.split("").reverse().join("");
  return parola === parolaInvertita;
}

function findPostById(posts, id) {
  if(isNaN(id)){
    throw new Error(`"${id}" non è un ID valido`);
  }
  posts.forEach(post => {
    if(
      post.id === undefined ||
      post.title === undefined ||
      post.slug === undefined 
    ){
      throw new Error("L'array di post non è valido");
    }
  })
  return posts.find(post => post.id === id) || null;  
}


module.exports = {
  getInitials,
  createSlag,
  avarage,
  isPalindrome,
  findPostById
}