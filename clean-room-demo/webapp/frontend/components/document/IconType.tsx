import { DocumentIcon, ExcelIcon, IconProps, ImageIcon, PdfIcon, PowerpointIcon } from "./Icon";

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

const IconType = (props : IconProps & { extension : string } ) => {
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

export default IconType;