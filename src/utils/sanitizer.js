export  const sanitizer = (object) => {
let mod = {}


      if (typeof object !== 'object' || object === null) {
  return {}}


for (const clave in object) {

  const nuevaClave = clave
  
  if(clave !== 'password'){
    const modifiedValue = String(object[clave]).toLowerCase().trim()
    mod[nuevaClave] = modifiedValue
  }
  if(clave === 'password'){
    mod[nuevaClave] = object.password
  }
  
}
  return mod
}

