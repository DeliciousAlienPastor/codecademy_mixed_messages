/* 
This program will generate a message that will suggest a song based on a randomly selected data, such as mood.
For example, the mood can be, sad, happy, angry etc.
Example of an output message - Mood: Sad; Genre: Rock; Song: November Rain
The outputs may not make sense in most cases (it is a randomized message generator)
*/

//arrays containing words of different categories
const mood = ['sad', 'happy', 'angry', 'depressed', 'loved', 'insecure', 'creative'];
const genre = ['rock', 'electronic', 'metal', 'classical', 'funk', 'hip-hop', 'children'];
const name = ['November Rain', 'Wild and Free', 'Superstition', 'Vivaldi\'s Winter', 'Holy Wars', 'Aerodynamic', 'Baby Shark'];

//random number generator (0 - number-1)
const rng = number => Math.floor(Math.random() * number);

//message generator function
const randomMessageGenerator = (mood, genre, name) => {
  //randomly select words from each array
  let moodIndex = rng(mood.length);
  let genreIndex = rng(genre.length);
  let nameIndex = rng(name.length);

  let moodWord = mood[moodIndex];
  let genreWord = genre[genreIndex];
  let nameWord = name[nameIndex];

  let output = `Mood: ${moodWord}\nGenre: ${genreWord}\nName: ${nameWord}`
  return output;
}

console.log(randomMessageGenerator(mood, genre, name));