import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}
