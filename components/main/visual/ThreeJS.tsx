import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  EffectComposer,
  RenderPass,
  EffectPass,
  BloomEffect,
} from "postprocessing";

const ThreeJS = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // settings
      const clock = new THREE.Clock();
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(canvasRef.current.width, canvasRef.current.height);
      renderer.outputEncoding = THREE.sRGBEncoding;
      const camera = new THREE.PerspectiveCamera(
        30,
        canvasRef.current.width / canvasRef.current.height,
        1,
        5000
      );

      camera.position.set(-5.5, -5.5, 100);
      // camera.position.set(100, 200, 200);
      const loader = new GLTFLoader();
        
      // load file
      let mixer;
      loader.load("/cloud_station/scene.gltf", gltf => {
        const mesh = gltf.scene.children[0];
        // mesh.scale.set(0.015, 0.015, 0.015);
        mesh.scale.set(1.7, 1.7, 1.7);
        mixer = new THREE.AnimationMixer(gltf.scene);
        const clip = THREE.AnimationClip.findByName(
          gltf.animations,
          "Take 001"
        );
        const action = mixer.clipAction(clip);
        action.enabled = true;
        action.loop = 1;
        action.play();
        gltf.scene.castShadow = true;
        scene.add(gltf.scene);
      });

      // Light and deg for view
      const controls: any = new OrbitControls(camera, canvasRef.current);
      
      const light1 = new THREE.PointLight(0xf56fcb, 1);
      light1.position.set(500, 100, 500);
      light1.castShadow = true;
      scene.add(light1);

      const light2 = new THREE.PointLight(0xffffff, 1);
      light2.position.set(-200, 500, 100);
      light2.castShadow = true;
      scene.add(light2);

      const light3 = new THREE.PointLight(0xf4dbcf, 1);
      light3.position.set(100, 100, -500);

      scene.add(light3);
      const light4 = new THREE.PointLight(0xffffff, 1);
      light4.position.set(-500, 300, 500);
      scene.add(light4);
      // // rendering animate

      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      // composer.addPass(new EffectPass(camera, new BloomEffect()));
      const animate = () => {
        composer.render();
        if (mixer) {
          mixer.update(clock.getDelta());
        }
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      style={{zIndex : 3}}
      width=" 700"
      height=" 700"
      // style={{
      //   background: " radial-gradient(#444444,#222222,#111111, #111111)",
      // }}
    ></canvas>
  );
};

export default ThreeJS;
