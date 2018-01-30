const multi = (number, max)=>{
    for (let i=1; i<=max; i+=1 ) {
        console.log(`${number} X ${i} = ${(i*max)}`);
    }
};
const number = parseInt(process.argv[2]);
const max = parseInt(process.argv[3]);
if (number && max) {
    multi(number, max);
}else{
    console.log('[error]: multi <number> <number>');
}