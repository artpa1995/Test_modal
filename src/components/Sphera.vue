<template>
    <div id="container">
        <div id="target"></div>   
    </div>
</template>

<script>
  import * as THREE from 'three'
  import TrackballControls from 'three-trackballcontrols';
  import { RenderPass, EffectComposer, OutlinePass } from "three-outlinepass";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
  export default {
    name: 'ThreeTest',
    data () {
      return {
        img: require('@/assets/test1.png'),
        img2: require('@/assets/test3.png'),
        img3: require('@/assets/test4.png'),
        img4: require('@/assets/test1.png'),
        camera: null,
        scene: null,
        renderer: null,
        mesh: null
      }
    },
    methods: {
      init: function () {
          
        var element = document.getElementById('target');
        // var skyBox = {
        //   scene: new THREE.Scene(),
        //   camera: new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 20000 )
        // };
        var scene  = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera();
        camera.position.z = 250;
        const controls = new TrackballControls(camera, element);
        controls.minDistance = 240;
        controls.maxDistance = 350;
        controls.noPan = true;
        var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });// { alpha: true }
        renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
        
       

        // var outlinePass = new THREE.OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
        // var composer = new THREE.EffectComposer(renderer);
        // var renderPass = new THREE.RenderPass(scene, camera);
        // composer.addPass(outlinePass);
        // composer.addPass(renderPass);
        
        // outlinePass.visibleEdgeColor = new THREE.Color("rgb(95,87,99)");
        // outlinePass.pulsePeriod = 1;
        // outlinePass.edgeGlow = 0;
        // outlinePass.edgeThickness = 0.5;
        // outlinePass.edgeStrength = 2;
        
        
        var texture = new THREE.TextureLoader().load( this.img );
        var texture2 = new THREE.TextureLoader().load( this.img2 );
        var texture3 = new THREE.TextureLoader().load( this.img3 );
        var texture4 = new THREE.TextureLoader().load( this.img4 );

        var material = new THREE.MeshBasicMaterial( { map: texture, transparent: true } );
        var material2 = new THREE.MeshBasicMaterial( { map: texture2, transparent: true} );
        var material3 = new THREE.MeshBasicMaterial( { map: texture3, transparent: true} );
        var material4 = new THREE.MeshBasicMaterial( { map: texture4, transparent: true} );

        element.appendChild(renderer.domElement);

        var geometry = new THREE.SphereGeometry(100, 60, 30);
        var mesh = new THREE.Mesh(geometry, material.clone());
        mesh.material.side = THREE.DoubleSide;
        mesh.renderOrder= 0;

        var geometry2 = new THREE.SphereGeometry(90, 60, 30);
        var mesh2 = new THREE.Mesh(geometry2, material2.clone());
        mesh2.material.side = THREE.DoubleSide;
        mesh2.renderOrder= -1;
        

        var geometry3 = new THREE.SphereGeometry(80, 60, 30);
        var mesh3 = new THREE.Mesh(geometry3, material3.clone());
        mesh3.material.side = THREE.DoubleSide;
        mesh3.renderOrder= -2;

        var geometry4 = new THREE.SphereGeometry(70, 60, 30);
        var mesh4 = new THREE.Mesh(geometry4, material4.clone());
        //outlinePass.selectedObjects = [mesh4];
        mesh4.material.side = THREE.DoubleSide;
        mesh4.renderOrder= -3;

        // var cube_geometry = new THREE.BoxGeometry(120,120,120);
        // var cube_material = new THREE.MeshLambertMaterial({color:0xffffff});
        // var cube = new THREE.Mesh(cube_geometry, cube_material);
        // scene.add(cube);
//         var ambientLight = new THREE.AmbientLight(0xffffff,1);
//         scene.add(ambientLight);

        
//         // var light = new THREE.PointLight(0xffffff, 2, 100)
//         // light.position.set(0, 1.5, 2)
//         // scene.add(light)


// var directionalLight = new THREE.DirectionalLight(0xffffff,1);
// scene.add(directionalLight);

       // var pointLight = new THREE.PointLight(0x000000,100);
        var pointLight = new THREE.PointLight(0xff0000, 200, 100);
        // pointLight.add(mesh4);
       // pointLigt.position.set(3,3,3);
        pointLight.position.x = 150;
        pointLight.position.y = 150;
        pointLight.position.z = 150;
        //pointLight.color.set("rgb(95,87,99)");
       // scene.add( pointLight );
//         var spheresize = 1;
// var pointLightHelper = new THREE.PointLightHelper( pointLight, spheresize );
// scene.add( pointLightHelper );

// var ambient = new THREE.AmbientLight( 0x303030);
// scene.add(ambient);


        scene.add(camera);
        scene.add(mesh);
        scene.add(mesh2);
        scene.add(mesh3);
        scene.add(mesh4);
         // skyBox.scene.add(mesh)

       
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
              mesh.rotation.y -= 0.0005;
              mesh2.rotation.z -= 0.0005;
              mesh2.rotation.y += 0.0008;
              mesh3.rotation.z -= 0.0005;
              mesh3.rotation.y -= 0.0008;
              // mesh4.rotation.z -= 0.0005;
              mesh4.rotation.y -= 0.0018;
              controls.update();
              renderer.render(scene, camera);
            // composer.render();
          }
          resize();
          animate();
          
function scen2(){

            let camera, scene, renderer,
				light1, light2, light3, light4,
				object;

			const clock = new THREE.Clock();

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 100;

				scene = new THREE.Scene();

				//model

                var cube_geometry = new THREE.BoxGeometry(10,10,10);
                var cube_material = new THREE.MeshLambertMaterial({color:0xffffff});
                var cube = new THREE.Mesh(cube_geometry, cube_material);
                scene.add(cube);

				const sphere = new THREE.SphereGeometry( 0.5, 16, 8 );

				//lights

				light1 = new THREE.PointLight( 0xff0040, 200, 50 );
//				light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
				scene.add( light1 );

				light2 = new THREE.PointLight( 0x0040ff, 200, 50 );
//				light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
				scene.add( light2 );

				light3 = new THREE.PointLight( 0x80ff80, 200, 50 );
//				light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
				scene.add( light3 );

				light4 = new THREE.PointLight( 0xffaa00, 200, 50 );
				scene.add( light4 );

				//renderer

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {

				const time = Date.now() * 0.0005;
				const delta = clock.getDelta();

				if ( object ) object.rotation.y -= 0.5 * delta;

				light1.position.x = Math.sin( time * 0.7 ) * 30;
				light1.position.y = Math.cos( time * 0.5 ) * 40;
				light1.position.z = Math.cos( time * 0.3 ) * 30;

				light2.position.x = Math.cos( time * 0.3 ) * 30;
				light2.position.y = Math.sin( time * 0.5 ) * 40;
				light2.position.z = Math.sin( time * 0.7 ) * 30;

				light3.position.x = Math.sin( time * 0.7 ) * 30;
				light3.position.y = Math.cos( time * 0.3 ) * 40;
				light3.position.z = Math.sin( time * 0.5 ) * 30;

				light4.position.x = Math.sin( time * 0.3 ) * 30;
				light4.position.y = Math.cos( time * 0.7 ) * 40;
				light4.position.z = Math.sin( time * 0.5 ) * 30;

				renderer.render( scene, camera );

			}


          }
//scen2();



//window.onload = this.init;
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
    /* background-color: red; */
    border: 1px solid var( --color-head_r1);
    border-radius: 50%;
}
@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

