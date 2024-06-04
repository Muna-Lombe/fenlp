/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PdfDocumentWhereUniqueInput } from "./PdfDocumentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PdfDocumentUpdateInput } from "./PdfDocumentUpdateInput";

@ArgsType()
class UpdatePdfDocumentArgs {
  @ApiProperty({
    required: true,
    type: () => PdfDocumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PdfDocumentWhereUniqueInput)
  @Field(() => PdfDocumentWhereUniqueInput, { nullable: false })
  where!: PdfDocumentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PdfDocumentUpdateInput,
  })
  @ValidateNested()
  @Type(() => PdfDocumentUpdateInput)
  @Field(() => PdfDocumentUpdateInput, { nullable: false })
  data!: PdfDocumentUpdateInput;
}

export { UpdatePdfDocumentArgs as UpdatePdfDocumentArgs };
