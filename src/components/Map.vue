<template>
    <div id="container">
        <div id="target"></div>   
        <a href="https://www.figma.com/file/gT3aldJfrc1FmqW3mov1SI/Untitled?node-id=11%3A29">TEST</a>
    </div>
</template>

<script>
  import * as THREE from 'three'
  import TrackballControls from 'three-trackballcontrols';
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  
  export default {
    name: 'ThreeTest',
    data () {
      return {
        img: require('@/assets/svg/servise.svg'),
        img2: require('@/assets/ss.svg'),
        img3: require('@/assets/sss.svg'),
        img4: require('@/assets/cub.svg'),
        camera: null,
        scene: null,
        renderer: null,
        mesh: null
      }
    },
    methods: {
      init: function () {
          
        // var element = document.getElementById('target');

        // var scene  = new THREE.Scene();
        // var camera = new THREE.PerspectiveCamera();
        // camera.position.z = 250;
        // const controls = new TrackballControls(camera, element);
        // controls.minDistance = 240;
        // controls.maxDistance = 350;
        // controls.noPan = true;
        // var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true });
        // renderer.setPixelRatio( window.devicePixelRatio );
		// renderer.setSize( window.innerWidth, window.innerHeight );
        
        // var texture = new THREE.TextureLoader().load( this.img );
        // var texture2 = new THREE.TextureLoader().load( this.img2 );
        // var texture3 = new THREE.TextureLoader().load( this.img3 );
        // var texture4 = new THREE.TextureLoader().load( this.img4 );

        // var material = new THREE.MeshBasicMaterial( { map: texture, transparent: true } );
        // var material2 = new THREE.MeshBasicMaterial( { map: texture2, transparent: true} );
        // var material3 = new THREE.MeshBasicMaterial( { map: texture3, transparent: true} );
        // var material4 = new THREE.MeshBasicMaterial( { map: texture4, transparent: true} );

        // element.appendChild(renderer.domElement);

        // var geometry = new THREE.SphereGeometry(100, 60, 30);
        // var mesh = new THREE.Mesh(geometry, material.clone());
        // mesh.material.side = THREE.DoubleSide;
        // mesh.renderOrder= 0;

        // var geometry2 = new THREE.SphereGeometry(90, 60, 30);
        // var mesh2 = new THREE.Mesh(geometry2, material2.clone());
        // mesh2.material.side = THREE.DoubleSide;
        // mesh2.renderOrder= -1;
        

        // var geometry3 = new THREE.SphereGeometry(80, 60, 30);
        // var mesh3 = new THREE.Mesh(geometry3, material3.clone());
        // mesh3.material.side = THREE.DoubleSide;
        // mesh3.renderOrder= -2;

        // var geometry4 = new THREE.SphereGeometry(70, 60, 30);
        // var mesh4 = new THREE.Mesh(geometry4, material4.clone());
       
        // mesh4.material.side = THREE.DoubleSide;
        // mesh4.renderOrder= -3;


        // scene.add(camera);
        // scene.add(mesh);
        // scene.add(mesh2);
        // scene.add(mesh3);
        // scene.add(mesh4);

       
        //   function resize() {
        //       var width = element.clientWidth;
        //       var height = element.clientHeight;

        //       renderer.setSize(width, height);
        //       camera.aspect = width/height;
        //       controls.handleResize();
        //   }

        //   function animate() {
        //       requestAnimationFrame(animate);    
        //       mesh.rotation.z -= 0.0005;
        //       mesh.rotation.y -= 0.0005;
        //       mesh2.rotation.z -= 0.0005;
        //       mesh2.rotation.y += 0.0008;
        //       mesh3.rotation.z -= 0.0005;
        //       mesh3.rotation.y -= 0.0008;
        //       // mesh4.rotation.z -= 0.0005;
        //       mesh4.rotation.y -= 0.0018;
        //       controls.update();
        //       renderer.render(scene, camera);
        //     // composer.render();
        //   }
        //   resize();
        //   animate();

          
                            let camera, scene, renderer, object;

                            var element = document.getElementById('target');
                            const clock = new THREE.Clock();
                            scene = new THREE.Scene();
                           // scene.background = new THREE.Color( 0xe199fc );

                            const light = new THREE.DirectionalLight( 0x0ee82ee );
                            light.position.set( 0.5, 1.0, 0.5 ).normalize();
                            scene.add( light );
                            camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 1000 );
                            camera.position.y = 3;
                            camera.position.x = 15;
                            //camera.position.z = 10;
                            camera.position.z = 13;

                            const controlsd = new TrackballControls(camera, element);
                            controlsd.minDistance = 10;
                            controlsd.maxDistance = 16;
                            controlsd.noPan = true;
                           // controlsd.noZoom = true;
                           

                            // var planeGeometry = new THREE.PlaneGeometry(30, 30, 1, 1);
                            // var texture = new THREE.TextureLoader().load( this.img);
                            // var planeMaterial = new THREE.MeshLambertMaterial( { map: texture, transparent: true } );
                            // //var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
                            // var plane = new THREE.Mesh(planeGeometry, planeMaterial);
                            // plane.receiveShadow = true;
                            // // rotate and position the plane
                            // // plane.rotation.x = -0.5 * Math.PI;
                            // plane.position.set(0,0,0);
                            // scene.add(plane);
                            var planeGeometry = new THREE.PlaneGeometry(3, 3, 10, 10);
                            var texture = new THREE.TextureLoader().load( this.img2);
                            var planeMaterial = new THREE.MeshLambertMaterial( { map: texture, transparent: true,  side: THREE.DoubleSide} );
                            //var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
                            var plane = new THREE.Mesh(planeGeometry, planeMaterial);
                            plane.receiveShadow = true;
                            // rotate and position the plane
                            plane.rotation.x = -0.5 * Math.PI;
                            plane.rotation.y = -0.5 * Math.PI;
                            plane.rotation.z = -0.26 * Math.PI;
                            plane.position.set(6,0,0);
                            scene.add(plane);

                            var planeGeometry = new THREE.PlaneGeometry(3, 3, 10, 10);
                            var texture = new THREE.TextureLoader().load( this.img3);
                            var planeMaterial = new THREE.MeshLambertMaterial( { map: texture, transparent: true,  side: THREE.DoubleSide} );
                            //var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
                            var plane = new THREE.Mesh(planeGeometry, planeMaterial);
                            plane.receiveShadow = true;
                            // rotate and position the plane
                            plane.rotation.x = -0.5 * Math.PI;
                            plane.rotation.y = -0.5 * Math.PI;
                            plane.rotation.z = -0.30 * Math.PI;
                            plane.position.set(5,0.23,1);
                            scene.add(plane);

                            var planeGeometry = new THREE.PlaneGeometry(3, 3, 10, 10);
                            var texture = new THREE.TextureLoader().load( this.img2);
                            var planeMaterial = new THREE.MeshLambertMaterial( { map: texture, transparent: true,  side: THREE.DoubleSide} );
                            //var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
                            var plane = new THREE.Mesh(planeGeometry, planeMaterial);
                            plane.receiveShadow = true;
                            // rotate and position the plane
                            plane.rotation.x = -0.5 * Math.PI;
                            plane.rotation.y = -0.5 * Math.PI;
                            plane.rotation.z = -0.26 * Math.PI;
                            plane.position.set(1,0,4);
                            scene.add(plane);

                            var planeGeometry = new THREE.PlaneGeometry(3, 3, 10, 10);
                            var texture = new THREE.TextureLoader().load( this.img3);
                            var planeMaterial = new THREE.MeshLambertMaterial( { map: texture, transparent: true,  side: THREE.DoubleSide} );
                            //var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
                            var plane = new THREE.Mesh(planeGeometry, planeMaterial);
                            plane.receiveShadow = true;
                            // rotate and position the plane
                            plane.rotation.x = -0.5 * Math.PI;
                            plane.rotation.y = -0.5 * Math.PI;
                            plane.rotation.z = -0.30 * Math.PI;
                            plane.position.set(0,0.22,3);
                            scene.add(plane);

                            var planeGeometry = new THREE.PlaneGeometry(3, 3, 10, 10);
                            var texture = new THREE.TextureLoader().load( this.img2);
                            var planeMaterial = new THREE.MeshLambertMaterial( { map: texture, transparent: true,  side: THREE.DoubleSide} );
                            //var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
                            var plane = new THREE.Mesh(planeGeometry, planeMaterial);
                            plane.receiveShadow = true;
                            // rotate and position the plane
                            plane.rotation.x = -0.5 * Math.PI;
                            plane.rotation.y = -0.5 * Math.PI;
                            plane.rotation.z = -0.26 * Math.PI;
                            plane.position.set(-6,0,-2);
                            scene.add(plane);

                            var planeGeometry = new THREE.PlaneGeometry(3, 3, 10, 10);
                            var texture = new THREE.TextureLoader().load( this.img3);
                            var planeMaterial = new THREE.MeshLambertMaterial( { map: texture, transparent: true,  side: THREE.DoubleSide} );
                            //var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
                            var plane = new THREE.Mesh(planeGeometry, planeMaterial);
                            plane.receiveShadow = true;
                            // rotate and position the plane
                            plane.rotation.x = -0.5 * Math.PI;
                            plane.rotation.y = -0.5 * Math.PI;
                            plane.rotation.z = -0.30 * Math.PI;
                            plane.position.set(-5,0.22,-3);
                            scene.add(plane);

                            const sphere = new THREE.SphereGeometry( 0.2, 30, 20 );





                            var light0 = new THREE.PointLight( 0x0ee82ee, 200, 100 );
                           // light0.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0ee82ee } ) ) );
                            scene.add( light0 );

                            light0.position.x = 1;
                            light0.position.y =  1;
                            light0.position.z =  1;


                            var light1 = new THREE.PointLight( 0x0ee82ee, 10, 10 );
                            light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0ee82ee } ) ) );
                            scene.add( light1 );
                            var light2 = new THREE.PointLight( 0x0ee82ee, 10, 10 );
                            light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0ee82ee } ) ) );
                            scene.add( light2 );
                            var light3 = new THREE.PointLight( 0x0ee82ee, 10, 10 );
                            light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0ee82ee } ) ) );
                            scene.add( light3 );
                            var light4 = new THREE.PointLight( 0x0ee82ee, 10, 10 );
                            light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0ee82ee } ) ) );
                            scene.add( light4 );
                            var light5 = new THREE.PointLight( 0x0ee82ee, 10, 10 );
                            light5.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0ee82ee } ) ) );
                            scene.add( light5 );
                            var light6 = new THREE.PointLight( 0x0ee82ee, 10, 10 );
                            light6.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0ee82ee } ) ) );
                            scene.add( light6 );

                            const geometry5 = new THREE.BoxGeometry( 1, 0.5, 1 );
                            const material5 = new THREE.MeshBasicMaterial( {color: 0x0ee82ee} );
                            const cube = new THREE.Mesh( geometry5, material5 );
                            cube.position.set(-4,0.22,3);
                            scene.add( cube );

                            const geometry6 = new THREE.BoxGeometry( 1, 0.5, 1 );
                            const material6 = new THREE.MeshBasicMaterial( {color: 0x0ee82ee} );
                            const cube2 = new THREE.Mesh( geometry6, material6 );
                            cube2.position.set(4,0.22,3);
                            scene.add( cube2 );

                            const geometry7 = new THREE.BoxGeometry( 1, 0.5, 1 );
                            const material7 = new THREE.MeshBasicMaterial( {color: 0x0ee82ee} );
                            const cube3 = new THREE.Mesh( geometry7, material7 );
                            cube3.position.set(2,0.22,-3);
                            scene.add( cube3 );
                            const geometry8 = new THREE.BoxGeometry( 1, 0.5, 1 );
                            const material8 = new THREE.MeshBasicMaterial( {color: 0x0ee82ee} );
                            const cube4 = new THREE.Mesh( geometry8, material8 );
                            cube4.position.set(-3,0.22,-6);
                            scene.add( cube4 );
                            scene.add( camera );

                            //my geometry
                            const grid = new THREE.GridHelper( 12, 12, 0x0ee82ee, 0x0ee82ee );
                            scene.add( grid );

                            renderer = new THREE.WebGLRenderer( { alpha: true } );
                            renderer.outputEncoding = THREE.sRGBEncoding;
                            renderer.setPixelRatio( window.devicePixelRatio );
                            renderer.setSize( window.innerWidth, window.innerHeight );
                   // renderer.setClearColor( 0x0ee82ee, 0.2 )
                            element.appendChild(renderer.domElement);
                            //const controls = new OrbitControls( camera, renderer.domElement );
                            //controls.addEventListener( 'change', render );
                            controlsd.update();
                            function resize() {
                            var width = element.clientWidth;
                            var height = element.clientHeight;

                            renderer.setSize(width, height);
                            camera.aspect = width/height;
                            //controls.handleResize();
                            }

                            function animate() {
                                requestAnimationFrame(animate);    
                                controlsd.update();
                                renderer.render(scene, camera);
                                const time = Date.now() * 0.0005;
                            const delta = clock.getDelta();
                            if ( object ) object.rotation.y -= 0.5 * delta;
                            light1.position.x = Math.sin( time * 0.7 ) * 3;
                            light1.position.y = Math.cos( time * 0.5 ) * 5;
                            light1.position.z = Math.cos( time * 0.3 ) * 2;

                            light2.position.x = Math.cos( time * 0.3 ) * 4;
                            light2.position.y = Math.sin( time * 0.5 ) * 4;
                            light2.position.z = Math.sin( time * 0.7 ) * 3;

                            light3.position.x = Math.sin( time * 0.7 ) * 3;
                            light3.position.y = Math.cos( time * 0.3 ) * 6;
                            light3.position.z = Math.sin( time * 0.5 ) * 4;

                            light4.position.x = Math.sin( time * 0.3 ) * 4;
                            light4.position.y = Math.cos( time * 0.7 ) * 3;
                            light4.position.z = Math.sin( time * 0.5 ) * 2;

                            light5.position.x = Math.sin( time * 0.3 ) * 2;
                            light5.position.y = Math.cos( time * 0.6 ) * 4;
                            light5.position.z = Math.sin( time * 0.4 ) * 4;

                            light6.position.x = Math.sin( time * 0.2 ) * 2;
                            light6.position.y = Math.cos( time * 0.8 ) * 3;
                            light6.position.z = Math.sin( time * 0.3 ) * 3;
                                }
                            resize();
                            animate();

                            //window.addEventListener( 'resize', onWindowResize );




                            // function onWindowResize() {

                            // 	camera.aspect = window.innerWidth / window.innerHeight;
                            // 	camera.updateProjectionMatrix();

                            // 	renderer.setSize( window.innerWidth, window.innerHeight );

                            // 	render();

                            // }

                            function render() {



                            renderer.render( scene, camera );

                            }



      
          



//window.onload = init;
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
    max-width: 800px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 50%;
    padding: 30px;
}

#target {
    position: relative;
    width: 800px;
    height: 400px;
    margin: auto;
    /* background-color: red; */
    
    border-radius: 50%;
}
@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

