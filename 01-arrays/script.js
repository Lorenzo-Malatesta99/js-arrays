const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log("Il terzo elemento di [teachers] ==> " + fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, "Patrick")
console.log("L'array con il quinto posto sostituito ==> " + teachers)

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log("L'array senza l'ultima stringa ==> " + teachers);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log("Il primo elemento di [teachers] salvato nella variabile firstTeacher ==> " + firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa")
console.log("Aggiunta di Vanessa alla fine di [teachers] ==> " + teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift("Sarah")
console.log("Aggiunta di Sarah all'inizio di [teachers] ==> " + teachers);

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log("Valore Booleano per capire se la stringa Fabio è presente dentro [teachers] ==> " + isFabioPresent);

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log("Indice di Lewis in [teachers] ==> " + lewisIndex);

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join();
console.log("Tutti gli elementi separati a una virgola in una stringa ==> " + teachersString)

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
// if (teachers.length == 0) {
//   console.log("L'array è vuoto");
// } else {
//   console.log("L'array non è vuoto");
// }

const isTeachersEmpty = (teachers.length === 0);
console.log("Valore booleano che ci dice se [teachers] è veramente vuoto o no ==> " + isTeachersEmpty);