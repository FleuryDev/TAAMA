import {
    Fragment,
    useEffect,
    useRef,
    useState,
} from 'react';

import edjsHTML from 'editorjs-html';

import AttachesTool from '@editorjs/attaches';
import Checklist from '@editorjs/checklist';
import codeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import EditorJS from '@editorjs/editorjs';
import embed from '@editorjs/embed';
import Header from '@editorjs/header';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import EditorjsList from '@editorjs/list';
// import ImageTool from '@editorjs/image';
import Marker from '@editorjs/marker';
import Quote from '@editorjs/quote';
import RawTool from '@editorjs/raw';
import SimpleImage from '@editorjs/simple-image';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';

const DEFAULT_INITIAL_DATA = () => {
    return {
        "time": new Date().getTime(),
        "blocks": [
            {
                "type": "header",
                "data": {
                    "text": "Awesome editor !",
                    "level": 1
                }
            },
        ]
    }
}

const EDITOR_HOLDER_ID = 'editorjs';
const Editor = (props) => {
    const [HTML_OUTPUT, setHTML_OUTPUT] = useState(null)
    const ejInstance = useRef(null);
    const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);
    useEffect(() => {
        if (!ejInstance.current) {
            initEditor();
        }
        return () => {


            ejInstance.current?.destroy()
            ejInstance.current = null;

        }
    }, []);

    function savaData(data) {
        console.log('Data saved ! ', data);
        const edjsParser = edjsHTML({}, { strict: true })
        const HTML = edjsParser.parse(data)
        setHTML_OUTPUT(HTML)

    }
    const initEditor = () => {

        const editor = new EditorJS({
            placeholder: 'Tape anaything !',
            holder: EDITOR_HOLDER_ID,
            logLevel: "ERROR",
            data: editorData,
            inlineToolbar: true,
            autofocus: true,
            onReady: (api) => {
                ejInstance.current = editor;
            },
            onChange: async (api, event) => {


                let content = await api.saver.save()
                setEditorData((content) => content
                )

            },
            tools: {
                header: Header,
                inlineCode: InlineCode,
                linkTool: LinkTool,
                embed: embed,
                table: Table,
                quote: Quote,
                delimiter: Delimiter,
                list: {
                    class: EditorjsList,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    },
                },
                checklist: Checklist,
                image: SimpleImage,
                code: codeTool,
                Marker: Marker,
                warning: Warning,
                attaches: AttachesTool,
                raw: RawTool,
            }

        });


    }
    const REGISTER = () => {

        ejInstance.current.saver.save().then(data => savaData(data)).catch((error) => {
            console.log('Saving failde : ', error);

        });



    }
    return <Fragment>
        <div className="flex flex-wrap w-full">

            <div className="flex border shadow w-full lg:w-8/12 flex-col space-y-4 p-6">
                <div className="relative flex w-full border border-gray-300">
                    <label htmlFor="title" className='w-max border-b-blue-500 block text-nowrap bg-transparent px-2 py-1 font-bold text-lg'>Titre :*</label>
                    <input
                        name='slug'
                        type="text"
                        className="w-full font-bold text-lg px-2 outline-1 outline-blue-500 flex-1 min-w-[350px]"

                    />
                </div>
                <div className="relative flex w-full border border-gray-300">
                    <label htmlFor="slug" className='w-max border-b-blue-500 h-min block text-nowrap bg-transparent px-2 py-1 font-bold text-lg'>Slug :*</label>
                    <input
                        name='slug'
                        type="text"
                        className="w-full font-bold text-lg px-2 outline-1 outline-blue-500 flex-1 min-w-[350px]"

                    />
                </div>
                <div className="relative flex w-full border border-gray-300">
                    <label htmlFor="description" className='w-max block text-nowrap bg-transparent px-2 py-1 font-bold text-lg'>Description :</label>
                    <textarea
                        name='description'
                        id="content"
                        className="w-full border-transparent outline-none p-2  flex-1 min-w-[350px] h-36"
                        placeholder="Entrer une description"
                    />
                </div>
            </div>
            <div className="flex border shadow w-full lg:w-4/12 flex-col space-y-4 p-6">
                <p className='mx-auto text-center text-gray-600'>Preview Image</p>
                <div className="block border mx-auto rounded w-max">
                    <label className='border-0 bg-transparent  place-content-around flex justify-center ' htmlFor="img"><svg className='object-cover mx-auto fill-gray-500 flex-none size-4/6 place-self-center self-center justify-around' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /></svg></label>
                    <input id='img' hidden name='img' type="file" />
                </div>
                <div className="relative flex w-full border border-gray-300">
                    <label htmlFor="caption" className='w-max border-b-blue-500 block text-nowrap bg-transparent px-2 py-1 '>Caption :</label>
                    <input
                        name='caption'
                        type="text"
                        className="w-full  px-2 outline-1 outline-blue-500 flex-1 "

                    />
                </div>
            </div>
        </div>
        <div id={"editorjs"} className='border flex lg:w-9/12 mx-auto p-4 flex-col *:w-full'></div>
        <div className='border mt-2 flex  p-2 lg:w-9/12 mx-auto'>
            <button className='bg-green-500 text-xl px-2 py-1 text-white rounded shadow ml-auto' onClick={REGISTER}>Save</button>
        </div>
        <div className="flex w-full mt-6 border">
            <h2 className='mb-2 text-center'>OUPTUT</h2>
            <div className="flex w-full" dangerouslySetInnerHTML={{ __html: HTML_OUTPUT }}>

            </div>
        </div>
    </Fragment>;

}

export default Editor