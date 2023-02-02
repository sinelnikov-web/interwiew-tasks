
function sort(arr, comparator) {

}

const skills = [
    {
        name: 'fireball',
        need: ['firehands', 'magicspell']
    },

    {
        name: 'firehands'
    },

    {
        name: 'magicspell'
    },

    {
        name: 'inferno',
        need: ['fireball', 'crazymind']
    },

    {
        name: 'crazymind',
        need: ['magicspell']
    }
];

/*
[
  {
    name: 'firehands'
  },

  {
    name: 'magicspell'
  },

  {
    name: 'crazymind',
    need: ['magicspell']
  }

  {
    name: 'fireball',
    need: ['firehands', 'magicspell']
  },

  {
    name: 'inferno',
    need: ['fireball', 'crazymind']
  }
]
*/
console.log(sort(skills, ({name, need}) => [name, need]));