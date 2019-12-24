function findsubstr(long, short) {
  var count = 0; //total counts of substring present
  var matchedSubIndex = 0; //index of substring to be matched
  for (var i = 0; i < long.length; i++) {
    for (var j = matchedSubIndex; j < short.length; j++) {
      console.log(long[i], short[j], i, j);
      if (short[j] != long[i]) {
        //startover with substring to 0 index with new index from long string
        matchedSubIndex = 0;
        break;
      } else {
        if (matchedSubIndex == short.length - 1) {
          //reached end of substring and matched all character, reset to 0 and startover to find other counts
          matchedSubIndex = 0;
          count++;
          break;
        } else {
          //change parent long string index to match other character
          i++;
          //increment substring index too
          matchedSubIndex++;
        }
      }
    }
  }

  return count;
}

findsubstr('wowomgzomghjfhom', 'omg');
