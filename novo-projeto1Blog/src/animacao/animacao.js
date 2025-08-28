const todosOsArtigos = document.querySelectorAll('.itemsli')
const btnCarregar = document.getElementById('cx-btn-carregar');

let cardsVisiveis = 0;
const quantidadePorVez = 9;

function mostrarMais() {
  for (let i = cardsVisiveis; i < cardsVisiveis + quantidadePorVez && i < todosOsArtigos.length; i++) {
    todosOsArtigos[i].style.display = 'block'; // mostra o card
  }
  cardsVisiveis += quantidadePorVez;

  if (cardsVisiveis >= todosOsArtigos.length) {
    btnCarregar.style.display = 'none'; // esconde botão quando não tiver mais
  }
}

// Inicializa mostrando os primeiros
mostrarMais();

btnCarregar.addEventListener('click', mostrarMais);

//_____________________________________________________________________________________________________________________________________________________

const menu = document.getElementById('div1');
const navi = document.getElementById('navi');
const navbt = document.querySelector('.btnavidiv')
const caixaLupa = document.getElementById('caixaLupa')
const exitLupa = document.getElementById('exitLupa')
const lupa = document.getElementById('div2')

menu.addEventListener('click', () => {

    if (!caixaLupa.classList.contains('ativada')) {
        navi.classList.toggle('ativada');
    }
    
});

navbt.addEventListener('click',()=>{

    navi.classList.toggle('ativada');   

})

exitLupa.addEventListener('click',()=>{

    caixaLupa.classList.toggle('ativada');   

})

lupa.addEventListener('click',()=>{

    if (!navi.classList.contains('ativada')) {

    caixaLupa.classList.toggle('ativada'); 
    
    }

})

//_____________________________________________________________________________________________________________________________________________________



const CaixTextoLupa = document.getElementById('CaixTextoLupa')
const ResultadoDaPesquisa = document.getElementById('ResultadoDaPesquisa')
const numeroDeResultados = document.getElementById('numeroDeResultados2')

const elementosFiltrados = []

caixaLupa.addEventListener('input', (event) => {
        
    const value = formatString(event.target.value);
    elementosFiltrados.length = 0;
    ResultadoDaPesquisa.innerHTML = '';
    //numeroDeResultados.innerHTML = `<p>Explore nossos artigos através da nossa <br> área de pesquisa</p>`

    if(value != ""){
        
        todosOsArtigos.forEach(item => {

            if (!formatString(item.textContent).includes(value)) {
            //if (formatString(item.textContent).indexOf(value) !== -1 ){} //temos essas duas possibilidades para 
            // essa condição exercutar a filtragem
            
                numeroDeResultados.innerHTML = `Nenhum resultado encontrado`
               
               // ResultadoDaPesquisa.appendChild(clone);

            }else{

                const clone = item.cloneNode(true);

                clone.style.display = 'flex'
                elementosFiltrados.unshift(clone)


            }


        });

    }else {

        numeroDeResultados.innerHTML = `<p>Explore nossos artigos através da nossa <br> área de pesquisa</p>`

    }

    if(elementosFiltrados.length > 0 && elementosFiltrados.length < 7){

        elementosFiltrados.forEach( elementosFiltradosItems => {

           
            ResultadoDaPesquisa.appendChild(elementosFiltradosItems);

        })

        numeroDeResultados.innerHTML = `<p> A pesquisa gerou ${elementosFiltrados.length} resultados</p>`

    }else if (elementosFiltrados.length > 6){


        const elementosFiltrados2 = elementosFiltrados.slice(0,6)
        elementosFiltrados2.forEach( elementosFiltrados2Items => {

           
            ResultadoDaPesquisa.appendChild(elementosFiltrados2Items);

        })

        const elementosFiltrados2soQueComExclusoes = [...elementosFiltrados]
        elementosFiltrados2soQueComExclusoes.splice(0,6)
        numeroDeResultados.innerHTML = `<p> A pesquisa gerou mais ${elementosFiltrados2soQueComExclusoes.length} resultados, veja <br> tudo completo <span id="c1"> clicando aqui </span> </p>`
        const c1 = document.getElementById('c1')
        c1.style.textDecoration='underline'

        
    }
    
    /*const sla23 = elementosFiltrados.splice(0,6)
    sla23.forEach( sla23Items => {

           
        ResultadoDaPesquisa.appendChild(sla23Items);

    })
    
    console.log(elementosFiltrados.length)*/

})

