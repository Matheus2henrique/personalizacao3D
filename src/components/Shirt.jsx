// function Shirt({ type }) {
//   const colors = {
//     polo: "#0050b4",
//     regata: "#28a745",
//     camiseta: "#ff6b00",
//     social: "#f2f2f2"
//   };

//   return (
//     <group>

//       {/* cabeça */}

//       <mesh position={[0, 1.4, 0]}>
//         <sphereGeometry args={[0.5, 32, 32]} />
//         <meshStandardMaterial color="#f5cfa0" />
//       </mesh>

//       {/* tronco */}

//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[1.8, 2.5, 0.8]} />
//         <meshStandardMaterial
//           color={colors[type]}
//         />
//       </mesh>

//       {/* braços */}

//       <mesh position={[-1.2, 0, 0]}>
//         <cylinderGeometry
//           args={[0.2, 0.2, 1.8]}
//         />
//         <meshStandardMaterial
//           color={colors[type]}
//         />
//       </mesh>

//       <mesh position={[1.2, 0, 0]}>
//         <cylinderGeometry
//           args={[0.2, 0.2, 1.8]}
//         />
//         <meshStandardMaterial
//           color={colors[type]}
//         />
//       </mesh>

//     </group>
//   );
// }

// export default Shirt;