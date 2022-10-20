
function countDown(){
  for(let i = 0; i<=10;i++){
    setTimeout(()=>{
      console.log(10 - i)
    },1000*i)
  }
}


export default countDown