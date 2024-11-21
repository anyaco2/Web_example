var scroll=function(element, style, positions, value) {
    var colorsVal = [], val;

    colorsVal[0] = value[0].split(',').map(Number),
    colorsVal[1] = value[1].split(',').map(Number);

    element.style[style] = 'rgb('+ colorsVal[0].join(',')+')';

    window.onscroll = function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        pct = (window.pageYOffset - positions[0]) / positions[1],
        currentColor = [];

        if (window.pageYOffset <= positions[1] && window.pageYOffset >= positions[0]) {
            for (var i=0; i< colorsVal[0].length; i++) {
                if (colorsVal[0][i] < colorsVal[1][i]){
                    val = ((colorsVal[1][i] - colorsVal[0][i])*pct) + colorsVal[0][i];
                    currentColor[i] = Math.round(val);}
            
                else{
                    val = colorsVal[0][i] - ((colorsVal[0][i] - colorsVal[1][i])*pct);
                    currentColor[i] = Math.round(val);
                };
            };
            element.style[style] = 'rgb('+ currentColor.join(',')+')';
        };
    };
};

(function(){
    var obj = document.querySelector('.obj');
    scroll(obj, 'background-color', [0,1000], ['0,119,255', '188,24,136']);
})();