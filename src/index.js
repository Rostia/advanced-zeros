module.exports = function getZerosCount(number, base) {
    var listResult = [];
    var result = 0;
    var listSimpleDevisor = simpleDevisor(base);
    var copyNumber = number;
    for(var key in listSimpleDevisor){
        while(copyNumber>0){
            copyNumber = Math.floor(copyNumber/key);
            result += copyNumber;
        }
        listResult.push(Math.floor(result/listSimpleDevisor[key]));
        copyNumber = number;
        result = 0;
    }
    return listResult.sort((a, b) => a - b)[0];
}
function simpleDevisor(n){
    var result = {};
    var devisor = 2;
    while(n !== 1){
        if(Math.sqrt(n) < devisor) {
            result[n] = (result[n] > 0) ? result[n]+1 : 1;
            n = 1;
        }
        if(n%devisor === 0){
            result[devisor] = (result[devisor] > 0) ? result[devisor]+1 : 1;
            n /= devisor;
            devisor = 2;
            continue;
        }
        devisor++;
    }
    return result;
}