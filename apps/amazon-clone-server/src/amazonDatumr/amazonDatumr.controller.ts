import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AmazonDatumrService } from "./amazonDatumr.service";
import { AmazonDatumrControllerBase } from "./base/amazonDatumr.controller.base";

@swagger.ApiTags("amazonDatumrs")
@common.Controller("amazonDatumrs")
export class AmazonDatumrController extends AmazonDatumrControllerBase {
  constructor(protected readonly service: AmazonDatumrService) {
    super(service);
  }
}
