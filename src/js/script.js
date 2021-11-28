const app = {
    a:document.querySelector('#a'),
    b:document.querySelector('#b'),
    orderWordsWithNum: function (words){
            if (words !== "" || words !== null){
                let newArr = [];
                let arr = words.split(" ");

                for (let i = 1; i<10; i++){
                    arr.forEach(elem=>{
                        if (elem.includes(i)){
                            newArr.push(elem);
                        }
                    });
                }

                newArr = newArr.toString()
                newArr = newArr.replace(/,/g," ");

                return newArr
            }
            else
            {
                return "";
            }
    },
    arrayDiff:function (a,b){
        let cambios = 1;
        while (cambios>0){
            cambios = 0;
            a.forEach(elemA => {
                b.forEach(elemB => {
                    if (elemA === elemB){
                        a.splice(a.indexOf(elemA),1);
                        cambios++;
                    }
                });
            });
        }
        return a;
    },
    renderApp: function (){
        this.orderWordsWithNum(this.a);
        this.arrayDiff(this.a.value,this.b.value);
    }
}

//app.renderApp();