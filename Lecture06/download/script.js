//function download(url , callback){
//    let file = "some text"
//    setTimeout(() => {
//        callback(file);
//    }, 3000)
//}
//
//function resize(file , callback){
//    let file = "some text"
//    setTimeout(() => {
//        callback(file);
//    }, 3000)
//}
//
//download((file)
//         => {
//    resize()
//})


//function generateFunction(val , t){
//    var v;
//    const promise = new Promise((resolve,reject) => {
//        setTimeout(() => {
//            v = val;
//            console.log(val)
//        }, t*1000)
//    })
//}
//
//var promise = new Promise(generateFunction())
//promise(2,5)

const generatePromise = function(val,function(n)){
    const val = new Promise((resolve) => {
        setTimeout(() => {
            console.log(val);
        })
    })
}

function mapReduce(arr, fn) {
  return arr.reduce((acc, item) => {
    return [...acc, fn(item)]
  }, [])
}


const input = [{
  name:'Divyansh',
  github_id:'silent-lad'
},{
  name:'Abhishek',
  github_id:'abhishek97'
},{
  name:'Dhruv',
  github_id:'imdhruvgupta'
}]


mapReduce(input, el => el.github_id)