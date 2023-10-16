console.log('hey');

console.log('fjjsjd');

function removeLeadingTrailing(n) {
    n = n.replace(/^0+(?=\d\.)/, '');
    n = n.replace(/^0+/, '');
    const parts = n.split('.');
    if (parts.length === 2) {
        parts[1] = parts[1].replace(/0+$/, '');
        if (parts[1] === '') {
            return parts[0];
          }
      
          return parts.join('.');
        }
      
        return n;
      }
      console.log(removeLeadingTrailing("230.000"));
      console.log(removeLeadingTrailing("00402"));

      function testjackpot(arr) {
        return arr.every(element => element === arr[0]);
      }
      console.log(testjackpot(["abc", "abc", "abc", "abc"])); 
      console.log(testjackpot(["&&", "&", "&&&", "&&&&"])); 