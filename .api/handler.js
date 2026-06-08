
// Files Imports
import Express from "express";

import * as configure from "@api/configure";

export const handler = Express();
configure.handlerBefore?.(handler);

configure.handlerAfter?.(handler);
