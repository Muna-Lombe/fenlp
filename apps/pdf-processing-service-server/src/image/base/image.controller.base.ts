/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ImageService } from "../image.service";
import { ImageCreateInput } from "./ImageCreateInput";
import { Image } from "./Image";
import { ImageFindManyArgs } from "./ImageFindManyArgs";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";
import { ImageUpdateInput } from "./ImageUpdateInput";

export class ImageControllerBase {
  constructor(protected readonly service: ImageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Image })
  async createImage(@common.Body() data: ImageCreateInput): Promise<Image> {
    return await this.service.createImage({
      data: {
        ...data,

        section: data.section
          ? {
              connect: data.section,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        imagePath: true,

        section: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Image] })
  @ApiNestedQuery(ImageFindManyArgs)
  async images(@common.Req() request: Request): Promise<Image[]> {
    const args = plainToClass(ImageFindManyArgs, request.query);
    return this.service.images({
      ...args,
      select: {
        createdAt: true,
        id: true,
        imagePath: true,

        section: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async image(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
    const result = await this.service.image({
      where: params,
      select: {
        createdAt: true,
        id: true,
        imagePath: true,

        section: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateImage(
    @common.Param() params: ImageWhereUniqueInput,
    @common.Body() data: ImageUpdateInput
  ): Promise<Image | null> {
    try {
      return await this.service.updateImage({
        where: params,
        data: {
          ...data,

          section: data.section
            ? {
                connect: data.section,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          imagePath: true,

          section: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteImage(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
    try {
      return await this.service.deleteImage({
        where: params,
        select: {
          createdAt: true,
          id: true,
          imagePath: true,

          section: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
