import { convertToHTML } from 'draft-convert';
import { CUSTOM_STYLE_MAP, blockType,  InlineStyle } from './config';


export const stateToHTML = convertToHTML<InlineStyle, blockType>({
    styleToHTML: (style) => {
      switch (style) {
        case InlineStyle.BOLD:
          return <strong />;
        default:
          return null;
      }
    },
    blockToHTML: (block) => {
      switch (block.type) {
        case blockType.h1:
            return <h1 />;
        case blockType.default:
          return <p />;
        default:
          return null;
      }
    },

  });