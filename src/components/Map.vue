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
        img: require('@/assets/svg/servise.svg'),
        img2: require('@/assets/ss.svg'),
        img3: require('@/assets/sss.svg'),
      }
    },
    methods: {
      init: function () {
        
        let camera, scene, renderer, object;

        var element = document.getElementById('target');
        const clock = new THREE.Clock();
        scene = new THREE.Scene();
        const light = new THREE.DirectionalLight( 0x0ee82ee );
        light.position.set( 0.5, 1.0, 0.5 ).normalize();
        scene.add( light );
        camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.y = 3;
        camera.position.x = 15;
        camera.position.z = 13;

        const controlsd = new TrackballControls(camera, element);
        controlsd.minDistance = 10;
        controlsd.maxDistance = 16;
        controlsd.noPan = true;
        var planeGeometry = new THREE.PlaneGeometry(3, 3, 10, 10);
        var texture = new THREE.TextureLoader().load( this.img2);
        var planeMaterial = new THREE.MeshLambertMaterial( { map: texture, transparent: true,  side: THREE.DoubleSide} );
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
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.rotation.y = -0.5 * Math.PI;
        plane.rotation.z = -0.30 * Math.PI;
        plane.position.set(-5,0.22,-3);
        scene.add(plane);
        const sphere = new THREE.SphereGeometry( 0.2, 30, 20 );
        var light0 = new THREE.PointLight( 0x0ee82ee, 200, 100 );
        scene.add( light0 );

        light0.position.x = 1;
        light0.position.y = 1;
        light0.position.z = 1;

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
        element.appendChild(renderer.domElement);
        controlsd.update();
        function resize() {
        var width = element.clientWidth;
        var height = element.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
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
    border-radius: 50%;
}
@media screen and (max-width: 1024px) {
    #container{
      display: none;
    }
}

</style>

