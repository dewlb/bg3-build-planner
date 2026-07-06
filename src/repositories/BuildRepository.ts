import builds from "../data/builds.json";

import { BuildSchema } from "../models/build/Build";
import type { Build } from "../models/build/Build";

export class BuildRepository {

    static getAllBuilds(): Build[] {

        return builds.map(build =>
            BuildSchema.parse(build)
        );

    }

}