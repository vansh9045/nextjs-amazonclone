import { Module } from "@nestjs/common";
import { AmazonDatumrModuleBase } from "./base/amazonDatumr.module.base";
import { AmazonDatumrService } from "./amazonDatumr.service";
import { AmazonDatumrController } from "./amazonDatumr.controller";
import { AmazonDatumrResolver } from "./amazonDatumr.resolver";

@Module({
  imports: [AmazonDatumrModuleBase],
  controllers: [AmazonDatumrController],
  providers: [AmazonDatumrService, AmazonDatumrResolver],
  exports: [AmazonDatumrService],
})
export class AmazonDatumrModule {}
