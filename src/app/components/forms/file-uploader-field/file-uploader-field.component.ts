import { Component, Input, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'file-uploader-field',
  standalone: true,
  templateUrl: './file-uploader-field.component.html',
  styleUrl: './file-uploader-field.component.scss',
})
export class FileUploaderFieldComponent implements OnInit, OnDestroy {
  files: File[] = [];
  dropZoneActive: boolean = false;
  errors: string[] = [];

  @Input() maxSize: number = 10; // Max file size in MB
  @Input() multiple: boolean = true;
  @Input() maxFiles: number = 5; // Maximum number of files allowed
  @Input() allowedFileTypes: string[] = [
    ".xlsx",
    ".pdf",
    ".ppt",
    ".pptx",
    ".doc",
    ".xls",
    ".mpp",
    ".jpg",
    ".png"
  ];

  ngOnInit(): void {
    window.addEventListener('dragover', (event: DragEvent) => event.preventDefault(), false);
    window.addEventListener('drop', (event: DragEvent) => event.preventDefault(), false);
  }

  ngOnDestroy() {
    window.removeEventListener('dragover', (event: DragEvent) => event.preventDefault(), false);
    window.removeEventListener('drop', (event: DragEvent) => event.preventDefault(), false);
  }

  onFileChange(event: Event, fileInput: HTMLInputElement) {
    this.errors = []; // Reset errors
    const target = event.target as HTMLInputElement;
    this.validateAndAddFiles(Array.from(target.files || []));
    fileInput.value = ''; // Clear the input
  }

  onDrop(event: DragEvent, fileInput: HTMLInputElement) {
    event.preventDefault();
    this.dropZoneActive = false;
    this.errors = []; // Reset errors
    const files = event.dataTransfer?.files;
    if (files) {
      this.validateAndAddFiles(Array.from(files));
      fileInput.value = ''; // Clear the input
    }
  }

  validateAndAddFiles(newFiles: File[]) {
    // Validate total number of files
    if (!this.multiple && newFiles.length > 1) {
      this.errors.push('Multiple file upload is not allowed.');
      return;
    }

    if (this.files.length + newFiles.length > this.maxFiles) {
      this.errors.push(`Maximum ${this.maxFiles} files are allowed.`);
      return;
    }

    // Filter and validate each file
    const validFiles: File[] = newFiles.filter(file => {
      // Validate file type
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      const isValidType = this.allowedFileTypes.includes(fileExtension);
      if (!isValidType) {
        this.errors.push(`Invalid file type: ${file.name}. Allowed types are ${this.allowedFileTypes.join(', ')}.`);
      }

      // Validate file size (convert MB to bytes)
      const maxSizeBytes = this.maxSize * 1024 * 1024;
      const isValidSize = file.size <= maxSizeBytes;
      if (!isValidSize) {
        this.errors.push(`File ${file.name} exceeds maximum size of ${this.maxSize}MB.`);
      }

      return isValidType && isValidSize;
    });

    // Add valid files
    if (validFiles.length > 0) {
      this.files = [...this.files, ...validFiles];
    }
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    this.dropZoneActive = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.dropZoneActive = false;
  }

  removeFile(fileToRemove: File) {
    this.files = this.files.filter(file => file !== fileToRemove);
  }
}