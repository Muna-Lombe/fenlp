import { Injectable } from "@nestjs/common";
import { ProcessPdfDto } from "../pdfProcessing/ProcessPdfDto";
import { ProcessedPdfDataDto } from "../pdfProcessing/ProcessedPdfDataDto";
import { UploadPdfDto } from "../pdfProcessing/UploadPdfDto";

@Injectable()
export class PdfProcessingService {
  constructor() {}
  async ProcessPdfDocument(args: ProcessPdfDto): Promise<ProcessedPdfDataDto> {
    throw new Error("Not implemented");
  }
  async RetrieveProcessedData(args: string): Promise<ProcessedPdfDataDto> {
    throw new Error("Not implemented");
  }
  async UploadPdf(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadPdfDocument(args: UploadPdfDto): Promise<UploadPdfDto> {
    throw new Error("Not implemented");
  }
}