function formatString(value) {

    return value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,'');

}
const listaDecriação = document.querySelector('#listItems')

function elementosResultantesDePesquisa() {
    return document.querySelectorAll('.elementosResultantesDePesquisa');
}

numeroDeResultados.addEventListener('click',()=>{

    if(elementosFiltrados.length > 6){

        //const elementosResultantesDePesquisa = document.querySelectorAll('.elementosResultantesDePesquisa')

        
        caixaLupa.classList.toggle('ativada');
        CaixTextoLupa.value = ""
        ResultadoDaPesquisa.innerHTML= ""
        numeroDeResultados.innerHTML = `<p>Explore nossos artigos através da nossa <br> área de pesquisa</p>`
        

        if (elementosResultantesDePesquisa().length > 0) {
            elementosResultantesDePesquisa().forEach(el => el.remove());
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        btnCarregar.style.display = 'none';

        elementosFiltrados.forEach(itemft => {

            const copiaitemft = itemft.cloneNode(true)
            copiaitemft.classList.add('elementosResultantesDePesquisa');
            listaDecriação.appendChild(copiaitemft)

        })

        elementosFiltrados.length = 0;

    }

})

/** */


//funcionalidades das categorias:
//_____________________________________________________________________________________________________________________________________________________

const tudobt = document.querySelectorAll('.tudobt')
tudobt.forEach(item => {

    item.addEventListener('click',() => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
        }

        todosOsArtigos.forEach(artigo => {
            artigo.style.display = 'none';
        });

        cardsVisiveis = 0;

        mostrarMais();

        const restantes = todosOsArtigos.length - cardsVisiveis;
    
        if (restantes > 0) {

            btnCarregar.style.display = 'block';

        } else {

            btnCarregar.style.display = 'none';

        }

    })  

})  

//ação_____________________________________________________________________________________________________________________________________________________

const acaobt = document.querySelectorAll('.acaobt')
const acaoConteudo = document.querySelectorAll('.acao')

