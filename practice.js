console.log("pattern 1")
function pattern1(){
for(let i=0; i<5; i++){
    let pattern=''
    for(let j=0; j<=i; j++){
        pattern +='*'
    }
    console.log(pattern);
}
}
pattern1();
console.log("################################################")
console.log("pattern 2")
function pattern2(){
for(let i=0; i<5; i++){
    let pattern=''
    for(let j=5; j>i; j--){
        pattern+='*';
    }
    console.log(pattern);
}
}
pattern2();

console.log("################################################")
console.log("pattern 3")
function pattern3(){
for(let i=0; i<5; i++){
    let pattern='';
    for(let j=5; j>i; j--){
        pattern+=' ';
    }
    for(let k=0; k<=i; k++){
        pattern+='*';
    }
    console.log(pattern);
}
}
pattern3();
console.log("################################################")
console.log("pattern 4")
function pattern4(){
    for(let i=0; i<5; i++){
        let pattern='';
        for(let j=0; j<i; j++){
            pattern+=' '
        }
        for(let k=5; k>i; k--){
            pattern+='*';
        }
        console.log(pattern);
    }
}
pattern4();
console.log("################################################")
console.log("pattern 5")
function pattern5(){
    for(let i=0; i<5; i++){
        let pattern=''
        for(let j=5; j>i; j--){
            pattern+=' '
        }
        for(let k=0; k<=i*2; k++){
            pattern+='*';
        }
        console.log(pattern);
    }
}
pattern5();
console.log("################################################")
console.log("pattern 6")
function pattern6(){
    for(let i=0; i<5; i++){
        let pattern='';
        for(let j=0; j<i; j++){
            pattern+=' '
        }
        for(let k=(4*2)-i; k>=i; k--){
            pattern+='*'
        }
        console.log(pattern);
    }
}
pattern6();
console.log("################################################")