Less
====

Duplication, oh no!
-------------------

Usage:
`node lessPatternId.js --path '/Users/yourname/Development/project/yoursrc/less'`

Output:
```
Thank you for using less duplication detection tool
Blocks that could be combined are scored by the number of properties * the number of occurrences
Reading duplications severity scores:
37bd016019a2f6d0795d8ca1633d2516
1
[ '/Users/yourname/Development/project/yoursrc/less/less/common/static.less',
  '/Users/yourname/Development/project/yoursrc/less/less/common/static.less' ]
[ '@media only screen and (max-width: 700px) {\n                    column-count: 1',
  'column-gap: 0px' ]


7c4c07cf280977479090b42887a74559
1
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/press.less' ]
[ 'overflow: visible', 'position: relative' ]


dfb250c77aa2a0adb12ba09519c1403d
1
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/press.less' ]
[ 'max-width: none', 'position: absolute' ]


ef6273c3af168428388a57161706731f
1
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/press.less' ]
[ 'left: 24px', 'width: 1px' ]


28ebe7ba54e3291d203cbf73ebbdf1d7
1
[ '/Users/yourname/Development/project/yoursrc/less/less/home.less',
  '/Users/yourname/Development/project/yoursrc/less/less/yourPage.less' ]
[ 'margin-right: auto', 'min-width: 0px' ]


29bad6fdd3377b71989b9f1744f53adb
1
[ '/Users/yourname/Development/project/yoursrc/less/less/pricing.less',
  '/Users/yourname/Development/project/yoursrc/less/less/yourPage.less' ]
[ 'break-inside: avoid',
  'p {\n                -webkit-column-break-inside: avoid' ]


373b4dc1733872e7c477f239a1577893
2
[ '/Users/yourname/Development/project/yoursrc/less/less/common/static.less',
  '/Users/yourname/Development/project/yoursrc/less/less/common/static.less',
  '/Users/yourname/Development/project/yoursrc/less/less/common/static.less' ]
[ 'background-repeat: no-repeat', 'background-size: 100%' ]


901f5587ba4bdcdcf19aa1bc11629814
2
[ '/Users/yourname/Development/project/yoursrc/less/less/company.less',
  '/Users/yourname/Development/project/yoursrc/less/less/company.less' ]
[ 'margin-left: 0px',
  'margin-right: 0px',
  'max-width: ~\'calc(100% - 400px)\'' ]


15149ddec54265d16e74b537f58d9141
2
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/press.less' ]
[ 'background-color: white', 'width: 100%', 'z-index: 1' ]


b46e18f15401749b259b3231f3491d9e
2
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/press.less' ]
[ 'margin: 45px auto 0',
  'max-width: @width',
  'padding: 60px 0 0 0' ]


a63c76a01f97ca91cb5899977fa0edd1
2
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/press.less' ]
[ 'top: 24px', 'width: 100%' ]


01d9c4da1a455d1e24a3a0d09ea1c191
2
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/press.less' ]
[ 'margin: 0 0 0 45px',
  'padding: 0 0 0 60px',
  'text-align: left' ]


18ec7d2c155adf83cd55ca1d1ff47201
2
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/pricing.less',
  '/Users/yourname/Development/project/yoursrc/less/less/yourPage.less' ]
[ 'margin-bottom: 40px', 'text-align: left' ]


e7924c3280c920afc7447acdcdde0e82
2
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/pricing.less' ]
[ 'border-radius: 50%', 'height: 40px', 'width: 40px' ]


ab54209944ecfd7aa416d1a203518c24
3
[ '/Users/yourname/Development/project/yoursrc/less/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/less/press.less' ]
[ 'height: 1px',
  'position: absolute',
  'transform-origin: 0% 0%',
  'width: 1px' ]


c151afaa29f4cbb4d273054f28da5924
4
[ '/Users/yourname/Development/project/yoursrc/less/less/common/static.less',
  '/Users/yourname/Development/project/yoursrc/less/less/common/static.less',
  '/Users/yourname/Development/project/yoursrc/less/less/common/static.less' ]
[ 'clear: both', 'display: block', 'height: 0' ]


10bbf4d6d80b656f0b995d27e26d9c98
4
[ '/Users/yourname/Development/project/yoursrc/less/less/common/static.less',
  '/Users/yourname/Development/project/yoursrc/less/less/press.less' ]
[ 'margin-left: auto',
  'margin-right: auto',
  'max-width: 900px',
  'padding-bottom: 10px',
  'padding-top: 10px' ]


7c44fb94444d21e7abeae2a453eb1420
4
[ '/Users/yourname/Development/project/yoursrc/less/less/home.less',
  '/Users/yourname/Development/project/yoursrc/less/less/yourPage.less' ]
[ 'left: 50%',
  'margin-top: 40px',
  'position: relative',
  'text-align: center',
  'transform: translateX(-50%)' ]


1cbca0bd79067f7a0bc50a89bce45b8c
4
[ '/Users/yourname/Development/project/yoursrc/less/less/home.less',
  '/Users/yourname/Development/project/yoursrc/less/less/yourPage.less' ]
[ 'border-top: none',
  'margin-bottom: 30px',
  'margin-left: auto',
  'margin-right: auto',
  'padding-bottom: 20px' ]
Complete.
```

