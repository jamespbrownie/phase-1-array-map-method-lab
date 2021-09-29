const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




const titleCased = (array) => {
  const casedTutorials = array.map((aString) => {
    let splitString = aString.split(" ")
    splitString.map((aWord) => aWord[0].toUpperCase())
    return splitString.join(' ')

  })
}



















// const titleCased = () => {
//   return tutorials
// }

// const titleCased = (array) => {
//   return tutorials.map( tutorial => {
//     //separate all words in string into their own strings
//     let words = tutorial.split(' ') 
//     //capitalize first letter of word
//     let capitalizedWords = 
//       words.map( word => word.charAt(0).toUpperCase() + word.slice(1))
//     //rejoin words back into one string
//     let response = capitalizedWords.join(' ')
//     //return all strings as new array 
//     return response
   
//   })

// }