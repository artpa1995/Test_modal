<template>
    <div id="container">
        <div id="target"></div>   
    </div>
</template>

<script>
  import * as THREE from 'three'
  import TrackballControls from 'three-trackballcontrols';
  
  export default {
    name: 'ThreeTest',
    data () {
      return {
        img: require('@/assets/vektor.png'),
        camera: null,
        scene: null,
        renderer: null,
        mesh: null
      }
    },
    methods: {
      init: function () {
        var element = document.getElementById('target');
        var scene  = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera();
        camera.position.z = 250;
        const controls = new TrackballControls(camera, element);
        controls.minDistance = 240;
        controls.maxDistance = 350;
        controls.noPan = true;
        var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
        renderer.setPixelRatio( window.devicePixelRatio );
	    	renderer.setSize( window.innerWidth, window.innerHeight );
 
        var texture = new THREE.TextureLoader().load( this.img );
        var texture2 = new THREE.TextureLoader().load( this.img );
        var texture3 = new THREE.TextureLoader().load( this.img );
        var texture4 = new THREE.TextureLoader().load( this.img );
        var texture5 = new THREE.TextureLoader().load( this.img );
        var texture6 = new THREE.TextureLoader().load( this.img );

        var material = new THREE.MeshBasicMaterial( { map: texture, transparent: true } );
        var material2 = new THREE.MeshBasicMaterial( { map: texture2, transparent: true} );
        var material3 = new THREE.MeshBasicMaterial( { map: texture3, transparent: true} );
        var material4 = new THREE.MeshBasicMaterial( { map: texture4, transparent: true} );
        var material5 = new THREE.MeshBasicMaterial( { map: texture5, transparent: true} );
        var material6 = new THREE.MeshBasicMaterial( { map: texture6, transparent: true} );

        element.appendChild(renderer.domElement);

        var geometry = new THREE.SphereGeometry(100, 60, 30);
        var mesh = new THREE.Mesh(geometry, material.clone());
        mesh.material.side = THREE.DoubleSide;
        mesh.renderOrder= 0;
        mesh.rotation.z = 5;
        mesh.rotation.x = 5;
        mesh.rotation.y = 5;
        var geometry2 = new THREE.SphereGeometry(90, 60, 30);
        var mesh2 = new THREE.Mesh(geometry2, material2.clone());
        mesh2.material.side = THREE.DoubleSide;
        mesh2.renderOrder= -1;
        mesh2.rotation.z = 15;
        mesh2.rotation.x = 15;
        mesh2.rotation.y = 15;

        var geometry3 = new THREE.SphereGeometry(80, 60, 30);
        var mesh3 = new THREE.Mesh(geometry3, material3.clone());
        mesh3.material.side = THREE.DoubleSide;
        mesh3.renderOrder= -2;
        mesh3.rotation.z = 15;
        mesh3.rotation.x = 15;
        mesh3.rotation.y = 15;

        var geometry4 = new THREE.SphereGeometry(70, 60, 30);
        var mesh4 = new THREE.Mesh(geometry4, material4.clone());
        mesh4.material.side = THREE.DoubleSide;
        mesh4.renderOrder= -3;
        mesh4.rotation.z = 65;
        mesh4.rotation.x = 85;
        mesh4.rotation.y = 25;

        var geometry5 = new THREE.SphereGeometry(50, 60, 30);
        var mesh5 = new THREE.Mesh(geometry5, material5.clone());
        mesh5.material.side = THREE.DoubleSide;
        mesh5.renderOrder= -4;

        var geometry6 = new THREE.SphereGeometry(40, 60, 30);
        var mesh6 = new THREE.Mesh(geometry6, material6.clone());
        mesh6.material.side = THREE.DoubleSide;
        mesh6.renderOrder= -5;
        var pointLight = new THREE.PointLight(0xff0000, 200, 100);
        pointLight.position.x = 150;
        pointLight.position.y = 150;
        pointLight.position.z = 150;
        scene.add(camera);
        scene.add(mesh);
        scene.add(mesh2);
        scene.add(mesh3);
        scene.add(mesh4);
        scene.add(mesh5);
        scene.add(mesh6);

        function resize() {
              var width = element.clientWidth;
              var height = element.clientHeight;
              renderer.setSize(width, height);
              camera.aspect = width/height;
              controls.handleResize();
          }

        function animate() {
              requestAnimationFrame(animate);    
              mesh.rotation.z -= 0.0005;
              mesh.rotation.y -= 0.0025;
              mesh2.rotation.z -= 0.0005;
              mesh2.rotation.y += 0.0008;
              mesh3.rotation.z -= 0.0005;
              mesh3.rotation.y -= 0.0008;
              mesh4.rotation.y -= 0.0018;
              mesh5.rotation.y -= 0.0018;
              mesh5.rotation.z -= 0.0015;
              mesh6.rotation.y -= 0.0035;
              mesh6.rotation.z -= 0.0035;
              mesh6.rotation.x -= 0.0035;
              controls.update();
              renderer.render(scene, camera);
          }
          resize();
          animate();
      },
    },
    mounted () {
      this.init()
    }
  }
</script>
<style scoped>

#container{
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid var( --color-head_r1);
    border-radius: 50%;
    padding: 30px;
    background-image: url(../assets/namak/bg.svg);
     background-position: center center;
     background-repeat: no-repeat;
    background-size: contain;
}

#target {
    cursor: pointer;
    position: relative;
    width: 400px;
    height: 400px;
    margin: auto;
    border: 1px solid var( --color-head_r1);
    border-radius: 50%;
}
@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

