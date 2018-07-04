<template>
  <div id="app" class="app">
  <template v-if="isPc">
    <div class="block1" @click="changeLanguage">{{language === 1 ? '中文' : 'English'}}
      <!-- <img src="./assets/icon01.png"> -->
      <!-- <div v-if="isLanguageShow">
        <span :class="language === 0 ? 'selected' : ''" @click="language = 0">中文</span>
        <span :class="language === 1 ? 'selected' : ''" @click="language = 1">English</span>
      </div> -->
    </div>
    <page :currentPage="currentPage" :style="img1" style="backgroundSize: 100% 100%">
    </page>
    <page :currentPage="currentPage" :style="img2" style="backgroundSize: 100% 100%">
      <iframe v-if="ispdfshowCn" class="pdf-viewer" :src='"/static/web/viewer.html?file=/static/QoodBlockWPV3.7-CH.pdf"' scrolling="no">
        您的浏览器不支持PDF阅读
      </iframe>
      <iframe v-if="ispdfshowEn" class="pdf-viewer" :src='"/static/web/viewer.html?file=/static/QoodBlockWPV3.7-EN.pdf"' scrolling="no">
        您的浏览器不支持PDF阅读
      </iframe>
      <div class="pdf-bg" v-if="ispdfshowCn" @click="ispdfshowCn = 0"></div>
      <div class="pdf-bg" v-if="ispdfshowEn" @click="ispdfshowEn = 0"></div>
      <div class="block2">
        <h1>QOODBLOCK</h1>
        <template v-if="this.language === 0">
          <img class="read" src="./assets/read.png" @click="ispdfshowCn = 1">
          <div>区块链技术支持的全球汽车数据交易市场和生态系统</div>
          <div>QoodBlock是基于区块链技术的车联网数据交易平台。QoodBlock旨在解决⻋车联网数据所有者和数据持有者之间的确权困扰，建立一个区块链车辆数据交易市场，满足数据持有者和数据消费者之间基于智能合约进行合法、透明、安全交易的现实诉求。</div>
          <img class="box" src="./assets/box.gif">
        </template>
        <template v-else>
          <img class="read" src="./assets/read02.png" @click="ispdfshowEn = 1">
          <div class="en">The global automotive data market and ecosystem supported by blockchain technology</div>
          <div class="en">QoodBlock is an IoV (Internet of Vehicles) data market based on blockchain technology. It aims at establishing a blockchain vehicle data trading market, to solve the problem of data ownership rights confirmation between data owners and holders, and achieve legitimate, transparent and secure transactions based on smart contracts between data owners and data users.</div>
          <img class="box" src="./assets/box.gif">
        </template>
      </div>
    </page>
    <page :currentPage="currentPage" :style="img3" style="backgroundSize: 100% 100%">
      <div class="block3">
        <template v-if="this.language === 0">
          <h1>行业痛点</h1>
          <div>随着技术的进步，汽车金融、保险以及交通出行等服务商正在朝着数据驱动的创新模式快速演进，对于车联网数据需求日益强烈。但由于没有得到用户的真正授权，目前车企并不不能随意处置和销售用户的车联网数据。
          </div>
          <div>使用数据必须得到用户的授权，交易数据的收益与用户分享，QoodBlock将用户（数据所有者）真正纳入到数字化汽车生态体系当中，满足欧盟自2018年5月起强制实施的GDPR，这才是数字化汽车产业健康发展的根本之道。
          </div>
        </template>
        <template v-else>
          <h1>INDUSTRY BACKGROUND</h1>
          <div class="en">With the advance in technology, service providers of Auto Finance, Insurance and Transportation industries are evolving towards a data-driven innovation model, which led to increasing need for IoV data. However, because the automobile enterprises currently do not have sufficient authorization from data owners, that they can't dispose or sell the IoV data freely.
          </div>
          <div class="en">QoodBlock requires that the use of data must be authorized, and profits from data transactions have to be shared with the data owners, which truly brings the IoV users (data owners) into the digital automotive ecosystem, in accordance with EU General Data Protection Regulation (GDPR) which took effect from May 2018. And that is the right way for the healthy development of the digital automotive industry.
          </div>
        </template>
      </div>
      <section class="animate move-left">
        <img src="./assets/img03_01.png">
      </section>
    </page>
    <page  :currentPage="currentPage" :style="img4" style="backgroundSize: 100% 100%">
      <div class="block4">
        <template v-if="this.language === 0">
          <h1>系统设计</h1>
          <div><img src="./assets/icon02.png">半分布式拓扑架构，适配目前车联网行业基础设施模型</div>
          <div><img src="./assets/icon02.png">“用户拥有数据，TSP代理数据，数据双重签名”的QoodShares模型</div>
          <div><img src="./assets/icon02.png">基于数据字典的数据描述格式，简化数据上链、挂单、搜索等逻辑</div>
          <div><img src="./assets/icon02.png">基于Tendermint平台的DPoS共识机制，具有高可靠性，具备高并发性</div>
        </template>
        <template v-else>
          <h1>SYSTEM DESIGN</h1>
          <div class="en"><img src="./assets/icon02.png">Partially Decentralized Topology: suitable for the current infrastructure of IoV industry</div>
          <div class="en"><img src="./assets/icon02.png">Qoodshares: Data owned by users, TSP as data brokers, processed with double signature</div>
          <div class="en"><img src="./assets/icon02.png">Data Library: the format of data transaction, simplifying logics of data access to blockchain, placing order, searching etc</div>
          <div class="en"><img src="./assets/icon02.png">Based on Tendermint DPoS Consensus Algorithm, with high reliability and TPS</div>
        </template>
      </div>
      <section class="animate move-right rightTop">
        <img src="./assets/img04.png">
      </section>
    </page>
    <page  :currentPage="currentPage" :style="img5" style="backgroundSize: 100% 100%">
      <div class="block5">
        <template v-if="this.language === 0">
          <h1>通证经济</h1>
          <span>QDT</span>
          <span>QDD</span>
          <div><img src="./assets/icon3.png">QDT由QoodBlock基金会官方发行的原生加密数字使用型通证（Utility Token)；初始阶段基于ERC20智能合约产生；
          QDT的通过私募及公募形式公开发行，获得QDT需使用ETH兑换，持有QDT即拥有对QoodBlock生态支配权、投票权，同票同权；
          </div>
          <div><img src="./assets/icon3.png">QDD是为了满足数据交易过程中一种币值稳定型加密数字货币需求，QDD是一种“借据”形式的Token，以美元资产完全抵押，按照1:1锚定美元，受法律保护，由独立信托透明监管，并接受第三方透明审计；</div>
        </template>
        <template v-else>
          <h1>TOKEN ECONOMY</h1>
          <span class="title">QDT</span>
          <span class="title">QDD</span>
          <div class="en"><img src="./assets/icon3.png">QDT is an original utility token officially issued by QoodBlock Foundation, firstly generated from ERC20. QDT can be issued in both forms of public sale and private sale, and has to be exchanged with ETH. The QDT holders are entitled to dominate the ecosystem and vote for QoodBlock, with equal representation.
          </div>
          <div class="en"><img src="./assets/icon3.png">QDD was developed to meet the need for a stable cryptocurrency during data transactions. It is a "USD Collateralized" token fully secured by US dollar assets and pegged to dollar at a 1:1 ratio, which is protected by law, under the supervision of independent trust companies, and audited by a third party.</div>
        </template>
      </div>
    </page>
    <page  :currentPage="currentPage" :style="img6" style="backgroundSize: 100% 100%">
      <div class="block6">
        <template v-if="this.language === 0">
          <h1>应用场景</h1>
          <div><span>汽车金融</span>汽车金融服务公司通过QoodBlock数据交易市场可以了解标的车辆的使用状况、车辆状态等真实有效信息，以实现数据驱动的防范风险、资产管控的经营目标</div>
          <div><span>UBI车险</span>保险公司基于QoodBlock数据交易市场可以合法、安全、透明的通过交易获取车辆相关数据，面向用户推出创新的UBI服务，引领保险服务创新</div>
          <div><span>二手车交易</span>二手车交易中通过QoodBlock数据市场获得车辆真实有效的信息，能够遏制传统二手车中介利用信息不透明从而造假、寻租、欺诈等行为，打破“柠檬市场”的逆向选择魔咒</div>
          <div><span>共享出行</span>QoodBlock生态中形成了一个区块链上的分布式车辆及用户数据库系统，生态参与者和建设者可以非常方便地以此为基础开发和部署MaaS应用，实现真正的P2P共享出行服务</div>
        </template>
        <template v-else>
          <h1>APPLICATION SCENARIOS</h1>
          <div class="en"><span>Auto Finance</span>Auto Finance service providers can get real and effective information on the usage and status of the targeted vehicles from QoodBlock, to achieve data-driven operational risk management and asset management</div>
          <div class="en"><span>Usage-based Insurance</span>Insurance companies can get relevant information on vehicles through legitimate, secure and transparent transactions from QoodBlock in real time, with which they can provide UBI services for the customers and bring innovative data driven insurance products to the auto insurance industry</div>
          <div class="en"><span>Used Car Trading</span>QoodBlock can provide users with effective and transparent data of the transactions of the vehicles, eliminating falsification and fraudulent behaviors of traditional used car dealers because of the lack of information transparency, and breaking the curse of reverse choice of "the Market for Lemons”</div>
          <div class="en"><span>Car Sharing</span>There is a distributed vehicle and user database based on blockchain in QoodBlock, with which both participants and developer of the ecosystem can easily develop and deploy MaaS applications, to achieve real P2P car sharing service</div>
        </template>
      </div>
    </page>
    <page  :currentPage="currentPage" :style="img7" style="backgroundSize: 100% 100%">
      <div class="block7">
        <template v-if="this.language === 0">
          <h1>核心团队</h1>
          <div>
            <div>
              <img src="./assets/lfl.png">
              <div class="card">
                <span>Allen Liang</span>
                <span>创始人</span>
                <span>
                  <ul>
                    <li>QoodBlock创始人；</li>
                    <li>比特币委员会创始人；</li>
                    <li>上海快逸行信息科技有限公司创始人；</li>
                    <li>甲骨文软件 亚太区 NEP 客户总监；</li>
                    <li>爱立信华东区高级客户顾问</li>
                  </ul>
                </span>
              </div>
            </div>
            <div>
              <img src="./assets/gxw.png">
              <div class="card">
                <span>Mike Guo</span>
                <span>首席技术官</span>
                <span>
                  <ul>
                    <li>QoodBlock首席技术官；</li>
                    <li>Mike作为资深嵌入式软件专家，拥有超过10年的物联网、车联网嵌入式软件设计开发经验；</li>
                    <li>Mike对于区块链分布式存储等底层技术有着深刻理解和强烈兴趣,曾先后参与投资了Ripple、Filecoin等数十个明星ICO项目；</li>
                  </ul>
                </span>
              </div>
            </div>
            <div>
              <img src="./assets/cw.png">
              <div class="card">
                <span>Alex Chen</span>
                <span>首席架构师</span>
                <span>
                  <ul>
                    <li>QoodBlock首席架构师</li>
                    <li>Alex拥有超过10年的车联网SaaS平台设计开发经验</li>
                    <li>Alex自2016年起专注于Bitcoin、Ethereum底层技术研究</li>
                    <li>对区块链智能合约和共识机制有着深刻理解</li>
                  </ul>
                </span>
              </div>
            </div>
            <div>
              <img src="./assets/zy.png">
              <div class="card">
                <span>Eric Zhai</span>
                <span>合作拓展总监</span>
                <span>
                  <ul>
                    <li>QoodBlock合作拓展总监</li>
                    <li>Eric是美国VericX交通物流平台、Grace高峰资本、Millen顾问等多家机构的投资人及合伙人</li>
                    <li>毕业于美国马里兰大学，曾在ITS领域著名专家Chang教授领导的“智能交通与数据研究室”工作，在全球ITS领域拥有丰厚的资源积累</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <h1>CORE TEAM</h1>
          <div>
            <div>
              <img src="./assets/lfl.png">
              <div class="card">
                <span>Allen Liang</span>
                <span>Founder</span>
                <span class="en">
                  <ul>
                    <li>Founder of QoodBlock</li>
                    <li>Founder of Bitcoin Committee (SH)</li>
                    <li>Founder of Shanghai Kuaiyixing Info & Tech Ltd</li>
                    <li>Oracle NEP APAC Director</li>
                    <li>Client consultant of Ericsson</li>
                  </ul>
                </span>
              </div>
            </div>
            <div>
              <img src="./assets/gxw.png">
              <div class="card">
                <span>Mike Guo</span>
                <span>CTO</span>
                <span class="en">
                  <ul>
                    <li>More than 10 years experience in embedded software development and design</li>
                    <li>Deep understanding of IoT、IoV, blockchain technology</li>
                    <li>Invest many blockchain projects such as IOTA, OMG etc from 2016</li>
                  </ul>
                </span>
              </div>
            </div>
            <div>
              <img src="./assets/cw.png">
              <div class="card">
                <span>Alex Chen</span>
                <span>Chief Architect</span>
                <span class="en">
                  <ul>
                    <li>More than 10 years of experience in the design and development of mobile Internet and IoV client applications.</li>
                    <li>Release the “care your car”, “car guard” , “qood” and many other client APP of automotive industry and exporting APP design framework to many Auto partners by SDK.</li>
                  </ul>
                </span>
              </div>
            </div>
            <div>
              <img src="./assets/zy.png">
              <div class="card">
                <span>Eric Zhai</span>
                <span>BD</span>
                <span class="en">
                  <ul>
                    <li>Co-founder of VericX transportation logistics platform, Grace Peak Capital Millen Consulting in US</li>
                    <li>Graduated from University of Maryland, worked in “ITS & traffic data Lab” led by professor Chang and accumulate rich resources in global ITS area</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </page>
    <page  :currentPage="currentPage" :style="img7" style="backgroundSize: 100% 100%">
      <div class="block8">
        <h1>QOODBLOCK</h1>
        <img src="./assets/imgBottom.jpg">
        <template v-if="this.language === 0">
          <span>联系我们</span>
        </template>
        <template v-else>
          <span>Contact us</span>
        </template>
        <div class="en">Business Development: op@qoodblock.io</div>
        <div class="contact">
          <a href="https://t.me/QoodBlock" target="_blank"><img src="./assets/contact01.png" alt="telegram"><img src="./assets/contact001.png" alt="telegram"></a>
          <a href="https://twitter.com/QoodBlock" target="_blank"><img src="./assets/contact02.png"><img src="./assets/contact002.png"></a>
          <a href="https://www.facebook.com/simon.luo.9047" target="_blank"><img src="./assets/contact03.png"><img src="./assets/contact003.png"></a>
          <a @click="isWxShow = true"><img src="./assets/contact04.png"><img src="./assets/contact004.png"></a>
          <a href="https://medium.com/@qoodblock" target="_blank"><img src="./assets/contact05.png"><img src="./assets/contact005.png"></a>
          <a href="https://github.com/qoodblock" target="_blank"><img src="./assets/contact06.png"><img src="./assets/contact006.png"></a>
        </div>
      </div>
      <div v-if="isWxShow" @click="isWxShow = false" class="pdf-bg">
        <img class="wx" src="./assets/wx.jpeg">
      </div>
      <i class="bottom">2018 QoodBlock © All rights reserved.</i>
    </page>
    <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption" :options="options" :language="language"></page-controller>
  </template>
  <template v-else>
    <div class="block1" @click="changeLanguage">{{language === 1 ? '中文' : 'English'}}
    </div>
    <page :currentPage="currentPage" :style="img01" style="backgroundSize: 100% 100%">
    </page>
    <page :currentPage="currentPage" :style="img02" style="backgroundSize: 100% 100%">
      <div class="phone2">
        <h1>QOODBLOCK</h1>
        <template v-if="this.language === 0">
          <div>区块链技术支持的全球汽车数据交易市场和生态系统</div>
          <div>QoodBlock是基于区块链技术的车联网数据交易平台。QoodBlock旨在解决⻋车联网数据所有者和数据持有者之间的确权困扰，建立一个区块链车辆数据交易市场，满足数据持有者和数据消费者之间基于智能合约进行合法、透明、安全交易的现实诉求。</div>
        </template>
        <template v-else>
          <div class="en">The global automotive data market and ecosystem supported by blockchain technology</div>
          <div class="en">QoodBlock is an IoV (Internet of Vehicles) data market based on blockchain technology. It aims at establishing a blockchain vehicle data trading market, to solve the problem of data ownership rights confirmation between data owners and holders, and achieve legitimate, transparent and secure transactions based on smart contracts between data owners and data users.</div>
        </template>
        <img class="box" src="./assets/box.gif">
      </div>
    </page>
    <page :currentPage="currentPage" :style="img02" style="backgroundSize: 100% 100%">
      <div class="phone3">
        <template v-if="this.language === 0">
          <h1>行业痛点</h1>
          <div>随着技术的进步，汽车金融、保险以及交通出行等服务商正在朝着数据驱动的创新模式快速演进，对于车联网数据需求日益强烈。但由于没有得到用户的真正授权，目前车企并不不能随意处置和销售用户的车联网数据。
          </div>
          <div>使用数据必须得到用户的授权，交易数据的收益与用户分享，QoodBlock将用户（数据所有者）真正纳入到数字化汽车生态体系当中，满足欧盟自2018年5月起强制实施的GDPR，这才是数字化汽车产业健康发展的根本之道。
          </div>
        </template>
        <template v-else>
          <h1>INDUSTRY BACKGROUND</h1>
          <div class="en">With the advance in technology, service providers of Auto Finance, Insurance and Transportation industries are evolving towards a data-driven innovation model, which led to increasing need for IoV data. However, because the automobile enterprises currently do not have sufficient authorization from data owners, that they can't dispose or sell the IoV data freely.
          </div>
          <div class="en">QoodBlock requires that the use of data must be authorized, and profits from data transactions have to be shared with the data owners, which truly brings the IoV users (data owners) into the digital automotive ecosystem, in accordance with EU General Data Protection Regulation (GDPR) which took effect from May 2018. And that is the right way for the healthy development of the digital automotive industry.
          </div>
        </template>
      </div>
      <section class="animate move-left">
        <img src="./assets/img3.png" class="phoneImg3">
      </section>
    </page>
    <page  :currentPage="currentPage" :style="img02" style="backgroundSize: 100% 100%">
      <div class="phone4">
        <template v-if="this.language === 0">
          <h1>系统设计</h1>
          <div><img src="./assets/icon02.png">半分布式拓扑架构，适配目前车联网行业基础设施模型</div>
          <div><img src="./assets/icon02.png">“用户拥有数据，TSP代理数据，数据双重签名”的QoodShares模型</div>
          <div><img src="./assets/icon02.png">基于数据字典的数据描述格式，简化数据上链、挂单、搜索等逻辑</div>
          <div><img src="./assets/icon02.png">基于Tendermint平台的DPoS共识机制，具有高可靠性，具备高并发性</div>
        </template>
        <template v-else>
          <h1>SYSTEM DESIGN</h1>
          <div class="en"><img src="./assets/icon02.png">Partially Decentralized Topology: suitable for the current infrastructure of IoV industry</div>
          <div class="en"><img src="./assets/icon02.png">Qoodshares: Data owned by users, TSP as data brokers, processed with double signature</div>
          <div class="en"><img src="./assets/icon02.png">Data Library: the format of data transaction, simplifying logics of data access to blockchain, placing order, searching etc</div>
          <div class="en"><img src="./assets/icon02.png">Based on Tendermint DPoS Consensus Algorithm, with high reliability and TPS</div>
        </template>
      </div>
      <section class="animate move-right rightTopPhone">
        <img src="./assets/img04.png" class="phoneImg4">
      </section>
    </page>
    <page  :currentPage="currentPage" :style="img05" style="backgroundSize: 100% 100%">
      <div class="phone5">
        <template v-if="this.language === 0">
          <h1>通证经济</h1>
          <span>QDT</span>
          <div><img src="./assets/icon3.png">QDT由QoodBlock基金会官方发行的原生加密数字使用型通证（Utility Token)；初始阶段基于ERC20智能合约产生；
          QDT的通过私募及公募形式公开发行，获得QDT需使用ETH兑换，持有QDT即拥有对QoodBlock生态支配权、投票权，同票同权；
          </div>
          <span>QDD</span>
          <div><img src="./assets/icon3.png">QDD是为了满足数据交易过程中一种币值稳定型加密数字货币需求，QDD是一种“借据”形式的Token，以美元资产完全抵押，按照1:1锚定美元，受法律保护，由独立信托透明监管，并接受第三方透明审计；</div>
        </template>
        <template v-else>
          <h1>TOKEN ECONOMY</h1>
          <span class="title">QDT</span>
          <div class="en"><img src="./assets/icon3.png">QDT is an original utility token officially issued by QoodBlock Foundation, firstly generated from ERC20. QDT can be issued in both forms of public sale and private sale, and has to be exchanged with ETH. The QDT holders are entitled to dominate the ecosystem and vote for QoodBlock, with equal representation.
          </div>
          <span class="title">QDD</span>
          <div class="en"><img src="./assets/icon3.png">QDD was developed to meet the need for a stable cryptocurrency during data transactions. It is a "USD Collateralized" token fully secured by US dollar assets and pegged to dollar at a 1:1 ratio, which is protected by law, under the supervision of independent trust companies, and audited by a third party.</div>
        </template>
      </div>
    </page>
    <page  :currentPage="currentPage" :style="img06" style="backgroundSize: 100% 100%">
      <div class="phone6">
        <template v-if="this.language === 0">
          <h1>应用场景</h1>
          <div><span>汽车金融</span>汽车金融服务公司通过QoodBlock数据交易市场可以了解标的车辆的使用状况、车辆状态等真实有效信息，以实现数据驱动的防范风险、资产管控的经营目标</div>
          <div><span>UBI车险</span>保险公司基于QoodBlock数据交易市场可以合法、安全、透明的通过交易获取车辆相关数据，面向用户推出创新的UBI服务，引领保险服务创新</div>
        </template>
        <template v-else>
          <h1>APPLICATION SCENARIOS</h1>
          <div class="en"><span>Auto Finance</span>Auto Finance service providers can get real and effective information on the usage and status of the targeted vehicles from QoodBlock, to achieve data-driven operational risk management and asset management</div>
          <div class="en"><span>Usage-based Insurance</span>Insurance companies can get relevant information on vehicles through legitimate, secure and transparent transactions from QoodBlock in real time, with which they can provide UBI services for the customers and bring innovative data driven insurance products to the auto insurance industry</div>
        </template>
      </div>
    </page>
    <page  :currentPage="currentPage" :style="img06" style="backgroundSize: 100% 100%">
      <div class="phone6">
        <template v-if="this.language === 0">
          <div><span>二手车交易</span>二手车交易中通过QoodBlock数据市场获得车辆真实有效的信息，能够遏制传统二手车中介利用信息不透明从而造假、寻租、欺诈等行为，打破“柠檬市场”的逆向选择魔咒</div>
          <div><span>共享出行</span>QoodBlock生态中形成了一个区块链上的分布式车辆及用户数据库系统，生态参与者和建设者可以非常方便地以此为基础开发和部署MaaS应用，实现真正的P2P共享出行服务</div>
        </template>
        <template v-else>
          <div class="en"><span>Used Car Trading</span>QoodBlock can provide users with effective and transparent data of the transactions of the vehicles, eliminating falsification and fraudulent behaviors of traditional used car dealers because of the lack of information transparency, and breaking the curse of reverse choice of "the Market for Lemons”</div>
          <div class="en"><span>Car Sharing</span>There is a distributed vehicle and user database based on blockchain in QoodBlock, with which both participants and developer of the ecosystem can easily develop and deploy MaaS applications, to achieve real P2P car sharing service</div>
        </template>
      </div>
    </page>
    <page  :currentPage="currentPage" :style="img02" style="backgroundSize: 100% 100%">
      <div class="teamBg" @click="showTeam = ''" v-if="showTeam">
        <img src="./assets/x.png">
      </div>
      <div class="team" @click="showTeam = ''" v-if="showTeam === 1">
        <img src="./assets/lfl.png">
        <span>Allen Liang</span>
        <template v-if="language === 0">
        <span>创始人</span>
        <span>
          <ul>
            <li>QoodBlock创始人</li>
            <li>比特币委员会创始人</li>
            <li>上海快逸行信息科技有限公司创始人</li>
            <li>甲骨文软件 亚太区 NEP 客户总监</li>
            <li>爱立信华东区高级客户顾问</li>
          </ul>
        </span>
        </template>
        <template v-else>
          <span>Founder</span>
          <span class="en">
            <ul>
              <li>Founder of QoodBlock</li>
              <li>Founder of Bitcoin Committee (SH)</li>
              <li>Founder of Shanghai Kuaiyixing Info & Tech Ltd</li>
              <li>Oracle NEP APAC Director</li>
              <li>Client consultant of Ericsson</li>
            </ul>
          </span>
        </template>
      </div>
      <div class="team" @click="showTeam = ''" v-if="showTeam === 2">
        <img src="./assets/gxw.png">
        <span>Mike Guo</span>
        <template v-if="language === 0">
        <span>首席技术官</span>
        <span>
          <ul>
            <li>QoodBlock首席技术官</li>
            <li>Mike作为资深嵌入式软件专家，拥有超过10年的物联网、车联网嵌入式软件设计开发经验</li>
            <li>Mike对于区块链分布式存储等底层技术有着深刻理解和强烈兴趣,曾先后参与投资了Ripple、Filecoin等数十个明星ICO项目</li>
          </ul>
        </span>
        </template>
        <template v-else>
          <span>CTO</span>
          <span class="en">
            <ul>
              <li>More than 10 years experience in embedded software development and design</li>
              <li>Deep understanding of IoT、IoV, blockchain technology</li>
              <li>Invest many blockchain projects such as IOTA, OMG etc from 2016</li>
            </ul>
          </span>
        </template>
      </div>
      <div class="team" @click="showTeam = ''" v-if="showTeam === 3">
        <img src="./assets/cw.png">
        <span>Alex Chen</span>
        <template v-if="language === 0">
        <span>首席架构师</span>
        <span>
          <ul>
            <li>QoodBlock首席架构师</li>
            <li>Alex拥有超过10年的车联网SaaS平台设计开发经验</li>
            <li>Alex自2016年起专注于Bitcoin、Ethereum底层技术研究</li>
            <li>对区块链智能合约和共识机制有着深刻理解</li>
          </ul>
        </span>
        </template>
        <template v-else>
          <span>Chief Architect</span>
          <span class="en">
            <ul>
              <li>More than 10 years of experience in the design and development of mobile Internet and IoV client applications.</li>
              <li>Release the “care your car”, “car guard” , “qood” and many other client APP of automotive industry and exporting APP design framework to many Auto partners by SDK.</li>
            </ul>
          </span>
        </template>
      </div>
      <div class="team" @click="showTeam = ''" v-if="showTeam === 4">
        <img src="./assets/zy.png">
        <span>Eric Zhai</span>
        <template v-if="language === 0">
        <span>合作拓展总监</span>
        <span>
          <ul>
            <li>QoodBlock合作拓展总监</li>
            <li>Eric是美国VericX交通物流平台、Grace高峰资本、Millen顾问等多家机构的投资人及合伙人</li>
            <li>毕业于美国马里兰大学，曾在ITS领域著名专家Chang教授领导的“智能交通与数据研究室”工作，在全球ITS领域拥有丰厚的资源积累</li>
          </ul>
        </span>
        </template>
        <template v-else>
          <span>BD</span>
          <span class="en">
            <ul>
              <li>Co-founder of VericX transportation logistics platform, Grace Peak Capital Millen Consulting in US</li>
              <li>Graduated from University of Maryland, worked in “ITS & traffic data Lab” led by professor Chang and accumulate rich resources in global ITS area</li>
            </ul>
          </span>
        </template>
      </div>
      <div class="phone7">
        <template v-if="this.language === 0">
          <h1>核心团队</h1>
          <div>
            <div @click="showTeam = 1">
              <img src="./assets/lfl.png">
              <div class="card">
                <span>Allen Liang</span>
                <span>创始人</span>
                <span>
                  <ul>
                    <li>QoodBlock创始人</li>
                    <li>比特币委员会创始人</li>
                    <li>上海快逸行信息科技有限公司创始人</li>
                    <li>甲骨文软件 亚太区 NEP 客户总监</li>
                    <li>爱立信华东区高级客户顾问</li>
                  </ul>
                </span>
              </div>
            </div>
            <div @click="showTeam = 2">
              <img src="./assets/gxw.png">
              <div class="card">
                <span>Mike Guo</span>
                <span>首席技术官</span>
                <span>
                  <ul>
                    <li>QoodBlock首席技术官</li>
                    <li>Mike作为资深嵌入式软件专家，拥有超过10年的物联网、车联网嵌入式软件设计开发经验</li>
                    <li>Mike对于区块链分布式存储等底层技术有着深刻理解和强烈兴趣,曾先后参与投资了Ripple、Filecoin等数十个明星ICO项目</li>
                  </ul>
                </span>
              </div>
            </div>
            <div @click="showTeam = 3">
              <img src="./assets/cw.png">
              <div class="card">
                <span>Alex Chen</span>
                <span>首席架构师</span>
                <span>
                  <ul>
                    <li>QoodBlock首席架构师</li>
                    <li>Alex拥有超过10年的车联网SaaS平台设计开发经验</li>
                    <li>Alex自2016年起专注于Bitcoin、Ethereum底层技术研究</li>
                    <li>对区块链智能合约和共识机制有着深刻理解</li>
                  </ul>
                </span>
              </div>
            </div>
            <div @click="showTeam = 4">
              <img src="./assets/zy.png">
              <div class="card">
                <span>Eric Zhai</span>
                <span>合作拓展总监</span>
                <span>
                  <ul>
                    <li>QoodBlock合作拓展总监</li>
                    <li>Eric是美国VericX交通物流平台、Grace高峰资本、Millen顾问等多家机构的投资人及合伙人</li>
                    <li>毕业于美国马里兰大学，曾在ITS领域著名专家Chang教授领导的“智能交通与数据研究室”工作，在全球ITS领域拥有丰厚的资源积累</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <h1>CORE TEAM</h1>
          <div>
            <div @click="showTeam = 1">
              <img src="./assets/lfl.png">
              <div class="card">
                <span>Allen Liang</span>
                <span>Founder</span>
                <span class="en">
                  <ul>
                    <li>Founder of QoodBlock</li>
                    <li>Founder of Bitcoin Committee (SH)</li>
                    <li>Founder of Shanghai Kuaiyixing Info & Tech Ltd</li>
                    <li>Oracle NEP APAC Director</li>
                    <li>Client consultant of Ericsson</li>
                  </ul>
                </span>
              </div>
            </div>
            <div @click="showTeam = 2">
              <img src="./assets/gxw.png">
              <div class="card">
                <span>Mike Guo</span>
                <span>CTO</span>
                <span class="en">
                  <ul>
                    <li>More than 10 years experience in embedded software development and design</li>
                    <li>Deep understanding of IoT、IoV, blockchain technology</li>
                    <li>Invest many blockchain projects such as IOTA, OMG etc from 2016</li>
                  </ul>
                </span>
              </div>
            </div>
            <div @click="showTeam = 3">
              <img src="./assets/cw.png">
              <div class="card">
                <span>Alex Chen</span>
                <span>Chief Architect</span>
                <span class="en">
                  <ul>
                    <li>More than 10 years of experience in the design and development of mobile Internet and IoV client applications.</li>
                    <li>Release the “care your car”, “car guard” , “qood” and many other client APP of automotive industry and exporting APP design framework to many Auto partners by SDK.</li>
                  </ul>
                </span>
              </div>
            </div>
            <div @click="showTeam = 4">
              <img src="./assets/zy.png">
              <div class="card">
                <span>Eric Zhai</span>
                <span>BD</span>
                <span class="en">
                  <ul>
                    <li>Co-founder of VericX transportation logistics platform, Grace Peak Capital Millen Consulting in US</li>
                    <li>Graduated from University of Maryland, worked in “ITS & traffic data Lab” led by professor Chang and accumulate rich resources in global ITS area</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </page>
    <page  :currentPage="currentPage" :style="img07" style="backgroundSize: 100% 100%">
      <div class="phone8">
        <img src="./assets/logo.png">
        <template v-if="this.language === 0">
          <span>联系我们</span>
        </template>
        <template v-else>
          <span>Contact us</span>
        </template>
        <div class="en">Business Development: op@qoodblock.io</div>
        <div class="contact">
          <a href="https://t.me/QoodBlock" target="_blank"><img src="./assets/contact01.png" alt="telegram"></a>
          <a href="https://twitter.com/QoodBlock" target="_blank"><img src="./assets/contact02.png"></a>
          <a href="https://www.facebook.com/simon.luo.9047" target="_blank"><img src="./assets/contact03.png"></a>
          <a @click="isWxShow = true"><img src="./assets/contact04.png"></a>
          <a href="https://medium.com/@qoodblock" target="_blank"><img src="./assets/contact05.png"></a>
          <a href="https://github.com/qoodblock" target="_blank"><img src="./assets/contact06.png"></a>
        </div>
      </div>
      <div v-if="isWxShow" @click="isWxShow = false" class="pdf-bg">
        <img class="wx" src="./assets/wx.jpeg">
      </div>
      <i class="bottomPhone">2018 QoodBlock © All rights reserved.</i>
    </page>
    <page-controller :pageNum="optionsPhone.length" :currentPage="currentPage" @changePage="changePage" :option="controllerOption" :options="optionsPhone" :language="language"></page-controller>
  </template>
  </div>
