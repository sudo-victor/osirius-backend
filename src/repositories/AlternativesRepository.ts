import { EntityRepository, Repository } from "typeorm";
import { Alternative } from "../app/entities/Alternative";

@EntityRepository(Alternative)
class AlternativesRepository extends Repository<Alternative> {}

export { AlternativesRepository };