import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '@app/environments/environment';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FileUploadModule, CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
  providers: [MessageService],
})
export class FileUploadComponent {
  uploadedFiles: any[] = [];
  fileUploadUrl: string = environment.endpoints.productInventoryFileUpload;

  constructor(private messageService: MessageService) {}

  onUpload(event: any): void {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }
}
