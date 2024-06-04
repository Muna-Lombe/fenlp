import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PdfProcessingService } from "./pdfprocessing.service";
import { UploadPdfDto } from "../pdfProcessing/UploadPdfDto";
import { ProcessedPdfDataDto } from "../pdfProcessing/ProcessedPdfDataDto";

@swagger.ApiTags("pdfProcessings")
@common.Controller("pdfProcessings")
export class PdfProcessingController {
  constructor(protected readonly service: PdfProcessingService) {}

  @common.Post("/process-pdf-document")
  @swagger.ApiOkResponse({
    type: ProcessedPdfDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessPdfDocument(
    @common.Body()
    body: UploadPdfDto
  ): Promise<ProcessedPdfDataDto> {
        return this.service.ProcessPdfDocument(body);
      }

  @common.Get("/retrieve-processed-data/:id")
  @swagger.ApiOkResponse({
    type: ProcessedPdfDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveProcessedData(
    @common.Body()
    body: UploadPdfDto
  ): Promise<ProcessedPdfDataDto> {
        return this.service.RetrieveProcessedData(body);
      }

  @common.Get("/:id/upload-pdf")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadPdf(
    @common.Body()
    body: UploadPdfDto
  ): Promise<string> {
        return this.service.UploadPdf(body);
      }

  @common.Post("/upload-pdf-document")
  @swagger.ApiOkResponse({
    type: UploadPdfDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadPdfDocument(
    @common.Body()
    body: UploadPdfDto
  ): Promise<UploadPdfDto> {
        return this.service.UploadPdfDocument(body);
      }
}