</template>

<script>
import Page from './components/Page.vue';
import PageController from './components/PageController.vue';

// 页面进出动画
function afterEnterAnimate($child) {
  $child.$el.querySelector('.animate').classList.remove('move-left', 'move-right');
}
function beforeLeaveAnimate($child) {
  let moveType = Math.random() > 0.5 ? 'move-left' : 'move-right';
  $child.$el.querySelector('.animate').classList.add(moveType);
}
function beforeLeaveAnimateL($child) {
  let moveType = 'move-left';
  $child.$el.querySelector('.animate').classList.add(moveType);
}
function beforeLeaveAnimateR($child) {
  let moveType = 'move-right';
  $child.$el.querySelector('.animate').classList.add(moveType);
}

export default {
  name: 'app',
  data() {
    return {
      showTeam: '',
      screenWidth: document.body.clientWidth,
      isPc: 1,
      isWxShow: false,
      ispdfshowCn: 0,
      ispdfshowEn: 0,
      language: 1,
      isLanguageShow: false,
      img1: {
        background: 'url(' + require('./assets/img01.jpg') + ') no-repeat',
      },
      img2: {
        background: 'url(' + require('./assets/img02_02.jpg') + ') no-repeat',
      },
      img3: {
        background: 'url(' + require('./assets/img03.jpg') + ') no-repeat',
      },
      img4: {
        background: 'url(' + require('./assets/img04_01.jpg') + ') no-repeat',
      },
      img5: {
        background: 'url(' + require('./assets/img05.jpg') + ') no-repeat',
      },
      img6: {
        background: 'url(' + require('./assets/img06.jpg') + ') no-repeat',
      },
      img7: {
        background: 'url(' + require('./assets/img07.jpg') + ') no-repeat',
      },
      img01: {
        background: 'url(' + require('./assets/img1.jpg') + ') no-repeat',
      },
      img02: {
        background: 'url(' + require('./assets/img2.jpg') + ') no-repeat',
      },
      img03: {
        background: 'url(' + require('./assets/img3.png') + ') no-repeat',
      },
      img05: {
        background: 'url(' + require('./assets/img5.jpg') + ') no-repeat',
      },
      img06: {
        background: 'url(' + require('./assets/img6.jpg') + ') no-repeat',
      },
      img07: {
        background: 'url(' + require('./assets/img7.jpg') + ') no-repeat',
      },
      currentPage: 1,
      options: [{
        // is content center
        isCenter: false,
        li: '首页',
        liEn: 'Index',
      }, {
        isCenter: false,
        li: '简介',
        liEn: 'Introduction',
      }, {
        color: '#fff',
        isCenter: false,
        li: '行业痛点',
        liEn: 'Industry Background',
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimateL
      }, {
        isCenter: false,
        li: '系统设计',
        liEn: 'System Design',
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimateR
      }, {
        isCenter: false,
        li: '通证经济',
        liEn: 'Token Economy',
      }, {
        isCenter: false,
        li: '应用场景',
        liEn: 'Application Scenarios',
      }, {
        isCenter: false,
        li: '核心团队',
        liEn: 'Core Team',
      }, {
        isCenter: false,
        li: '联系我们',
        liEn: 'Contact us',
      }],
      optionsPhone: [{
        isCenter: false,
        li: '首页',
        liEn: 'Index',
      }, {
        isCenter: false,
        li: '简介',
        liEn: 'QoodBlock',
      }, {
        color: '#fff',
        isCenter: false,
        li: '行业痛点',
        liEn: 'Industry Background',
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimateL
      }, {
        isCenter: false,
        li: '系统设计',
        liEn: 'System Design',
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimateR
      }, {
        isCenter: false,
        li: '通证经济',
        liEn: 'Token Economy',
      }, {
        isCenter: false,
        li: '应用场景',
        liEn: 'Application Scenarios',
      }, {
        isCenter: false,
        li: '应用场景',
        liEn: 'Application Scenarios',
      }, {
        isCenter: false,
        li: '核心团队',
        liEn: 'Core Team',
      }, {
        isCenter: false,
        li: '联系我们',
        liEn: 'Contact us',
      }],
      controllerOption: {
        arrowsType: false,
        navbar: true,
        highlight: true,
        loop: false
      }
    }
  },
  created () {
    if (this.screenWidth > 749) {
      this.isPc = 1;
    } else {
      this.isPc = 0;
      this.controllerOption.navbar = false;
    }
  },
  computed: {
    // 总page数
    pageNum() {
      return this.options.length;
    }
  },
  methods: {
    changeLanguage() {
      if (this.language) {
        this.language = 0;
      } else {
        this.language = 1;
      }
    },
    showLanguage() {
      this.isLanguageShow = !this.isLanguageShow;
    },
    changePage(index) {
      let options;
      if (this.isPc) {
        options = this.options;
      } else {
        options = this.optionsPhone;
      }
      this.isLanguageShow = false;
      // beforeLeave Hook
      let beforeIndex = this.currentPage - 1;
      let leaveFunction = options[beforeIndex].beforeLeave;
      typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);
      // change page
      this.currentPage = index;
      // afterEnter Hook
      let nextIndex = index - 1;
      let enterFunction = options[nextIndex].afterEnter;
      this.$nextTick(function() {
        typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
      })
    }
  },
  components: {
    Page, PageController
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.screenWidth = window.screenWidth;
        if (this.screenWidth > 749) {
          this.isPc = 1;
          this.controllerOption.navbar = true;
        } else {
          this.isPc = 0;
          this.controllerOption.navbar = false;
        }
      })()
    }
    this.$children.forEach((child, index) => {
      // 动态设置各个page内的options
      let options;
      if (this.isPc) {
        options = this.options;
      } else {
        options = this.optionsPhone;
      }
      if (child.option === null) {
        let childOption = options[index];
        this.$set(childOption, 'index', index + 1);
        child.option = childOption;
      }
    });
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

