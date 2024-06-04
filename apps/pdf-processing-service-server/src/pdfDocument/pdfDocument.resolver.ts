import * as graphql from "@nestjs/graphql";
import { PdfDocumentResolverBase } from "./base/pdfDocument.resolver.base";
import { PdfDocument } from "./base/PdfDocument";
import { PdfDocumentService } from "./pdfDocument.service";

@graphql.Resolver(() => PdfDocument)
export class PdfDocumentResolver extends PdfDocumentResolverBase {
  constructor(protected readonly service: PdfDocumentService) {
    super(service);
  }
}
