

// for(let row=1;row<=5;row++){
//     for(let number=1;number<=row;number++){
//         process.stdout.write("1")
//     }
//     console.log();

// }

// for(let row=1;row<=5;row++){
//     let ans="";
//     for(let num=1;num<=row;num++){
//         ans=ans+" 1 ";
//     }
//     console.log(ans);


// }


/*
l11 row=ram=1
row<=5 1<=5 true
l12 ans=""
l13 num=ram=1
num<=row 
1<=1 true
l14 ans=ans+ 1 ""+1 "1"
num++ num=1+1=2
num<=row 2<=1 false
l16 1

row++ row=1+1=2
row<=5 2<=5 true
l12 ans=""
l13 num=1
num<=row 1<=2 true
l14 ans=ans+"1" " "+1 "1"
num++ num=1+1=2
num<=row 2<=2 true
l14 ans=ans+1 "1"+1 "11"
num++ num=2+1 =3
num<=row 3<=2 false
l16 "11"
row++


*/

// for(let row=1;row<=5;row++){
//     let ans="";
//     for(let num=1;num<=row;num++){
//         ans=ans+num;
//     }
//     console.log(ans);

// }



for(let row=1;row<=5;row++){
    for(let col=1;col<=5;col++){
        if(row+col==6 || row==col){
            process.stdout.write("*")

        }else{
            process.stdout.write(" ")
        }
      
    }
    console.log();
}
// let nsp=0;
// let nsp=4;
// for(let row=1;row<=5;row++){
//     //space
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }


//     //star
//     process.stdout.write("*")


//     //new line 
//     console.log();

//     //update nsp
//     nsp=nsp-1;

// }