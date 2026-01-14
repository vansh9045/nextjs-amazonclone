import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AmazonDatumrServiceBase } from "./base/amazonDatumr.service.base";

@Injectable()
export class AmazonDatumrService extends AmazonDatumrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
