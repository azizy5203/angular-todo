import { Component,Input,OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'file-uploader-field',
  imports: [],
  templateUrl: './file-uploader-field.component.html',
  styleUrl: './file-uploader-field.component.scss',
})
export class FileUploaderFieldComponent implements OnInit, OnDestroy { 
  files: File[] = [];
  dropZoneActive: boolean = false;
  @Input() maxSize: number = 10;
  @Input() multiple: boolean = true;
  @Input() allowedFileTypes: string[] = [
    ".xlxs",
    ".docx",
    ".pdf",
    ".ppt",
    ".pptx",
    ".doc",
    ".xls",
    ".xlsx",
    ".mpp",
    ".jpg",
    ".png"
  ];
  ngOnInit(): void {
    window.addEventListener('dragover', (event: DragEvent)=>event.preventDefault(), false);
    window.addEventListener('drop', (event: DragEvent)=>event.preventDefault(), false);
  }

  ngOnDestroy() {
    window.removeEventListener('dragover', (event: DragEvent)=>event.preventDefault(), false);
    window.removeEventListener('drop', (event: DragEvent)=>event.preventDefault(), false);
  }


  onFileChange(event: Event,fileInput: HTMLInputElement) {
    const target = event.target as HTMLInputElement;
    this.handleFilesAdded(Array.from(target.files || []));
    fileInput.value = '';
    console.log(this.files)
  }

  onDrop(event: DragEvent,fileInput: HTMLInputElement) {
    event.preventDefault();
    this.dropZoneActive = false;
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFilesAdded(Array.from(files));
    fileInput.value = '';

    }
  }

  handleFilesAdded(files: File[]){
    this.files = [...this.files, ...[...files]];
  }

  onDragEnter(event: DragEvent){
    event.preventDefault();
    this.dropZoneActive = true
  }
  onDragLeave(event: DragEvent){
    event.preventDefault();
    this.dropZoneActive = false
  }
}
