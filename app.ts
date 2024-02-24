// lower case
let personName: string ="Farah"
console.log("lowercase:",personName.toLowerCase());

// uppercase
console.log("uppercase:",personName.toLocaleUpperCase());

// titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
