import data from "../data";

export const handleParagraphType = (length) => {
  let text = [];
  let index = 0;
  while (text.length < length) {
    text.push(data[index]);
    index = (index + 1) % data.length;
  }
  return text;
};

export const hadleWordType = (length) => {
  let text = [];
  let wordList = data[0].split(" ");
  let paragraphIndex = 0;
  let wordIndex = 0;
  while (text.length < length) {
    text.push(wordList[wordIndex]);
    wordIndex = (wordIndex + 1) % wordList.length;
    if (wordIndex === 0) {
      paragraphIndex = (paragraphIndex + 1) % data.length;
      wordList = data[paragraphIndex].split(" ");
      wordList[0] = "\n\n" + wordList[0];
    }
  }
  return text;
};

export const handleCharacterType = (length) => {
  let text = "";
  let characters = data.join(" ");
  while (text.length < length) {
    text += characters;
  }
  return text;
};
