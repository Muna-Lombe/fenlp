import { Module } from "@nestjs/common";
import { PdfDocumentModuleBase } from "./base/pdfDocument.module.base";
import { PdfDocumentService } from "./pdfDocument.service";
import { PdfDocumentController } from "./pdfDocument.controller";
import { PdfDocumentResolver } from "./pdfDocument.resolver";

@Module({
  imports: [PdfDocumentModuleBase],
  controllers: [PdfDocumentController],
  providers: [PdfDocumentService, PdfDocumentResolver],
  exports: [PdfDocumentService],
})
export class PdfDocumentModule {}
