import store from 'store2';


export const toggleDir = (newDir:string = "ltr") => {
    const links = document.querySelectorAll('link[rel="stylesheet"]');

    if (newDir === "rtl") {
        if (links.length) {
            links.forEach((styleSheet: any) => {
                if (styleSheet.href.endsWith('.chunk.css')) {
                    const link = document.createElement('link');
                    link.href = styleSheet.href.replace(/\.css$/, '.rtl.css');
                    link.rel = 'stylesheet';
                    document.head.appendChild(link);
                    //document.head.removeChild(styleSheet);
                }
            });
        }
    } else {
        links.forEach( (style:any) => {
            if (style.href.endsWith('.chunk.rtl.css')) {
              // const link = document.createElement('link');
              // link.href = style.href.replace(/\.rtl.css$/, '.css');
              // link.rel = 'stylesheet';
              // document.head.appendChild(link);
              document.head.removeChild(style);
            }
          });
    }
    setDir(newDir);
}


export const setDir = (dir: string) => {
    store.remove("dir");
    store("dir", dir);
}

const getDir = (): string => {
    return store("dir") ? store("dir") : "ltr";
}
export default getDir;