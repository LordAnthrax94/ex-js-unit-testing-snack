const { getInitials, createSlag, avarage } = require("./snack.js");

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
  
})

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido." , () => {
  
})

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
  
})



 

 

 