acaobt.forEach(acaobtitem => {

    acaobtitem.addEventListener('click', () => {

        
        
        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        acaoConteudo.forEach(acaoConteudoitem => {

            acaoConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//aventura_____________________________________________________________________________________________________________

const aventurabt = document.querySelectorAll('.aventurabt')
const aventuraConteudo = document.querySelectorAll('.aventura')

aventurabt.forEach(aventurabtitem => {

    aventurabtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        aventuraConteudo.forEach(aventuraConteudoitem => {

            aventuraConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//comédia_____________________________________________________________________________________________________________

const comediabt = document.querySelectorAll('.comediabt')
const comediaConteudo = document.querySelectorAll('.comedia')

comediabt.forEach(comediabtitem => {

    comediabtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        comediaConteudo.forEach(comediaConteudoitem => {

            comediaConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//drama_____________________________________________________________________________________________________________

const dramabt = document.querySelectorAll('.dramabt')
const dramaConteudo = document.querySelectorAll('.drama')

dramabt.forEach(dramabtitem => {

    dramabtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        dramaConteudo.forEach(dramaConteudoitem => {

            dramaConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//fantasia_____________________________________________________________________________________________________________

const fantasiabt = document.querySelectorAll('.fantasiabt')
const fantasiaConteudo = document.querySelectorAll('.fantasia')

fantasiabt.forEach(fantasiabtitem => {

    fantasiabtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        fantasiaConteudo.forEach(fantasiaConteudoitem => {

            fantasiaConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//ficção Cientifica_____________________________________________________________________________________________________________

const ficcaoCientificabt = document.querySelectorAll('.ficcaoCientificabt')
const ficcaoCientificaConteudo = document.querySelectorAll('.ficcaoCientifica')

ficcaoCientificabt.forEach(ficcaoCientificabtitem => {

    ficcaoCientificabtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        ficcaoCientificaConteudo.forEach(ficcaoCientificaConteudoitem => {

            ficcaoCientificaConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//slice of life_____________________________________________________________________________________________________________

const sliceOfLifebt = document.querySelectorAll('.sliceOfLifebt')
const sliceOfLifeConteudo = document.querySelectorAll('.sliceOfLife')

sliceOfLifebt.forEach(sliceOfLifebtitem => {

    sliceOfLifebtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        sliceOfLifeConteudo.forEach(sliceOfLifeConteudoitem => {

            sliceOfLifeConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//romance_____________________________________________________________________________________________________________

const romancebt = document.querySelectorAll('.romancebt')
const romanceConteudo = document.querySelectorAll('.romance')

romancebt.forEach(romancebtitem => {

    romancebtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        romanceConteudo.forEach(romanceConteudoitem => {

            romanceConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//esporte_____________________________________________________________________________________________________________

const esportebt = document.querySelectorAll('.esportebt')
const esporteConteudo = document.querySelectorAll('.esporte')

esportebt.forEach(esportebtitem => {

    esportebtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        esporteConteudo.forEach(esporteConteudoitem => {

            esporteConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//suspense_____________________________________________________________________________________________________________

const suspensebt = document.querySelectorAll('.suspensebt')
const suspenseConteudo = document.querySelectorAll('.suspense')

suspensebt.forEach(suspensebtitem => {

    suspensebtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        suspenseConteudo.forEach(suspenseConteudoitem => {

            suspenseConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//terror_____________________________________________________________________________________________________________

const terrorbt = document.querySelectorAll('.terrorbt')
const terrorConteudo = document.querySelectorAll('.terror')

terrorbt.forEach(terrorbtitem => {

    terrorbtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        terrorConteudo.forEach(terrorConteudoitem => {

            terrorConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//mecha_____________________________________________________________________________________________________________

const mechabt = document.querySelectorAll('.mechabt')
const mechaConteudo = document.querySelectorAll('.mecha')

mechabt.forEach(mechabtitem => {

    mechabtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        }) 

        mechaConteudo.forEach(mechaConteudoitem => {

            mechaConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//musical_____________________________________________________________________________________________________________

const musicbt = document.querySelectorAll('.musicbt')
const musicConteudo = document.querySelectorAll('.music')

musicbt.forEach(musicbtitem => {

    musicbtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        musicConteudo.forEach(musicConteudoitem => {

            musicConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//seinen_____________________________________________________________________________________________________________

const seinenbt = document.querySelectorAll('.seinenbt')
const seinenConteudo = document.querySelectorAll('.seinen')

seinenbt.forEach(seinenbtitem => {

    seinenbtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        seinenConteudo.forEach(seinenConteudoitem => {

            seinenConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//shonen_____________________________________________________________________________________________________________

const shonenbt = document.querySelectorAll('.shonenbt')
const shonenConteudo = document.querySelectorAll('.shonen')

shonenbt.forEach(shonenbtitem => {

    shonenbtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        shonenConteudo.forEach(shonenConteudoitem => {

            shonenConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//shojo_____________________________________________________________________________________________________________

const shojobt = document.querySelectorAll('.shojobt')
const shojoConteudo = document.querySelectorAll('.shojo')

shojobt.forEach(shojobtitem => {

    shojobtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        shojoConteudo.forEach(shojoConteudoitem => {

            shojoConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//josei_____________________________________________________________________________________________________________

const joseibt = document.querySelectorAll('.joseibt')
const joseiConteudo = document.querySelectorAll('.josei')

joseibt.forEach(joseibtitem => {

    joseibtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        joseiConteudo.forEach(joseiConteudoitem => {

            joseiConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//kodomomuke_____________________________________________________________________________________________________________

const kodomomukebt = document.querySelectorAll('.kodomomukebt')
const kodomomukeConteudo = document.querySelectorAll('.kodomomuke')

kodomomukebt.forEach(kodomomukebtitem => {

    kodomomukebtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        kodomomukeConteudo.forEach(kodomomukeConteudoitem => {

            kodomomukeConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})

//isekai_____________________________________________________________________________________________________________

const isekaibt = document.querySelectorAll('.isekaibt')
const isekaiConteudo = document.querySelectorAll('.isekai')

isekaibt.forEach(isekaibtitem => {

    isekaibtitem.addEventListener('click', () => {

        if (elementosResultantesDePesquisa().length > 0) {

            elementosResultantesDePesquisa().forEach(el => el.remove());
            
        }

        todosOsArtigos.forEach(artigo => {

            artigo.style.display = 'none'

        })

        isekaiConteudo.forEach(isekaiConteudoitem => {

            isekaiConteudoitem.style.display = 'flex'

        })

        btnCarregar.style.display = 'none';

    })

})