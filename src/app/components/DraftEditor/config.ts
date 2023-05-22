import { DefaultDraftBlockRenderMap } from "draft-js";
import Immutable from "immutable"


export enum blockType {
    /* Заголовки */
    h1 = 'header-one',
    // h2 = 'header-two',
    // h3 = 'header-three',
    // h4 = 'header-four',
    // h5 = 'header-five',
    // h6 = 'header-six',
    /* Цитата */
    // blockquote = 'blockquote',
    // /* Блок с кодом */
    // code = 'code-block',
    // /* Список */
    // list = 'unordered-list-item',
    // /* Нумерованный список */
    // orderList = 'ordered-list-item',
    // /* Сноска */
    cite = 'cite',
    /* Простой текст */
    default = 'unstyled',
  }

  const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
    [blockType.cite]: {
      element: 'cite',
    },
    [blockType.h1]: {
        element: 'h1',
      },
    
  }); 

////////////////////////////////////////////////////
  export enum InlineStyle {
    BOLD = 'BOLD',
    ITALIC = 'ITALIC',
    UNDERLINE = 'UNDERLINE',
    ACCENT = 'ACCENT' // код нашего произвольного стиля
  }

  export const CUSTOM_STYLE_MAP = {
    [InlineStyle.ACCENT]: {
      backgroundColor: '#F7F6F3',
      color: '#A41E68',
    },
  };



  export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(CUSTOM_BLOCK_RENDER_MAP);
