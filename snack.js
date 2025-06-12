
function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto = nomeCompleto.split(" ");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlag(titolo) {
  return titolo.toLowerCase().replaceAll(" ", "-");
}

function avarage(numeri){
  let somma = 0;
  numeri.forEach(numero => {
    somma += numero;
  });
  return somma / numeri.length;
}

module.exports = {
  getInitials,
  createSlag,
  avarage

}