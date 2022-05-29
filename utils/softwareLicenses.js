
const licenses = [
  {
  "name": "Apache",
  "fullName": "Apache 2.0 License",
  "badge": "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)",
  "link": "https://opensource.org/licenses/Apache-2.0"
  },
  {
  "name": "Boost",
  "fullName": "Boost Software License 1.0",
  "badge": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  "link": "https://www.boost.org/LICENSE_1_0.txt"
  },
  {
  "name": "BSD",
  "fullName": "BSD 3-Clause License",
  "badge": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "link": "https://opensource.org/licenses/BSD-3-Clause"
  },
  {
  "fullName": "BSD 2-Clause License",
  "badge": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  "link": "https://opensource.org/licenses/BSD-2-Clause"
  },
  {
  "name": "Eclipse",
  "fullName": "Eclipse Public License 1.0",
  "badge": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  "link": "https://opensource.org/licenses/EPL-1.0"
  },
  {
  "name": "GNU",
  "fullName": "GNU GPL v3",
  "badge": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "link": "https://www.gnu.org/licenses/gpl-3.0"
  },
  {
  "name": "GNU",
  "fullName": "GNU GPL v2",
  "badge": "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  "link": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
  },
  {
  "name": "GNU",
  "fullName": "GNU AGPL v3",
  "badge": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  "link": "https://www.gnu.org/licenses/agpl-3.0"
  },
  {
  "name": "GNU",
  "fullName": "GNU LGPL v3",
  "badge": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  "link": "https://www.gnu.org/licenses/lgpl-3.0"
  },
  {
  "name": "GNU",
  "fullName": "GNU FDL v1.3",
  "badge": "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
  "link": "https://www.gnu.org/licenses/fdl-1.3"
  },
  {
  "name": "The Organization for Ethical Source",
  "fullName": "The Hippocratic License 2.1",
  "badge": "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
  "link": "https://firstdonoharm.dev/"
  },
  {
  "name": "The Organization for Ethical Source",
  "fullName": "The Hippocratic License 3.0",
  "badge": "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
  "link": "https://firstdonoharm.dev/"
  },
  {
  "name": "IBM",
  "fullName": "IBM Public License Version 1.0",
  "badge": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  "link": "https://opensource.org/licenses/IPL-1.0"
  },
  {
  "name": "ISC",
  "fullName": "ISC License (ISC)",
  "badge": "[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  "link": "https://opensource.org/licenses/ISC"
  },
  {
  "name": "MIT",
  "fullName": "The MIT License",
  "badge": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "link": "https://opensource.org/licenses/MIT"
  },
  {
  "name": "Mozilla",
  "fullName": "Mozilla Public License 2.0",
  "badge": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "link": "https://opensource.org/licenses/MPL-2.0"
  },
  {
  "name": "Open Data Commons",
  "fullName": "Open Database License (ODbL)",
  "badge": "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
  "link": "https://opendatacommons.org/licenses/odbl/"
  },
  {
  "name": "Perl",
  "fullName": "The Perl License",
  "badge": "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  "link":  "https://opensource.org/licenses/Artistic-2.0"
  },
  {
  "name": "SIL",
  "fullName": "SIL Open Font License 1.1",
  "badge": "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
  "link": "https://opensource.org/licenses/OFL-1.1"
  },
  {
  "name": "Unlicense ",
  "fullName": "The Unlicense",
  "badge": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "link": ""
  },
  {
  "name": "WTFPL",
  "fullName": "The Do What the Fuck You Want to Public License",
  "badge": "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
  "link": ""
  },
  {
  "name": "Zlib",
  "fullName": "The zlib/libpng License",
  "badge": "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
  "link": "https://opensource.org/licenses/Zlib"
  }
];

module.exports = licenses;