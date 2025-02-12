import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('/robot.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
        position={[1.9, 2.46, 1.04]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.571, 0.2, 0.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['Material.001']}
        position={[1.9, 2.46, -1.06]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.571, 0.2, 0.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['Material.001']}
        position={[0, 4.2, 0]}
        scale={0.545}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['Material.001']}
        position={[0, 2, 0]}
        scale={2.053}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['Material.001']}
        position={[0, 2, 0]}
        scale={2.053}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['Material.001']}
        position={[1.9, 1.03, -0.23]}
        scale={[0.094, 0.255, 0.189]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['Material.001']}
        position={[1.9, 1.03, 0.23]}
        scale={[0.094, 0.255, 0.189]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['Material.001']}
        position={[1.9, 1.03, 0.69]}
        scale={[0.094, 0.255, 0.189]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials['Material.001']}
        position={[1.9, 1.03, -0.69]}
        scale={[0.094, 0.255, 0.189]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['Material.001']}
        position={[0, 2, -2.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.697, 0.172, 0.697]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['Material.001']}
        position={[0, 2, 2.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.697, 0.172, 0.697]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials.Material}
        position={[0, 4.5, 0]}
        scale={0.406}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['Material.001']}
        position={[2.03, 2.01, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.387, 0.424, 0.387]}
      />
    </group>
  )
}

useGLTF.preload('/robot.glb')
