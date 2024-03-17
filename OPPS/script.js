//OPPS
//Factorty function
//return an objects

function createToy(name,dia,type,color,wrapper){
    return{
        name,
        dia,
        type,
        color,
        wrapper,
        buildToy: function () {
            console.log(`
            Start MAnufacturing ${name}
            Head is builing for ${dia} diameter
            Body type is build for ${type} Body
            Color of the toy is assigened to be ${color}
            Parcking the toy in ${wrapper}
            `);
            },
        info: function () {
            console.log(`I`m, ${name}, I was build in createtoy
        };
        })

    }
}
