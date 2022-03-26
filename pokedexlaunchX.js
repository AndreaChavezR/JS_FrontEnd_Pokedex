const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let name = data.name;
            pname(name);
            console.log(name);

            let alt = data.height;
            pokealtura(alt/10);
            console.log(alt);

            let peso = data.weight;
            pokepeso(peso);
            console.log(peso);
            
            let tipo = data.types.map(typ => typ.type.name);
            poketipo(tipo);
            console.log(tipo);

            let movimientos = data.moves.map(move => move.move.name);
            pokemovi(movimientos);
            console.log(movimientos);

            let habilidad = data.abilities.map(ability => ability.ability.name);
            pokehabilidad(habilidad);
            console.log(habilidad);

           //general
           let estadistica = data.stats[0].base_stat;
            estadistica1(estadistica);
            console.log(estadistica);

            //ataque
            let ataque = data.stats[1].base_stat;
            estadistica2(ataque);
            console.log(ataque);

            //defensa
            let defensa = data.stats[2].base_stat;
            estadistica3(defensa);
            console.log(defensa);

            //ataque especial
            let atespe = data.stats[3].base_stat;
            estadistica4(atespe);
            console.log(atespe);

            //defensa especial
            let deespecial = data.stats[4].base_stat;
            estadistica5(deespecial);
            console.log(deespecial);

            //velocidad
            let veloci = data.stats[5].base_stat;
            estadistica6(veloci);
            console.log(veloci);
  
        }

    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pname = (name) =>{
    const nombre = document.getElementById("name");
    nombre.innerHTML = ("Nombre: "+name);
}

const pokealtura = (alt) =>{
    const altura = document.getElementById("alt");
    altura.innerHTML = ("Altura: "+alt+" m");
}

const pokepeso = (peso) =>{
    const pe = document.getElementById("peso");
    pe.innerHTML = ("Peso: "+peso+" kg");
}

const poketipo = (tipo) =>{
    const ti = document.getElementById("tipo");
    ti.innerHTML = ("Tipo: "+tipo);
}

const pokemovi = (movimientos) =>{
    const mo = document.getElementById("movimientos");
    mo.innerHTML = ("Movimientos: "+movimientos);
}

const pokehabilidad = (habilidad) =>{
    const habil = document.getElementById("habilidad");
    habil.innerHTML = ("Habilidad: "+habilidad);
}

//Estadisticas 

const estadistica1 = (estadistica) =>{
    const esta = document.getElementById("general");
    esta.innerHTML = ("General: " +estadistica);
}

const estadistica2 = (ataque) =>{
    const atack = document.getElementById("ataque");
    atack.innerHTML = ("Ataque: " +ataque);
}

const estadistica3 = (defensa) =>{
    const def = document.getElementById("defensa");
    def.innerHTML = ("Defensa: "+defensa);
}
const estadistica4 = (atesp) =>{
    const atackes = document.getElementById("ae");
    atackes.innerHTML = ("Ataque Especial: "+atesp);
}

const estadistica5 = (deespecial) =>{
    const defes = document.getElementById("de");
    defes.innerHTML = ("Defensa Especial: "+deespecial);
}

const estadistica6 = (veloci) =>{
    const vel = document.getElementById("vel");
    vel.innerHTML = ("Velicidad: "+veloci);
}