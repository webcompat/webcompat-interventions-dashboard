/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function hrStringForPlatform(platform) {
  switch (platform) {
    case "desktop":
      return "Desktop";
    case "android":
      return "Android";
    default:
      return "All platforms";
  }
}

export default class {
  static Injection(data) {
    return {
      bug: data.bug,
      type: "CSS/JS injection",
      domain: data.domain,
      platform: hrStringForPlatform(data.platform),
    };
  }

  static UaOverride(data) {
    return {
      bug: data.bug,
      type: "User Agent override",
      domain: data.domain,
      platform: hrStringForPlatform(data.platform),
    };
  }
}
