import React, { useState } from "react";
import { DocumentIcon, ImageIcon, PdfIcon, PowerpointIcon, ExcelIcon, IconProps } from "./Icon";

interface ItemProps {
    name : string,
    extension : string,
    selected : boolean
}

interface Extension {
    excel : string[],
    powerPoint : string[],
    document : string[],
    image : string[],
    pdf : string[]
}

const extensions : Extension = {
    document : ['doc', 'dot', 'wbk', 'docx', 'docm', 'dotx', 'dotm', 'docb', 'wll', 'wwl'],
    excel : ['xls', 'xlt', 'xlm', 'xll_', 'xla_', 'xla5', 'xla8', 'xlsx', 'xlsm', 'xltx', 'xltm', 'xlsb', 'xla', 'xlam', 'xll', 'xlw'],
    image : ['apng', 'avig', 'gif', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'webp', 'bmp', 'ico', 'tiff'],
    pdf : ['pdf'],
    powerPoint : ['pptx', 'pptm', 'potx', 'potm', 'ppam', 'ppsx', 'ppsm', 'sldx', 'sldm', 'pa']
};

const Icon = (props : IconProps & { extension : string } ) => {
    if(extensions.document.includes(props.extension)){
        return <DocumentIcon {...props} />;
    }
    else if(extensions.excel.includes(props.extension)){
        return <ExcelIcon {...props} />;
    }
    else if(extensions.image.includes(props.extension)){
        return <ImageIcon {...props} />;
    }
    else if(extensions.pdf.includes(props.extension)){
        return <PdfIcon {...props} />;
    }
    else if(extensions.powerPoint.includes(props.extension)){
        return <PowerpointIcon {...props} />;
    }
}

export default function IconItem(props : ItemProps) {
    const { name, extension, selected } = props;

    return (<div className={`w-24 ${selected ? 'text-blue-800' : 'text-black'}`}>
        <div className={`relative h-24 flex justify-center ${selected ? 'bg-blue-100' : ' bg-gray-200 '}`}>
            <div className="m-auto"><Icon extension={extension} color={selected ? '#0759a7' : '#59595C'} /></div>
        </div>
        <p className="relative truncate text-xs">{name}</p>       
    </div>);
}