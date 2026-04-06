export type ComponentSize = 'small' | 'large';

export const getTitleSpecs = (type: ComponentSize) => {
  return {
    TitleTag: type === 'small' ? ('h4' as const) : ('h3' as const),
    titleClass: type === 'small' ? 'title-h4' : 'title-h3',

    bodyClass: type === 'small' ? 'body-p3' : 'body-p2',
    descClass: type === 'small' ? 'body-p4' : 'body-p3',
  };
};