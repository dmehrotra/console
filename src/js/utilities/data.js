'use strict'
function Data(){
	this.data = json;
}
var json = [
{
  "type":'file',
  "name":"hello.txt",
  "path":"/hello.txt",
  "content": "hello world"
},
{
  "type":'file',
  "name":"hello2.txt",
  "path":"/hello2.txt",
},
{
  "type": 'folder',
  "name": 'parents',
  "path": '/parents',
  "files":[
  {
    "name":"parents.txt",
    "path":"/parents/parents.txt",
    "content":"We are your parents"
  }
  ],
  "folders":[
  {
    "name":"mom",
    "path":"/parents/mom",
    "files":[
    {
      "name":"mom.txt",
      "path":"/parents/mom/mom.txt",
      "content":"I am Your Mommy"
    },
    {
      "name":"mom2.txt",
      "path":"/parents/mom/mom2.txt",
      "content":"I am Your Mommy2"
    }

    ],
  },
  {
    "name":"dad",
    "path":"/parents/dad",
    "files":[
    {
      "name":"dad.txt",
      "path": "/parents/dad/dad.txt",
      "content":"I am Your Daddy"
    }
    ]
  }
  ]
}
]