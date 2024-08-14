import './styles/index.scss';

import { initializeformCode } from './formCode';
import { initializeglobalCode } from './globalCode';
import { initializeMarqueeAnimation } from './iconsRotacao';
import { initializeScrollEffect } from './missaoAnimation';
import { initializedragEffect } from './priceAnimation';
import { videoSettings } from './videoSettings';

initializeformCode();
videoSettings();
initializeMarqueeAnimation();
initializeScrollEffect();
initializedragEffect();
initializeglobalCode();
