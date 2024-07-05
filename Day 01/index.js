
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");
// console.log("vikas");


// for(let i=1;i<=10;i=i+1){
//     console.log("vikas",i);


// }
// console.log("loop k bahar aagya m qki upar cond m false aagya ");
/*
** loop init - ek baar chalega bas
l10 i=ram=1
i<=10 1<=10 1<10 true
l11 vikas 1
i=i+1 1+1=2
i<=10 2<=10 true
l11 vikas 2
i=i+1 2+1=3
i<=10 3<=10 true
l11 vikas 3
i=i+1 3+1=4
i<=10 4<=10 true
...


i=10
i<=10 10<=10 10<10 false 10=10 true
l11 vikas 10
i=i+1 10+1=11
i<=10 11<=10 11<10 false 11=10 false


l15






*/
// let i=5
// for(;false;){
//     console.log("vikas",i);
//     i=i+5
// }
// console.log("loop k bahar ");

/*
l48 i=ram=5
i<=25 5<=25 5<25 true
l49 vikas 5
i=i+5 5+5=10
i<=25 10<=25 10<25 true
l49 vikas 10
i=i+5 1-+5=15
i<=25 15<=25 true
l49 vikas 15
i=i+5 15+5=20
i<=25 20<=25 true
l49 vikas 20
i=i+5 20+5=25
i<=25 25<=25 25<25 false 25=25 true
l49 vikas 25
i=i+5 25+5=30
i<=25 30<=25 30<25 false 3-=25 false


l51

*/

// let i=10;
// while(i<=15){
//     console.log("vikas",i);
//     i=i+1;



// }


// let i=2;
// while(0){
//     console.log("vikas",i);
//     i=i+1;


// }
// console.log("loop k bahar ");

/*
l88 i=ram=2
l89 i<=10 2<=10 true
l90 vikas 2
l89 i<=10 2<-10 true



*/

// let i=1;
// do{
//     console.log("vikas",i);
//     i=i+1;
// }
// while(i>10)

// for(let row=1;row<=5;row=row+1){
//     for(let star=1;star<=row;star=star+1){
//         process.stdout.write("*")
//     }
//     console.log();

// }

/*
l114 row=1
row<=5 1<=5 true
l115 star=1
star<=row 1<=1 true
l117 *
     ** 

star=star+1 1+1=2
star<=row 2<=1 false
l119 
row=row+1 1+1=2
row<=52<=5 true
l115 star=1 star<=row 
1<=2 true
l117 
star+1 star=2
star<=row 2<=2 true
l117 
1star+1 2+1=3
star<=row 3<=2 false
l119 


*/


// 
// for(let row=1;row<=5;row=row++){
//     for(let star=1;star<=5-row+1;star=star++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// let nsp=0;
// let nst=5;

// for(let row=1;row<=5;row++){
//     //spaces
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ")
//     }

//     //stars
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*");
//     }

//     //new line 
//     console.log();
//     //update nsp nst
//     nsp=nsp+1;
//     nst=nst-1;
// }

// let nsp=4;
// let nst=1;
// for(let row=1;row<=5;row++){
//     //space

//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write(" ");
//     }
//     //stars
//     for(let st=1;st<=nst;st++){
//         process.stdout.write("*");

//     }
//     //new line 
//     console.log();
//     //update 
//     if(row<3){
//         nsp=nsp-1;
//         nst=nst+2;
//     }else{
//         nsp=nsp+1;
//         nst=nst-2;
//     }
// }

let nsp=0;
let nst=5;
for(let row=1;row<=5;row++){
//spacer[]
for(let sp=1;sp<=nsp;sp++){
    process.stdout.write(" ");
    
}

for(let st=1;st<=nst;st++){
    process.stdout.write("* ");
}


///stars

// new line 
console.log();

//update 
nsp=nsp+1;
nst=nst-1;
}