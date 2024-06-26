/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { SectionCreateNestedManyWithoutPdfDocumentsInput } from "./SectionCreateNestedManyWithoutPdfDocumentsInput";
import { Type } from "class-transformer";

@InputType()
class PdfDocumentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filePath?: string | null;

  @ApiProperty({
    required: false,
    type: () => SectionCreateNestedManyWithoutPdfDocumentsInput,
  })
  @ValidateNested()
  @Type(() => SectionCreateNestedManyWithoutPdfDocumentsInput)
  @IsOptional()
  @Field(() => SectionCreateNestedManyWithoutPdfDocumentsInput, {
    nullable: true,
  })
  sections?: SectionCreateNestedManyWithoutPdfDocumentsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  uploadedAt?: Date | null;
}

export { PdfDocumentCreateInput as PdfDocumentCreateInput };
