
// window.localStorage.setItem('hello','tut');

// const { ready } = require("jquery")

// window.localStorage.getItem('hello')

// window.localStorage.removeItem('hello')

// console.log(window.localStorage.key())

// localStorage.clear();

// const someData = {
//     name:'Oleksandr'
// }

// window.localStorage.setItem('teacher', JSON.stringify(someData))

class LocalStorageCRUD{
    constructor(){

    }

    create(key, value){
        if(typeof(value) === 'Object'){
            window.localStorage.setItem(key, JSON.stringify(value));
        }else{
            window.localStorage.setItem(key, value);
        }
        
    }

    read(key){
       return  window.localStorage.getItem(key)
    }

    update(key, value){
        for(let index = 0; index<window.localStorage.length; index++){
            if(window.localStorage.key(index) === key){
                if(typeof(value) === 'Object'){
                    window.localStorage.setItem(key, JSON.stringify(value));
                }
            }
        }
        // window.localStorage.key[index]
        
    }
    delete(key){
        window.localStorage.removeItem(key)
    }

}


const crud = new LocalStorageCRUD()
const str = 'testing'
const num = 123
const arr = ['one', 'two', ' three']
const bool = false
const obj = { name: "Name", lastName:"Lastneymenko", child: {name: "maybe"}}
const arrObj = [{name:'name1'}, {name1:'name2'}]

crud.create('str', str)
crud.create('num', num)
crud.create('arr', arr)
crud.create('bool', bool)
crud.create('obj', obj)
crud.create('arrObj', arrObj)

crud.read('str') === str? console.log('str true'): console.log("str false")
parseInt(crud.read('num')) === num? console.log('num true'): console.log("num false")
crud.read('arr') == arr? console.log('arr true'): console.log("arr false")
crud.read('bool') === bool? console.log('bool true'): console.log("bool false")
crud.read('obj') == obj? console.log('obj true'): console.log("obj false")
crud.read('arrObj') == arrObj? console.log('arrObj true'): console.log("arrObj false")


const newObj = crud.read('obj')
const newarrObj = crud.read('arrObj')
console.log(newObj)
console.log(newarrObj)



crud.update('bool', bool)
crud.update('obj', 755)
crud.update('arrObj', 99)


crud.delete('bool')
// window.localStorage.setItem('arr', {key:"qwe", key1:"tut"})
// const obj = window.localStorage.getItem('obj');
// console.log(obj)
// create(key, value)
// ready(key)
// update(key, value)
// delete(key)
