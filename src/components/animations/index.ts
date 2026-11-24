import NeuralNet from './NeuralNet.astro';
import ScanList from './ScanList.astro';
import Workflow from './Workflow.astro';

// Jede Projektseite zeigt am rechten Rand eine kleine, dekorative Animation.
// Neue Animation: Komponente hier anlegen, unten eintragen und denselben Namen
// in `animation` in src/content.config.ts ergänzen. Das Projekt wählt sie mit `animation: <name>`.
export const animations = {
  'neural-net': NeuralNet,
  workflow: Workflow,
  scan: ScanList,
} as const;
