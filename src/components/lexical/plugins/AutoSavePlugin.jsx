import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import { $generateHtmlFromNodes } from '@lexical/html';

const savedState =
  '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Love is blind my love And I think am starting to get this shit","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}';

const AutoSavePlugin = () => {
  const [editor] = useLexicalComposerContext();

  const newEditorState = editor.parseEditorState(savedState);
  editor.setEditorState(newEditorState);

  useEffect(() => {
    editor.registerUpdateListener(({ editorState }) => {
      // The latest EditorState can be found as `editorState`.
      // To read the contents of the EditorState, use the following API:
      // const htmlString = $generateHtmlFromNodes(editor);
      // console.log('html :', htmlString);
      editorState.read(() => {
        const stringifiedEditorState = JSON.stringify(
          editor.getEditorState().toJSON()
        );

        console.log('string: ', stringifiedEditorState);

        const htmlString = $generateHtmlFromNodes(editor);
        console.log('html :', htmlString )
        // console.log("state: ", newEditorState);
        // Just like editor.update(), .read() expects a closure where you can use
        // the $ prefixed helper functions.
      });
    });
  }, [editor]);

  return null;
};

export default AutoSavePlugin;

// I might need autoLoadStatePlugin
