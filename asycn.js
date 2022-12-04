//  console.log('person1:shoes ticket');
//  console.log('person2:shoes ticket');
   
// const promisewifebrinticket=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// })
//   let wifehungry=promisewifebrinticket.then((t)=>{
// console.log('wife bring ticket');
// console.log('husbund:shoud we go in');
// console.log('wife:im hungry');
// return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
//   })


//   let wifewantbutter=wifehungry.then((t)=>{
//     console.log('she want butter');
// return new Promise((resolve,reject)=>resolve(`${t} butter`))
// })
// wifewantbutter.then((t)=>console.log(t))



// const premovie= async ()=>{
//     const promisewifebrinticket=new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              resolve('ticket');
//              },3000)
//          })
//          const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
//          const getbutter=new Promise((resolve,reject)=>resolve(`butter`))
//          const getcolddrink=new Promise((resolve,reject)=>resolve(`colddrink`))
//          let ticket=await promisewifebrinticket;
//          console.log(`wife bring ${ticket}`);
//  console.log('husbund:shoud we go in');
//  console.log('wife:im hungry');
// let pop=await getpopcorn;
// console.log(`i got${pop}`);
// let butt=await getbutter;
// console.log(`i got some ${butt}`);
// let cold=await getcolddrink
// console.log(`i got ${cold}`);
// return ticket

// }
// premovie().then((m)=>console.log(`person3:got ${m}`))

// console.log('person4:shows ticket');
// console.log('person5:shows ticket');


// const premovie= async ()=>{
//     const promisewifebrinticket=new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              resolve('ticket');
//              },3000)
//          })
//          const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
//          const getbutter=new Promise((resolve,reject)=>resolve(`butter`))
//          const getcolddrink=new Promise((resolve,reject)=>resolve(`colddrink`))
//          let ticket=await promisewifebrinticket;
//          let [pop,butt,drink]=await Promise.all([getpopcorn,getbutter,getcolddrink])
//          console.log(`${pop},${butt},${drink}`);
// return ticket

// }
// premovie().then((m)=>console.log(`person3:got ${m}`))
// console.log('person4:shows ticket');
// console.log('person5:shows ticket');


// const premovie= async ()=>{
//          const promisewifebrinticket=new Promise((resolve,reject)=>{
//               setTimeout(()=>{
//                   reject('ticket');
//                   },3000)
//             })
//             let ticket;
//             try{
//                 ticket=await promisewifebrinticket;
//             }
//             catch(e){
// ticket='sad face'
//             }
//             return ticket;
//         }
//         premovie().then((m)=>console.log(`person3:got ${m}`))



const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
];


function getposts(){
    setTimeout(()=>{
        let output=''
        posts.forEach((post) => {
            output += `<li>${post.title} created .</li>`;
        });
        document.body.innerHTML=output
    },1000)
}


function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve();
        },1000)
    })
}


async function init(){
await createpost({title:'post three',body:'this is post three'})
getposts();
await deletepost()
getposts();
}


init()


function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                posts.pop();
                resolve()
            }else{
                reject('array is empty')
            }
        },2000)
    })
}