export class File {
    /** Downloads the content of the url. 
    * @param url The url.
    * @param filename The name of the file.
    */
    static download(url: string, filename: string): void {
        const a = document.createElement('a');

        a.style.display = 'none';
        a.href = url;
        a.download = filename;
        
        document.body.appendChild(a);
        
        a.click();
        a.remove();

        setTimeout(() => {
            window.URL.revokeObjectURL(url);
        }, 1000);
    }
}