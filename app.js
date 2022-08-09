function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a+b+c+d+e;
                }
            }
        }
    }
}
let passingValueA = sum(11);
let passingValueB = passingValueA(22);
let passingValueC = passingValueB(33);
let passingValueD = passingValueC(7);
document.write(passingValueD(27));
