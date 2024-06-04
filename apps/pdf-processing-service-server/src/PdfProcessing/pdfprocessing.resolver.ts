import * as graphql from "@nestjs/graphql";
import { ProcessPdfDto } from "../pdfProcessing/ProcessPdfDto";
import { ProcessedPdfDataDto } from "../pdfProcessing/ProcessedPdfDataDto";
import { UploadPdfDto } from "../pdfProcessing/UploadPdfDto";
import { PdfProcessingService } from "./pdfprocessing.service";

export class PdfProcessingResolver {
  constructor(protected readonly service: PdfProcessingService) {}

  @graphql.Mutation(() => ProcessedPdfDataDto)
  async ProcessPdfDocument(
    @graphql.Args()
    args: ProcessPdfDto
  ): Promise<ProcessedPdfDataDto> {
    return this.service.ProcessPdfDocument(args);
  }

  @graphql.Query(() => ProcessedPdfDataDto)
  async RetrieveProcessedData(
    @graphql.Args()
    args: string
  ): Promise<ProcessedPdfDataDto> {
    return this.service.RetrieveProcessedData(args);
  }

  @graphql.Query(() => String)
  async UploadPdf(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadPdf(args);
  }

  @graphql.Mutation(() => UploadPdfDto)
  async UploadPdfDocument(
    @graphql.Args()
    args: UploadPdfDto
  ): Promise<UploadPdfDto> {
    return this.service.UploadPdfDocument(args);
  }
}
