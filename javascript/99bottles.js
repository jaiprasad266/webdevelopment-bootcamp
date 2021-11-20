function beer() {

    var i = 99

    while(i>=0){
        if(i === 0){
            console.log("No more bottles of beer on the wall, no more bottles of bear. Go to the store and buy some more , 99 bottles of beer on the wall");
        }if(i === 1){
            console.log( i + " bottles of beer on the wall, "+ i +" bottle of bear. take 1 down , pass it around , no more bottles of beer on the wall");
        }else{
            console.log(i + " bottles of beer on the wall, " + i +" bottles of bear. take 1 down , pass it around , "+ i-1 +" bottles of beer on the wall");
        }
        i--;
    }

}

beer();