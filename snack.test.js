const { getInitials, createSlag, avarage, isPalindrome,findPostById } = require("./snack.js");

test ("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
  expect(getInitials("Mario Rossi")).toBe("M.R.");
});

test ("La funzione createSlug restituisce una stringa in lowercase.", () => {
  expect(createSlag("Titolo CON Maiuscole")).toBe("titolo-con-maiuscole");
});

test("La funzione average calcola la media aritmetica di un array di numeri." , () => {
  expect(avarage([5, 15])).toBe(10)
})

test("La funzione createSlug sostituisce gli spazi con -." , () => {
  expect(createSlag("Titolo con spazi")).toBe("titolo-con-spazi");
})

test("La funzione isPalindrome verifica se una stringa è un palindromo." , () => {
  expect(isPalindrome("anna")).toBeTruthy();
  expect(isPalindrome("casa")).toBeFalsy();
})

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido." , () => {
  expect(() => createSlag("")).toThrow("Il titolo non può essere vuoto");
  expect(() => createSlag(null)).toThrow("Il titolo non può essere vuoto");
})

const post = [{
  id: 1,
  title: "Post di esempio",
  slug: "Contenuto-del-post-di-esempio"
},
{
  id: 2,
  title: "Un altro post",
  slug: "Contenuto-di-un-altro-post"
}];

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  expect(findPostById(post, 1)).toEqual({id: 1,title: "Post di esempio",slug: "Contenuto-del-post-di-esempio"});
  expect(findPostById(post, 3)).toBe(null);
  expect(() => findPostById(post, "ciao")).toThrow('"ciao" non è un ID valido');
  expect(() => findPostById([33, 40], 2)).toThrow("L'array di post non è valido");
})



 

 

 

