import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PdfDocumentServiceBase } from "./base/pdfDocument.service.base";

@Injectable()
export class PdfDocumentService extends PdfDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
