import MathIntro, { meta as mathMeta } from './mathematics/MathIntro';
import JamesWebbTelescope, { meta as jwstMeta } from './astronomy/JamesWebbTelescope';
import RoboticsIntro, { meta as roboticsMeta } from './robotics/RoboticsIntro';
import { getReadingTime } from '../utils/readingTime';

const posts = [
    { ...mathMeta, Component: MathIntro, readingTime: getReadingTime(mathMeta.plainText) },
    { ...jwstMeta, Component: JamesWebbTelescope, readingTime: getReadingTime(jwstMeta.plainText) },
    { ...roboticsMeta, Component: RoboticsIntro, readingTime: getReadingTime(roboticsMeta.plainText) }
];

export default posts;
