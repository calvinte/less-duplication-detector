Less
====

Duplication, oh no!
-------------------

Usage:
`node lessPatternId.js --path '/Users/yourname/Development/project/yoursrc/less'`

Output:
```
Thank you for using less duplication detection tool
Blocks that can be combined are scored by (propertyCount * occurrencesCount)
Reading duplications severity scores (propertyHash, score, fileList, propertyList):
58cd33802de541116c24bf9c0b2e7c49
15
[ '/Users/yourname/Development/project/yoursrc/less/login.less',
  '/Users/yourname/Development/project/yoursrc/less/login.less',
  '/Users/yourname/Development/project/yoursrc/less/yourpage.less',
  '/Users/yourname/Development/project/yoursrc/less/yourpage.less' ]
[ 'font-size: 13px',
  'line-height: 1.4em',
  'margin-bottom: 25px',
  'padding-left: 10px',
  'padding-right: 10px',
  'position:relative' ]


eae190eea4cb2276b84a58fc768ac643
16
[ '/Users/yourname/Development/project/yoursrc/less/login.less',
  '/Users/yourname/Development/project/yoursrc/less/yourpage.less' ]
[ '-moz-osx-font-smoothing: grayscale',
  '-webkit-appearance: none',
  '-webkit-font-smoothing: antialiased',
  'background-color: rgba(0,0,0,0)',
  'border-radius: 0',
  'border: none',
  'box-shadow: none',
  'color: #4b595e',
  'font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif',
  'font-size: 13px',
  'font-weight: 500',
  'height: 28px',
  'margin: 0',
  'outline: none',
  'padding-left: 8px',
  'padding-right: 8px',
  'width:100%' ]


8e4960b02aa1114ac6b625c123714902
16
[ '/Users/yourname/Development/project/yoursrc/less/login.less',
  '/Users/yourname/Development/project/yoursrc/less/yourpage.less' ]
[ '-moz-appearance: none',
  '-webkit-appearance: none',
  'appearance: none',
  'background-color: rgba(0,0,0,0)',
  'border-radius: 4px',
  'color: #4b595e',
  'display:block',
  'font-size: 12px',
  'font-weight: bold',
  'height: 24px',
  'line-height: 24px',
  'outline: none',
  'padding-left: 8px',
  'padding-right: 20px',
  'position: relative',
  'text-align: left',
  'width: 100%' ]


af544128ee11b62b550d567f6f27ba92
18
[ '/Users/yourname/Development/project/yoursrc/less/login.less',
  '/Users/yourname/Development/project/yoursrc/less/yourpage.less' ]
[ 'border-bottom-left-radius: 7px',
  'border-bottom-right-radius: 5px',
  'border-top-left-radius: 7px',
  'border-top-right-radius: 5px',
  'box-shadow: inset 0 -1px 0 rgba(0,0,0,0.03), 0 0 0 1px rgba(0,0,0,0.08), 0 2px 5px rgba(0,0,0,0.2)',
  'font-size: 11px',
  'font-weight: bold',
  'height: 22px',
  'left: 100%',
  'line-height: 22px',
  'margin-left: -10px',
  'margin-top: -11px',
  'opacity: 0',
  'padding-left: 8px',
  'padding-right: 8px',
  'position:absolute',
  'top: 50%',
  'transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0.35s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
  'white-space: nowrap' ]


e8b7c2b7f6dd51dbae18bc10ced71d5d
20
[ '/Users/yourname/Development/project/yoursrc/less/customers.less',
  '/Users/yourname/Development/project/yoursrc/less/pricing.less',
  '/Users/yourname/Development/project/yoursrc/less/pricing.less' ]
[ 'border-radius: 20px',
  'display:inline-block',
  'margin-bottom: 30px',
  'margin-left: auto',
  'margin-right: auto',
  'margin-top: 10px',
  'max-width: 100%',
  'min-height: 35px',
  'min-width: 200px',
  'padding: 6px 40px',
  'position: relative' ]


5b762ad4bfacbe49a1c1293e3e43ba9c
21
[ '/Users/yourname/Development/project/yoursrc/less/common/staticPage.less',
  '/Users/yourname/Development/project/yoursrc/less/common/staticPage.less',
  '/Users/yourname/Development/project/yoursrc/less/pricing.less',
  '/Users/yourname/Development/project/yoursrc/less/pricing.less' ]
[ 'border-radius: 15px',
  'height: 100%',
  'left: 0',
  'pointer-events: none',
  'position:absolute',
  'top: 0',
  'width: 100%',
  'z-index: 999' ]


9310db6322aced6e147c0f943358f480
24
[ '/Users/yourname/Development/project/yoursrc/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/press.less',
  '/Users/yourname/Development/project/yoursrc/less/press.less' ]
[ 'animation: waves 2s ease-out infinite',
  'border-radius: 100%',
  'content:\'\'',
  'display: block',
  'height: 100%',
  'left: 0',
  'position: absolute',
  'top: 0',
  'width: 100%' ]


21b1a7633324d545f69d989cf61a87f0
24
[ '/Users/yourname/Development/project/yoursrc/less/features.less',
  '/Users/yourname/Development/project/yoursrc/less/home.less',
  '/Users/yourname/Development/project/yoursrc/less/press.less',
  '/Users/yourname/Development/project/yoursrc/less/yourothercoolpage.less' ]
[ 'background-color: rgba(0, 0, 0, 0)',
  'border-radius: 100%',
  'border: solid 1px #009CFF',
  'display: inline-block',
  'height: 8px',
  'margin: 0 4px',
  'position: relative',
  'top:-5px',
  'width: 8px' ]


b1958704a758b505b04c658446927243
27
[ '/Users/yourname/Development/project/yoursrc/less/login.less',
  '/Users/yourname/Development/project/yoursrc/less/login.less',
  '/Users/yourname/Development/project/yoursrc/less/yourpage.less',
  '/Users/yourname/Development/project/yoursrc/less/yourpage.less' ]
[ 'height: 98px',
  'left: 50%',
  'margin-left: -49px',
  'margin-top: -80px',
  'opacity: 1',
  'position:absolute',
  'top: 25%',
  'transform: scale(0.25, 0.25)',
  'transition: opacity 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.300) 0.5s, transform 0.25s cubic-bezier(0.175, 0.885, 0.320, 1.300) 0.5s',
  'width: 98px' ]


Complete!
```

