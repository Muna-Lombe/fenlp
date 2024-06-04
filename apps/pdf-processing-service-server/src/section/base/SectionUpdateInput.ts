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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ImageUpdateManyWithoutSectionsInput } from "./ImageUpdateManyWithoutSectionsInput";
import { Type } from "class-transformer";
import { PdfDocumentWhereUniqueInput } from "../../pdfDocument/base/PdfDocumentWhereUniqueInput";

@InputType()
class SectionUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => ImageUpdateManyWithoutSectionsInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutSectionsInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutSectionsInput, {
    nullable: true,
  })
  images?: ImageUpdateManyWithoutSectionsInput;

  @ApiProperty({
    required: false,
    type: () => PdfDocumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PdfDocumentWhereUniqueInput)
  @IsOptional()
  @Field(() => PdfDocumentWhereUniqueInput, {
    nullable: true,
  })
  pdfDocument?: PdfDocumentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { SectionUpdateInput as SectionUpdateInput };