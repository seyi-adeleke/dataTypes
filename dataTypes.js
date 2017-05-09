exports.dataTypes = function(argument){
    if(typeof argument === "undefined" || typeof argument === "object"){
        return 'no value'
    }
    if(typeof argument === "boolean"){
        return argument;
    }
    if(typeof argument === "string"){
        return argument.length;
    }
    if(argument === 100){
        return "equal to 100";
    }
    if(argument < 100){
        return "less than 100";
    }
    if(argument > 100){
        return "more than 100";
    }

};