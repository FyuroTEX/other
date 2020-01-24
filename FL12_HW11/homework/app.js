const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here


// for (let [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }



function getTitle(obj) {
  let path = document.createElement('div');
  
  obj.forEach(folder => {
    // const child = document.createElement('div');
    
    console.log(`${folder.title} folder: ${folder.folder ? 'true' : 'false'}`);

  
  

    folder.folder ? path.setAttribute('class', 'folder checkbox') : path.setAttribute('class', 'file');
    path.innerHTML = folder.title;

    rootNode.append(path);
    if (folder.children) {
      let pathChild = document.createElement('div');

      pathChild.append(getTitle(folder.children));
      // getTitle(folder.children);
      
    }

  })
path.append(this.pathChild);
}



function directory(obj) {

  getTitle(obj);

}

directory(structure);



