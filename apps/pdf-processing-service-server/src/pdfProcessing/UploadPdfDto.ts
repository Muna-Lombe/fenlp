import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("UploadPdfDtoObject")
class UploadPdfDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    filePath!: string;

    @Field(() => Date)
    @Type(() => Date)
    uploadedAt!: Date;
}

export { UploadPdfDto as UploadPdfDto };