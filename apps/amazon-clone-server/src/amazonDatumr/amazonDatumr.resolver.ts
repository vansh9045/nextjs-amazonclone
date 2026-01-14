import * as graphql from "@nestjs/graphql";
import { AmazonDatumrResolverBase } from "./base/amazonDatumr.resolver.base";
import { AmazonDatumr } from "./base/AmazonDatumr";
import { AmazonDatumrService } from "./amazonDatumr.service";

@graphql.Resolver(() => AmazonDatumr)
export class AmazonDatumrResolver extends AmazonDatumrResolverBase {
  constructor(protected readonly service: AmazonDatumrService) {
    super(service);
  }
}
