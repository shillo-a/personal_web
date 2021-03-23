import React, { useEffect, useState } from 'react'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './DraftEditor.css'

const DraftEditorView = ({ jsonText }) => {

    const [editorState, setEditorState] = useState(() => {
        if(jsonText){
            return EditorState.createWithContent(convertFromRaw(JSON.parse(jsonText)))
        } else {
            return EditorState.createEmpty()
        } 
        })
    
    //Каждый раз при ОБНОВЛЕНИЕ ТЕЛА секции, ререндерим ее
    useEffect(()=>{
        if(jsonText){
            setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(jsonText))))
        } else {
            setEditorState(EditorState.createEmpty())
        } 
    }, [jsonText])
        
    const editorStateChangeHandler = (editorState) => {
        // setEditorState(editorState)
        // changejsonTextHandler(
        //     JSON.stringify(convertToRaw(editorState.getCurrentContent())), index
        // )
    }
    
    const getFileBase64 = (file, callback) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => callback(reader.result);
        reader.onerror = error => {};
    };

    const imageUploadCallback = file => new Promise(
        (resolve, reject) => getFileBase64(
            file,
            data => resolve({ data: { link: data } })
            ));

    return (
        <Editor 
            readOnly
            toolbarHidden
            editorState={editorState}
            onEditorStateChange={editorStateChangeHandler}
                wrapperClassName="wrapper-view-class"
                editorClassName="editor-view-class"
                toolbarClassName="toolbar-view-class"

                toolbar={{
                    image: {
                        uploadCallback: imageUploadCallback,
                        previewImage: true,
                    },
            }}
        />
  )
}

export default DraftEditorView