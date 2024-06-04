import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ProcessedPdfDataDtoObject")
class ProcessedPdfDataDto {
    @Field(() => [GraphQLJSON])
    sections!: InputJsonValue;

    @Field(() => [String])
    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    images!: string;
}

export { ProcessedPdfDataDto as ProcessedPdfDataDto };