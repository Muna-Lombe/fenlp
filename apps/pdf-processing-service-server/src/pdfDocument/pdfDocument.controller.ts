import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PdfDocumentService } from "./pdfDocument.service";
import { PdfDocumentControllerBase } from "./base/pdfDocument.controller.base";

@swagger.ApiTags("pdfDocuments")
@common.Controller("pdfDocuments")
export class PdfDocumentController extends PdfDocumentControllerBase {
  constructor(protected readonly service: PdfDocumentService) {
    super(service);
  }
}
