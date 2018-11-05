/* package data and constructor objects */
// add three more packages to the data
// Package data array (simulated data source, such as JSON or database recordset)
var data = [
      {
        name: 'emmet',
        description: 'emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.iopackages/emmet',
        downloads: 1662209,
        stars: 2534,
        selectors: 'p1'
      },
      {
       name: 'atom-beauty',
       description: 'the atom-beautify package will clean up your code, and make i',
       author: 'Glavin001',
       url: 'https://satom.io/packages/atom-beautify',
       downloads: 4228040,
       stars: 4541,
       selectors: 'p2'
     }
];

// (Atom) Package constructor function
 function Package(data)
{
 this.name = data.name;
 this.description = data.description;
 this.author = data.author;
 this.url = data.url;
 this.downlads = data.downloads;
 this.stars = data.stars;
 this.selectors =data.selectors;

 this.getformattedDownloads = function (){
 return this.downloads.toLocaleString();
   };
 this.getformattedStars = function (){
   return this.stars.toLocaleString();
 };
  var writePackageinfo = function(package){
      // Get reference to the DOM elements
      var selector = package.selector,
      nameEl = document.getElementById(selector + '-name'),
      descEl = document.getElementById(selector + '-description'),
      authorEl = document.getElementById(selector + '-author'),
      downloadEl = document.getElementById(selector + '-downloads'),

    //write package data to DOM elements
     nameEl.textContent = package.name;
     descEl.textContent = package.description;
     //ToDo: the rest of the properties
 }

 // Write Package data
 var 'emmet' = new Package(data[0]);
 writePackageInfo(emmet);
