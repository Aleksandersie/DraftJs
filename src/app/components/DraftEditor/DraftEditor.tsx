"use client"
import { FC, useCallback, useMemo, useState } from "react"
import {Editor, EditorState, RichUtils} from 'draft-js'
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP, InlineStyle, blockType } from "./config"
import { stateToHTML } from "./converter"
import { convertToHTML } from "draft-convert"
import ApplyText from "./ApplyText"



function DraftEditor(){
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    

    function handleChange(state:EditorState){
        setEditorState(state)
        console.log(state)
    }

   
   
        const toggleBlockType = useCallback((blockType:blockType) => {
            setEditorState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
        }, []);


        const currentBlockType = useMemo(() => {
            /* Шаг 1 */
            const selection = editorState.getSelection();
            /* Шаг 2 */
            const content = editorState.getCurrentContent();
            /* Шаг 3 */
            const block = content.getBlockForKey(selection.getStartKey());
            /* Шаг 4 */
            return block.getType() as blockType;
          }, [editorState]);
        ///////////////////////////////

        const toggleInlineStyle = useCallback((inlineStyle: InlineStyle) => {
            setEditorState((currentState) => RichUtils.toggleInlineStyle(currentState, inlineStyle))
          }, []);

          const hasInlineStyle = useCallback((inlineStyle: InlineStyle) => {
            /* Получаем иммутабельный Set с ключами стилей */
            const currentStyle = editorState.getCurrentInlineStyle();
            /* Проверяем содержится ли там переданный стиль */
            return currentStyle.has(inlineStyle);
          }, [editorState]);  
    ////////////////////

const INLINE_STYLES_CODES = Object.values(InlineStyle);

const EditorTools: React.FC = () => {
    //const { toggleInlineStyle, hasInlineStyle } = useEditorApi();
    
    return (
      <div className="tool-panel">
        
        {INLINE_STYLES_CODES.map((code) => {
          const onMouseDown = (e:any) => {
            e.preventDefault();
            toggleInlineStyle(code);
          };
      
          return (
            <button
              key={code}
              
              onMouseDown={onMouseDown}
            >
              {code}
            </button>
          );
        })}
      </div>
    );
  };
  ///////////////////////////

  const HEADERS_CODES = Object.values(blockType);
  const Headers: React.FC = () => {
    //const { toggleInlineStyle, hasInlineStyle } = useEditorApi();
    
    return (
      <div className="tool-panel">
        
        {HEADERS_CODES.map((code) => {
          const onMouseDown = (e) => {
            e.preventDefault();
            toggleBlockType(code);
          };
      
          return (
            <button
              key={code}
              
              onMouseDown={onMouseDown}
            >
              {code}
            </button>
          );
        })}
      </div>
    );
  };

//   const toHtml = useCallback(() => {
//     return stateToHTML(editorState.getCurrentContent());
//     }, [editorState]);

// const html = convertToHTML(editorState.getCurrentContent());
// console.log(html)
let text
function convert(){
    const html = convertToHTML(editorState.getCurrentContent());
    //convertToHTML(editorState.getCurrentContent());
    text = html
    console.log(html)
    
}
console.log("text is", text)
    return (
        <>  
            
            <Headers/>
            <EditorTools/>
            <button onClick={()=>convert()}>to html</button>
            <Editor 
            editorState={editorState} 
            onChange={handleChange} 
            customStyleMap={CUSTOM_STYLE_MAP}
            blockRenderMap={BLOCK_RENDER_MAP}/>
            <ApplyText/>
        </>  
    )
}



export default DraftEditor

