var al={kosovo:"kl"};
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key]=value;
 return object;
}
function  deleteFromObjectByKey(object, key){
           delete object.key;
           return object;
}
function deleteFromObjectByKey(object, key)
{
  Object.assign({},object[key])
  delete object['key'];
  console.log(object);
}
