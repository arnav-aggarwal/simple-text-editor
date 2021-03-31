function processData(input) {
  const snapshots = [''];
  const lines = input
    .split('\n')
    .map(thisLine => thisLine.split(' '));

  for(let i = 1; i < lines.length; i++) {
    const [operation, value] = lines[i];
    const str = snapshots[snapshots.length - 1];

    switch(operation) {
      case '1':
        snapshots.push(str + value);
        break;
      case '2':
        snapshots.push(str.slice(0, str.length - Number(value)));
        break;
      case '3':
        console.log(str[Number(value) - 1]);
        break;
      case '4':
        snapshots.pop();
    }
  }
}

processData(
`8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`
);
