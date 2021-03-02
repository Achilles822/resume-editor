export const mock = [
  {
    id: 1,
    type: 'BASIC_INFOMATION', //基本信息
    name: '颜梓煜',
    blogAddress: 'https://yanziyu.tech',
    email: '779239635@qq.com',
    github: 'https://github.com/Achilles822',
    phoneNumber: '15622281560',
    title: 'Web前端工程师'
  },
  {
    id: 2,
    type: 'EDUCATION_EXPERIENCE', // 教育信息
    universityName: '广州大学华软软件学院',
    startYear: '2014',
    endYear: '2018',
    major: '信息工程',
    degree: '本科',
    englishLevel: '英语六级',
    description:
      '本人有3年前端工作经验，乐于接触新的前端技术，从工作中总结并尝试提高效率（开发工具及组件）。平时通过Google、github等网站解决开发问题，能够科学上网及阅读英文文档。现主要独立负责集团新收银业务线的Windows端及iPad端开发，具有跨端及小程序项目经验。',
    brightenedDots: [
      '熟练掌握Vue.js，能使用相关生态的插件(Vue Router、Vuex)独立完成项目开发，编写符合规范的组件。',
      '能够使用Electron独立开发项目。',
      '能够使用uni-app或原生小程序开发项目。',
      '能够使用Node.js或者Deno编写server端。',
      '能够使用React编写简单项目。'
    ]
  },
  {
    id: 3,
    type: 'WORK_EXPERIENCE',
    companyName: '大头科技（九毛九集团子公司）',
    startTime: '2020-06',
    endTime: '至今',
    position: '前端工程师',
    projects: [
      {
        projectName: 'GPos收银系统',
        desc:
          '该项目为本人独立负责，经历从0到1的过程，技术栈为Electron+Vue2+Vuex，是一款为windows系统打造的收银系统，包含下单、正反扫收银、账单、报表、打印管理、系统设置等模块。前端组件基于ElementUI二次封装成新拟态风格，使用electron-updater做版本更新，目前已在五家太二门店上线，月流水达数百万。',
        startTime: '2020-07',
        endTime: '至今'
      },
      {
        projectName: 'GPos for iPad',
        desc:
          '该项目为本人独立负责，作为顾客点菜的iPad端，包含点单、桌台切换、会员录入、券核销等功能。使用uni-app开发后打包成ipa，目前正在准备上架app store，即将在太二旗舰店投入使用。',
        startTime: '2020-12',
        endTime: '至今'
      }
    ]
  },
  {
    id: 3,
    type: 'WORK_EXPERIENCE',
    companyName: '赫基国际',
    startTime: '2018-06',
    endTime: '2020-05',
    position: '前端工程师',
    projects: [
      {
        projectName: 'Trendy移动端页面编辑器',
        desc:
          '该项目是为了解决方便运营同事对移动端官网、小程序页面日常更新的痛点，可以不发版更新页面，内置多种常见组件，类似于淘宝的店铺装修。该工具为本人独立开发，使用Vue2+Vuex，基于vue-cli3构建，封装多种常见组件，如swiper、banner、列表页、视频、领券、热区图等。可预览效果及拖拽改变顺序，输出json格式，再由小程序与官网模板渲染出界面。',
        startTime: '2020-03',
        endTime: '至今'
      },
      {
        projectName: 'Ochirly+小程序',
        desc:
          '女装品牌欧时力的官方小程序，承载了购物流程、微分销以及常见的营销活动。使用原生小程序开发。同步微信最新支持的营销特性（如直播、好物圈）为运营提供技术支撑。对常用业务组件进行组件化，并进行分包，从而优化性能。',
        startTime: '2019-03',
        endTime: '至今'
      },
      {
        projectName: 'Miss Sixty小程序',
        desc:
          '女装品牌Miss Sixty官方商城小程序，除了商城功能，还包含微分销功能，如微分销组货、拉新、代下单等。方便分销员建立与维护自己的粉丝圈，从而产生更高的销售。采用原生小程序开发，对营销组件与购物流程进行开发与维护，可复用的模块做了组件化并可与其他品牌小程序共用。对用户不可直接触达的页面进行分包，加快加载速度。做了自研数据埋点，可对某一用户行为轨迹进行追踪。',
        startTime: '2018-08',
        endTime: '至今'
      },
      {
        projectName: 'EC管理系统',
        desc:
          '公司的电商管理系统，包含订单相关的众多功能。为公司的主要业务系统之一。开发异常订单模块、黑名单管理以及若干个报表。使用Vue2、Vuex、Vue-Router，后端使用egg，均使用typescript实现，在开发过程中，先使用swagger mock接口，后再进行联调，从而达到前后端分离。',
        startTime: '2019-07',
        endTime: '至今'
      },
      {
        projectName: '赫基集团圣诞H5',
        desc:
          '集团的圣诞H5活动，可自由选择头像、服装、品牌后组合生成头像及活动海报，用vue+canvas实现。',
        startTime: '2019-12',
        endTime: ''
      }
    ]
  },
  {
    id: 4,
    type: 'WORK_EXPERIENCE',
    companyName: '深圳市览众科技有限公司',
    startTime: '2017-07',
    endTime: '2018-05',
    position: '前端工程师',
    projects: [
      {
        projectName: '易方达产品管理系统',
        desc:
          '	将公司产品进行集中管理，有利于全面把握公司产品整体情况。包含多文件上传与下载、图表数据展示、产品状态切换、产品查询、输入逻辑控制等等。基于Angular4，使用了lodash、adminlte等库。负责基金行业排名第一的易方达基金管理有限公司金融管理系统的前端原型开发、逻辑开发及进度把控，合理分配任务给前端开发人员，确保开发任务能按时完成、协助处理问题，包括与客户对接解决部署问题、bug排查、更换插件等。',
        startTime: '2017-09',
        endTime: '2018-05'
      }
    ]
  },
  {
    id: 5,
    type: 'OPEN_SOURCE',
    title: '开源项目｜OPEN SOURCE',
    projects: [
      {
        projectName: 'kg-downloader',
        desc:
          '使用koa框架模拟请求获取用户的所有作品，实现在线试听、单曲下载、批量下载的功能。'
      },
      {
        projectName: 'resume-editor',
        desc:
          '为了方便快速地修改和生成简历制作的一个简历生成器，使用react开发，此简历由该编辑器生成。'
      }
    ]
  }
]