.app {
  height: 100%;
  width: 100%;
  background: #000;
}



/* 下面的是与fullPage无关的样式 */

.animate {
  transition: all 1s ease-out 0s;
}

.move-left {
  transform: translateX(-100%);
}

.move-right {
  transform: translateX(100%);
}
.rightTop {
  text-align: right;

  img {
    margin: 7% 20% 0 0;
  }
}
.rightTopPhone {
  text-align: right;

  img {
    margin: 95% -5% 0 0;
  }
}

.clear {
  clear: both;
}
.block1 {
  font-size: 16px;
  font-family: "Microsoft YaHei";
  color: rgb(186, 203, 221);
  line-height: 2.605;
  position: fixed;
  right: 40px;
  top: 16px;
  cursor: pointer;
  z-index: 999999;

  img {
    display: inline-block;
    margin: 0 0 3px 5px;
  }
  div {
    width: 120px;
    position: absolute;
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
    top: 50px;
    right: -26px;
    text-align: center;

    span {
      display: block;
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-family: "Microsoft YaHei";
      color: rgb(49, 62, 72);
      line-height: 2.605;
    }
  }
}
.selected {
  background-color: rgb(186, 203, 221);
}
.pdf-viewer {
  width: 800px;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.pdf-bg {
  background: rgba(0, 0, 0, .7);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  cursor: pointer;

  .wx {
    width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.block2 {
  width: 40%;
  margin: 20% auto 0;
  position: relative;
  max-width: 600px;
  padding-right: 500px;

  .read {
    cursor: pointer;
    position: absolute;
    right: 400px;
    top: -50px;
  }
  .box {
    position: absolute;
    right: -50px;
    top: -150px;
    z-index: -999;
  }
  h1 {
    font-size: 60px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.057;
    margin: 0;
  }
  div:nth-child(3) {
    font-size: 24px;
    font-family: "Microsoft YaHei";
    color: rgb(238, 238, 238);
    line-height: 1.737;
    margin-top: -5px;
  }
  div:nth-child(4) {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(132, 182, 194);
    line-height: 2.143;
    margin-top: 30px;
  }
  div.en {
    /*font-family: "arial";*/
  }
}
.block3 {
  width: 40%;
  /*margin: 16% auto 0;*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  max-width: 600px;
  padding-left: 300px;

  h1 {
    font-size: 60px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.057;
    margin: 0;
  }
  div {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(132, 182, 194);
    line-height: 2.143;
    margin-top: 30px;
    margin-left: 70px;
  }
  div.en {
    /*font-family: 'arial';*/
  }
}
.block4 {
  width: 35%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  padding-right: 600px;

  img {
    margin: 0 10px 2px 0;
  }
  h1 {
    font-size: 60px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.057;
    margin: 0;
  }
  div {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(132, 182, 194);
    line-height: 2.143;
    margin-top: 30px;
  }
  div.en {
    /*font-family: 'arial';*/
  }
}
.block5 {
  margin: 12% auto 0;
  width: 80%;
  max-width: 1100px;

  h1 {
    font-size: 60px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.057;
    margin: 0;
    text-align: center;
    margin-right: 4%;
  }
  span {
    display: inline-block;
    width: 40%;
    padding: 0 4%;
    text-align: center;
    margin-top: 50px;
    font-size: 40px;
    font-family: "DIN Condensed";
    color: rgb(186, 203, 221);
    font-weight: bold;
    line-height: 1.363;
  }
  div {
    width: 40%;
    padding: 0 4%;
    display: inline-flex;
    justify-content: space-around;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(132, 182, 194);
    line-height: 2.143;
    margin: 24px 0 0 0;
    position: relative;

    img {
      position: absolute;
      left: 10px;
      top: 4px;
    }
  }
  div.en {
    /*font-family: 'arial';*/
  }
}
.block6 {
  margin: 8% auto 0;
  max-width: 1100px;
  text-align: center;

  h1 {
    font-size: 60px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.057;
    margin: 0 0 0 4%;
  }
  div {
    display: inline-flex;
    width: 40%;
    height: 140px;
    padding: 5% 2% 1%;
    margin: 1%;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(132, 182, 194);
    line-height: 2.143;
    margin-top: 30px;
    background-color: rgb(36, 41, 53);
    opacity: 0.902;
    position: relative;
    text-align: left;

    span {
      /*width: 150px;*/
      padding: 0 16px;
      position: absolute;
      left: -15px;
      top: -6px;
      background-color: rgb(31, 35, 45);
      box-shadow: 3.5px 6.062px 0px 0px rgba(69, 82, 114, 0.53);
      font-size: 18px;
      font-family: "Microsoft YaHei";
      color: rgb(51, 239, 237);
      line-height: 2.5;
      text-align: center;
    }
  }
  div.en {
    /*font-family: 'arial';*/
  }
}
.block7 {
  margin: 8% 4% 0 0;

  h1 {
    font-size: 60px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.057;
    margin: 0 0 6% 0;
    text-align: center;
  }
  >div {
    text-align: center;
    width: 920px;
    margin: 0px auto 0;

    >div {
      width: 200px;
      height: 300px;
      display: inline-flex;
      margin: 12px;
      position: relative;
      overflow: hidden;
      box-sizing:border-box;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }
      .card {
        z-index: 999;
        height: 320px;
        background-color: rgb(43, 48, 62);
        opacity: 0.8;
        padding: 30px 12px 12px;
        position: absolute;
        top: 200px;
        left: 0;
        right: 0;
        transition: top 0.5s;

        span:nth-child(1) {
          font-size: 24px;
          font-family: "Helvetica";
          color: rgb(255, 255, 255);
          line-height: 1.179;
          display: block;
          text-align: left;
        }
        span:nth-child(2) {
          font-size: 14px;
          font-family: "Microsoft YaHei";
          color: rgb(132, 182, 194);
          line-height: 1.814;
          display: block;
          text-align: left;
        }
        span:nth-child(3) {
          font-size: 12px;
          font-family: "Microsoft YaHei";
          color: rgb(186, 203, 221);
          line-height: 1.833;
          display: block;
          text-align: left;

          ul {
            margin: 12px 0 0;
          }
        }
        span.en {
          font-family: 'arial';
        }
      }
    }
    >div:hover {
      .card {
        top: -20px;
      }
    }
  }
}
.block8 {
  margin: 12% 0 0 0;

  h1 {
    font-size: 60px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.057;
    margin: 0 4% 0 0;
    text-align: center;
  }
  span {
    display: block;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: rgb(238, 238, 238);
    line-height: 3.877;
    text-align: center;
    margin: 6% 4% 0 0;
  }
  > img {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  div {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(132, 182, 194);
    line-height: 2.143;
    text-align: center;
    margin: 12px 4% 0 0;
  }
  div.en {
    /*font-family: 'arial';*/
  }
  .contact {
    margin-top: 20px;

    a {
      display: inline-block;
      position: relative;
      width: 36px;
      height: 36px;
      margin: 0 6px;

      img:nth-child(1) {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
      }
      img:nth-child(2) {
        cursor: pointer;
        position: absolute;
        top: -5px;
        right: -5px;
        opacity: 0;
      }
    }
    a:hover {
      img:nth-child(2) {
        opacity: 1;
      }
    }
  }
}

.phone2 {
  padding: 50px 30px;

  h1 {
    font-size: 36px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.359;
    margin: 0
  }
  div:nth-child(2) {
    font-size: 16px;
    font-family: "PingFang";
    color: rgb(186, 203, 221);
    line-height: 1.563;
  }
  div:nth-child(3) {
    font-size: 14px;
    font-family: "PingFang";
    color: rgb(132, 182, 194);
    line-height: 2.308;
    text-align: justifyLeft;
    margin-top: 20px;
  }
  img {
    position: absolute;
    bottom: -17%;
    right: -17%;
    z-index: -9999;
    width: 100%;
  }
}
.phone3 {
  padding: 0 30px;
  box-sizing:border-box;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 36px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.359;
    margin: 0
  }
  div {
    font-size: 14px;
    font-family: "PingFang";
    color: rgb(132, 182, 194);
    line-height: 2.308;
    text-align: justifyLeft;
    margin-top: 20px;
    padding-left: 36px;
  }
  div.en {
    line-height: 1.5;
  }
}
.phoneImg3 {
  width: 200px;
  z-index: -9999;
}
.phone4 {
  padding: 0 30px;
  box-sizing:border-box;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 36px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.359;
    margin: 0
  }
  div {
    font-size: 14px;
    font-family: "PingFang";
    color: rgb(132, 182, 194);
    line-height: 2.308;
    text-align: justifyLeft;
    margin-top: 20px;
    padding-left: 36px;

    img {
      padding: 0 15px 4px 0;
      width: 14px;
    }
  }
  div.en {
    line-height: 1.5;
  }
}
.phoneImg4 {
  width: 200px;
  z-index: -9999;
}
.phone5 {
  padding: 0 50px;
  box-sizing:border-box;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 36px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.359;
    margin: 0;
    text-align: center;
  }
  span{
    font-size: 28px;
    font-family: "DIN Condensed";
    color: rgb(186, 203, 221);
    font-weight: bold;
    line-height: 0.909;
    text-align: center;
    display: block;
    margin-top: 20px;
  }
  div {
    font-size: 14px;
    font-family: "PingFang";
    color: rgb(132, 182, 194);
    line-height: 2.308;
    text-align: justifyLeft;
    margin-top: 6px;
    position: relative;

    img {
      /*padding: 0 15px 4px 0;*/
      position: absolute;
      left: -20px;
      top: 8px;
      width: 14px;
    }
  }
  div.en {
    line-height: 1.5;

    img {
      top: 3px;
    }
  }
}
.phone6 {
  padding: 0 50px;
  box-sizing:border-box;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 36px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.359;
    margin: 0;
    text-align: center;
  }
  div {
    padding: 48px 12px 12px 12px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(132, 182, 194);
    line-height: 2.143;
    margin-top: 20px;
    background-color: rgb(36, 41, 53);
    opacity: 0.902;
    position: relative;
    text-align: left;

    span {
      padding: 0 16px;
      position: absolute;
      left: -15px;
      top: -6px;
      background-color: rgb(31, 35, 45);
      box-shadow: 3.5px 6.062px 0px 0px rgba(69, 82, 114, 0.53);
      font-size: 16px;
      font-family: "Microsoft YaHei";
      color: rgb(51, 239, 237);
      line-height: 2.5;
      text-align: center;
    }
  }
  div.en {
    line-height: 1.5;
  }
}
.teamBg {
  background-color: rgb(31, 35, 45);
  opacity: 0.902;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  text-align: center;

  img {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
.team {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  text-align: center;
  width: 100%;
  padding: 0 50px;
  box-sizing:border-box;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  span:nth-child(2) {
    font-size: 24px;
    font-family: "Arial";
    color: rgb(255, 255, 255);
    line-height: 0.845;
    text-align: center;
    display: block;
    margin: 20px 0;
  }
  span:nth-child(3) {
    font-size: 16px;
    font-family: "PingFang";
    color: rgb(132, 182, 194);
    line-height: 1.235;
    text-align: center;
    /*margin: 12px 0;*/
    margin-bottom: 20px;
    display: block;
  }
  span:nth-child(4) {
    text-align: left;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    color: rgb(186, 203, 221);
    line-height: 2.602;
  }
}
.phone7 {
  box-sizing:border-box;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 36px;
    font-family: "DIN Condensed";
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 1.359;
    margin: 0;
    text-align: center;
  }
  >div {
    text-align: center;
    width: 100%;
    margin: 30px auto 0;
    text-align: center;

    >div {
      width: 40%;
      display: inline-flex;
      position: relative;
      overflow: hidden;
      box-sizing:border-box;
      padding-bottom: 64px;
      margin-bottom: 16px;

      img {
        width: 120px;
        height: 120px;
        margin: auto;
      }
      .card {
        z-index: 999;
        width: 120px;
        height: 320px;
        background-color: rgb(43, 48, 62);
        opacity: 0.8;
        box-sizing:border-box;
        padding: 12px;
        position: absolute;
        top: 120px;
        left: 50%;
        transform: translate(-50%, 0%);
        transition: top 0.5s;

        span:nth-child(1) {
          font-size: 18px;
          font-family: "Helvetica";
          color: rgb(255, 255, 255);
          line-height: 1.179;
          display: block;
          text-align: left;
        }
        span:nth-child(2) {
          font-size: 12px;
          font-family: "Microsoft YaHei";
          color: rgb(132, 182, 194);
          line-height: 1.814;
          display: block;
          text-align: left;
        }
        span:nth-child(3) {
          font-size: 12px;
          font-family: "Microsoft YaHei";
          color: rgb(186, 203, 221);
          /*line-height: 1.833;*/
          display: block;
          text-align: left;

          ul {
            margin: 12px 0 0;

            li {
              list-style-type:none; 
            }
          }
        }
        span.en {
          /*font-family: 'arial';*/
        }
      }
    }
  }
}
i.bottom {
  font-style: normal;
  font-size: 12px;
  position: absolute;
  bottom: 180px;
  width: 100%;
  left: 0;
  text-align: center;
  font-family: "Microsoft YaHei";
}
i.bottomPhone {
  font-style: normal;
  font-size: 12px;
  position: absolute;
  bottom: 80px;
  width: 100%;
  left: 0;
  text-align: center;
  font-family: "Microsoft YaHei";
}
.phone8 {
  text-align: center;
  box-sizing:border-box;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    display: block;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    color: rgb(238, 238, 238);
    line-height: 3.877;
    text-align: center;
    margin: 6% 0 0 0;
  }
  > img {
    width: 50%;
  }
  div {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    color: rgb(132, 182, 194);
    line-height: 2.143;
    text-align: center;
  }
  div.en {
    /*font-family: 'arial';*/
  }
  .contact {
    margin-top: 20px;

    a {
      display: inline-block;
      position: relative;
      width: 36px;
      height: 36px;
      margin: 0 6px;

      img {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
}

/*@media screen and (max-width:768px) {
  html,
  body {
    font-size: 12px;
  }
}*/

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

.person-img {
  width: 223px;
  height: 185px;
  float: left;
  background-color: #fff;
  box-shadow: 3px 3px 10px #999;
}

.person-img img {
  height: 100%;
  width: 100%;
}

.person-basic-info {
  overflow: hidden;
  float: right;
  margin-left: 40px;
}

.info-line {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.text-center {
  text-align: center;
}

.text-bold {
  font-weight: bold;
}

.demo-intro {
  text-indent: 2em;
}

dt {
  font-weight: bold;
  font-size: 16px;
}

ul {
  padding-left: 1em;
}

.avatar {
  margin: 10px auto;
  display: block;
  box-shadow: 1px 1px 5px #666;
}

.author-info {
  text-align: center;
}
</style>
