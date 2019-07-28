const promisify = function (fn){
    return function(){
        fn(...arguments,(err,result) =>{
            if(err)
            {return reject(err)}
            
            resolve(result)
        })
    }
}