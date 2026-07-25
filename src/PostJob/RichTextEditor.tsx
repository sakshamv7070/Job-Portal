import { useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Link from "@tiptap/extension-link";

import { RichTextEditor } from "@mantine/tiptap";

import { content } from "../Data/PostJob";


const TextEditor = () => {

  const editor = useEditor({

    extensions: [

      StarterKit,

      Underline,

      Highlight.configure({
        multicolor: true,
      }),

      TextAlign.configure({
        types: [
          "heading",
          "paragraph"
        ],
      }),

      Subscript,

      Superscript,


      Link.configure({
        openOnClick: false,
        autolink: true,
      }),

    ],


    content: content,

  });


  if (!editor) {
    return null;
  }


  return (

    <RichTextEditor editor={editor}>


      <RichTextEditor.Toolbar>


        {/* Bold Italic Underline */}
        <RichTextEditor.ControlsGroup>

          <RichTextEditor.Bold />

          <RichTextEditor.Italic />

          <RichTextEditor.Underline />

          <RichTextEditor.Strikethrough />

        </RichTextEditor.ControlsGroup>



        {/* Headings */}
        <RichTextEditor.ControlsGroup>

          <RichTextEditor.H4 />

        </RichTextEditor.ControlsGroup>




        {/* Lists */}
        <RichTextEditor.ControlsGroup>

          <RichTextEditor.BulletList />

          <RichTextEditor.OrderedList />

        </RichTextEditor.ControlsGroup>




        {/* Alignment */}
        <RichTextEditor.ControlsGroup>

          <RichTextEditor.AlignLeft />

          <RichTextEditor.AlignCenter />

          <RichTextEditor.AlignRight />

          <RichTextEditor.AlignJustify />

        </RichTextEditor.ControlsGroup>




        {/* Highlight */}
        <RichTextEditor.ControlsGroup>

          <RichTextEditor.Highlight />

          <RichTextEditor.ClearFormatting />

        </RichTextEditor.ControlsGroup>




        {/* Subscript Superscript */}
        <RichTextEditor.ControlsGroup>

          <RichTextEditor.Subscript />

          <RichTextEditor.Superscript />

        </RichTextEditor.ControlsGroup>




        {/* Link */}
        <RichTextEditor.ControlsGroup>

          <RichTextEditor.Link />

          <RichTextEditor.Unlink />

        </RichTextEditor.ControlsGroup>



      </RichTextEditor.Toolbar>



      <RichTextEditor.Content />



    </RichTextEditor>

  );
};


export default TextEditor;