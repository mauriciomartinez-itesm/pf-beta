
$( document ).ready(function() {

  var sceneEl = document.querySelector('a-scene');


  AFRAME.registerComponent('load-asset', {
    init: function () {
      /*var clickEl = document.querySelector('.clickable');

       this.el.addEventListener('raycaster-intersected', function (evt) {
          console.log(this.getAttribute("tipo"));
         console.log(evt.intersection);
         
        });*/
    }
  });
  

  
  
  
  
  
  var leches = ["design","flexible","gamification","retos","social","storytelling"];
  
  for(var i=0;i<leches.length;i++){
    for(var j=0;j<12;j++){
      for(var k=0;k<2;k++){
        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
        entityEl.setAttribute('cursor-listener', '');
        entityEl.setAttribute('producto', 'leche');
        entityEl.setAttribute('tipo', leches[i]);
        entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"leche-"+leches[i]});
        sceneEl.appendChild(entityEl);
        entityEl.setAttribute('position', (-k*.2)+' 0 '+(-j*.4))
      }
    }
  }
  
  var cereales = ["presencial","enlinea","blended","flipped"];
  
  for(var i=0;i<cereales.length;i++){
    for(var j=0;j<9;j++){
      for(var k=0;k<2;k++){
        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
        entityEl.setAttribute('cursor-listener', '');
        entityEl.setAttribute('producto', 'cereal');
        entityEl.setAttribute('tipo', cereales[i]);
        entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"cereal-"+cereales[i]});
        sceneEl.appendChild(entityEl);
        entityEl.setAttribute('position', (-j*.4)+' 0 '+(k*.2))
      }
    }
  }
  
  var refrescos = ["autoevaluacion","coevaluacion","competencias","examenes", "individual", "listasCotejo", "peerReview", "portafolios", "rubricas", "sumativa"];
  
  for(var i=0;i<refrescos.length;i++){
    for(var j=0;j<4;j++){
      for(var k=0;k<2;k++){
        for(var l=0;l<3;l++){
          var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
          entityEl.setAttribute('cursor-listener', '');
          entityEl.setAttribute('producto', 'refresco');
          entityEl.setAttribute('tipo', refrescos[i]);
          entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"refresco-"+refrescos[i]});
          sceneEl.appendChild(entityEl);
          entityEl.setAttribute('position', (-j*.26)+' '+(-l*.7)+' '+(k*.2))
        }
      }
    }
  }
  
  var enlatados = ["apps","dr","grinteractivos","infografias", "multimedia", "presentaciones", "ra", "rea", "rv", "tutoriales"];
  
  for(var i=0;i<enlatados.length;i++){
    for(var j=0;j<2;j++){
      for(var k=0;k<4;k++){
        for(var l=0;l<3;l++){
          var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
          entityEl.setAttribute('cursor-listener', '');
          entityEl.setAttribute('producto', 'enlata');
          entityEl.setAttribute('tipo', enlatados[i]);
          entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"enlata-"+enlatados[i]});
          sceneEl.appendChild(entityEl);
          entityEl.setAttribute('position', (j*.25)+' '+(-l*.5)+' '+(k*.25))
        }
      }
    }
  }
  
  var panes = ["casos","colaborativas","individuales","proyectos", "simulaciones"];
  
  for(var i=0;i<panes.length;i++){
    for(var j=0;j<2;j++){
      for(var k=0;k<3;k++){
        for(var l=0;l<3;l++){
          var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
          entityEl.setAttribute('cursor-listener', '');
          entityEl.setAttribute('producto', 'pan');
          entityEl.setAttribute('tipo', panes[i]);
          entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"pan-"+panes[i]});
          sceneEl.appendChild(entityEl);
          entityEl.setAttribute('position', (-j*.25)+' '+(-l*.5)+' '+(-k*.7))
        }
      }
    }
  }
  
  var condimentos = ["transversales", "disciplinares"];
  
  for(var i=0;i<condimentos.length;i++){
    for(var j=0;j<2;j++){
      for(var k=0;k<43;k++){
        for(var l=0;l<2;l++){
          var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
          entityEl.setAttribute('cursor-listener', '');
          entityEl.setAttribute('producto', 'condimento');
          entityEl.setAttribute('tipo', condimentos[i]);
          entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"condimento-"+condimentos[i]});
          sceneEl.appendChild(entityEl);
          entityEl.setAttribute('position', (j*.2)+' '+(-l*1)+' '+(k*.25))
        }
      }
    }
  }
  
  var papayas = ["webconference", "zoom", "webex", "webinar"];
  
  for(var i=0;i<papayas.length;i++){
    for(var j=0;j<4;j++){
      for(var k=0;k<4;k++){
          var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
          entityEl.setAttribute('cursor-listener', '');
          entityEl.setAttribute('producto', 'papaya');
          entityEl.setAttribute('tipo', papayas[i]);
          entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"papaya-"+papayas[i]});
          sceneEl.appendChild(entityEl);
          entityEl.setAttribute('position', (j*.3)+' '+(-j*.17)+' '+(-k*.26))
      }
    }
  }
  
  var manzanas = ["canvas", "blackboard", "coursera", "moodle"];
  
  for(var i=0;i<manzanas.length;i++){
    for(var j=0;j<7;j++){
      for(var k=0;k<6;k++){
          var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
          entityEl.setAttribute('cursor-listener', '');
          entityEl.setAttribute('producto', 'manzana');
          entityEl.setAttribute('tipo', manzanas[i]);
          entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"manzana-"+manzanas[i]});
          sceneEl.appendChild(entityEl);
          entityEl.setAttribute('position', (j*.17)+' '+(-j*.09)+' '+((-k*.2)-.05))
      }
    }
  }
  
  var platanos = ["facebook", "twitter", "youtube", "instagram"];
  
  for(var i=0;i<platanos.length;i++){
    for(var j=0;j<4;j++){
      for(var k=0;k<10;k++){
          var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
          entityEl.setAttribute('cursor-listener', '');
          entityEl.setAttribute('producto', 'platano');
          entityEl.setAttribute('tipo', platanos[i]);
          entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"platano-"+platanos[i]});
          sceneEl.appendChild(entityEl);
          entityEl.setAttribute('position', (-j*.3)+' '+(-j*.16)+' '+(k*.12))
      }
    }
  }
  
  var sandiasChicas = ["wikis", "email"];
  
  for(var i=0;i<sandiasChicas.length;i++){
    for(var j=0;j<4;j++){
      for(var k=0;k<4;k++){
          var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
          entityEl.setAttribute('cursor-listener', '');
          entityEl.setAttribute('producto', 'sandia');
          entityEl.setAttribute('tipo', sandiasChicas[i]);
          entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"sandia-"+sandiasChicas[i]});
          sceneEl.appendChild(entityEl);
          entityEl.setAttribute('position', (-j*.3)+' '+(-j*.16)+' '+(k*.3))
      }
    }
  }
  
  var sandiasGrandes = ["chats", "foros"];
  
  for(var i=0;i<sandiasGrandes.length;i++){
    for(var j=0;j<4;j++){
      for(var k=0;k<2;k++){
          var entityEl = document.createElement('a-entity');
          entityEl.setAttribute('load-asset', '');
        entityEl.setAttribute('class', 'clickable');
          entityEl.setAttribute('cursor-listener', '');
          entityEl.setAttribute('producto', 'sandia');
          entityEl.setAttribute('tipo', sandiasGrandes[i]);
          entityEl.setAttribute('gltf-part', {src:"#super-productos", part:"sandia-"+sandiasGrandes[i]});
          sceneEl.appendChild(entityEl);
          entityEl.setAttribute('position', (-j*.3)+' '+(-j*.16)+' '+(k*.6))
      }
    }
  }
  
  
  
    
});
