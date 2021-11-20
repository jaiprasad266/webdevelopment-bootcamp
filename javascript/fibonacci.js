function fibonacciGenerator(n)
{

    var arr = [];
    var f1 = 0;
    var f2 = 1;
    if(n>=1){
        arr.push(f1);
    }
    if(n>=2){
        arr.push(f2);
    }

    if(n>2){
        for(let i=3;i<=n;i++){
            var f3 = f1 + f2;
            arr.push(f3);
            f1=f2;
            f2=f3;
        }
    }

    console.log(arr);

}

fibonacciGenerator(1);