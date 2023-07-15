export class FileUpload { 
    key: string | undefined; 
    name: string | undefined;
    URL: string | undefined; 
    file!: File;
    
    costruttore(file: File) { 
      this.file = file; 
    } 
  }