/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import HTTP from "http";

import DataFormatters from "./lib/dataFormatters.js";
import DataLoader from "./lib/dataLoader.js";
import InterventionsConfig from "./config/interventions.js";

const server = HTTP.createServer(async (req, res) => {
  if (req.url != "/interventions.json") {
    res.statusCode = 404;
    res.write("not found");
    res.end();
    return;
  }

  const injections = await new DataLoader(InterventionsConfig.sources.injection).run();
  const uaOverrides = await new DataLoader(InterventionsConfig.sources.uaOverride).run();

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "GET");
  res.end(
    JSON.stringify(
      []
        .concat(injections.map(DataFormatters.Injection), uaOverrides.map(DataFormatters.UaOverride))
        .sort((a, b) => (parseInt(a.bug, 10) > parseInt(b.bug, 10) ? 1 : -1))
    )
  );
});

server.listen(8080, "0.0.0.0");
