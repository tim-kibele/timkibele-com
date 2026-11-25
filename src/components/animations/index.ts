import AgentTeam from './AgentTeam.astro';
import Equalizer from './Equalizer.astro';
import Gamepad from './Gamepad.astro';
import KeyboardArt from './KeyboardArt.astro';
import NeuralNet from './NeuralNet.astro';
import Pebbles from './Pebbles.astro';
import ScanList from './ScanList.astro';
import Workflow from './Workflow.astro';

// Jede Projektseite und auf Wunsch eine Interessenseite zeigt am rechten Rand eine kleine, dekorative Animation.
// Neue Animation: Komponente hier anlegen, unten eintragen und denselben Namen
// in `animation` in src/content.config.ts ergänzen. Projekt oder Interesse wählt sie mit `animation: <name>`.
export const animations = {
  'neural-net': NeuralNet,
  workflow: Workflow,
  scan: ScanList,
  pebbles: Pebbles,
  agents: AgentTeam,
  gamepad: Gamepad,
  keyboard: KeyboardArt,
  equalizer: Equalizer,
} as const;
