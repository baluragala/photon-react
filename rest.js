function sum(...args) {
  let total = 0;
  args.forEach(a => (total += a));
  return total;
}

console.log(sum(1, 2, 3, 4));
'use strict';

var user = { first: 'bala',
     last: 'ragala'
};
var firstName = user.first,
    last = user.last,
    _user$email = user.email,
    email = _user$email === undefined ? 'na' : _user$email,
    _user$address = user.address;
_user$address = _user$address === undefined ? {} : _user$address;
var _user$address$state = _user$address.state,
    state = _user$address$state === undefined ? 'aa' : _user$address$state;


var team = ['manager', 'leader', 'mem1', 'mem2'];

var a = team[0],
    b = team[1],
    c = team[2],
    d = team[3];