
function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto = nomeCompleto.split(" ");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlag(titolo) {
  return titolo.toLowerCase()
}

module.exports = {
  getInitials,
  createSlag

}