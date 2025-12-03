import MathIntro, { meta as mathMeta } from "./mathematics/MathIntro";
import BayesTheoremBlog, {
  meta as bayesMeta,
} from "./mathematics/BayesTheoremBlog";
import JamesWebbTelescope, {
  meta as jwstMeta,
} from "./astronomy/JamesWebbTelescope";
import RoboticsIntro, { meta as roboticsMeta } from "./robotics/RoboticsIntro";
import { getReadingTime } from "../utils/readingTime";
import LagrangianMechanics, {
  meta as lagrangianMeta,
} from "./physics/LagrangianMechanics";

const posts = [
  {
    ...mathMeta,
    Component: MathIntro,
    readingTime: getReadingTime(mathMeta.plainText),
  },
  {
    ...bayesMeta,
    Component: BayesTheoremBlog,
    readingTime: getReadingTime(bayesMeta.plainText),
  },
  {
    ...jwstMeta,
    Component: JamesWebbTelescope,
    readingTime: getReadingTime(jwstMeta.plainText),
  },
  {
    ...roboticsMeta,
    Component: RoboticsIntro,
    readingTime: getReadingTime(roboticsMeta.plainText),
  },
  {
    ...lagrangianMeta,
    Component: LagrangianMechanics,
    readingTime: getReadingTime(lagrangianMeta.plainText),
  },
];

export default posts;
