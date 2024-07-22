import SplitType from 'split-type';

export function initializeTextSplitting() {
  new SplitType('[text-split]', { types: 'words,chars', tagName: 'span' });
}
