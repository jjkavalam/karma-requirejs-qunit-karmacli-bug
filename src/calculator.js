define(['trig'],function(trig){
    return {
        add : function(a,b){
            return a + b;
        },
        sin : function(x){
            return trig.sin(x);
        }
    };
});