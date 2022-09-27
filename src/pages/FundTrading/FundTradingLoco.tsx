import { FunctionComponent } from "react";
import Footer from "../../components/Footer/Footer";
import FundBanner from "../../components/Fund/FundBanner";

import FundOrdersTable from "../../components/FundOrdersTable/FundOrdersTable";
import FundTabs from "../../components/FundTabs/FundTabs";

import styles from "./FundTrading.module.css";

const FundTradingLoco: FunctionComponent = () => {
  return (
    <div className={styles.fundManagementTrading1}>
      <img className={styles.groupIcon} alt="" src="../locofy/group-237691@2x.png" />

      <FundOrdersTable />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <img className={styles.vectorIcon} alt="" src="../locofy/vector-11.svg" />
      <img className={styles.vectorIcon1} alt="" src="../locofy/vector-11.svg" />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.groupDiv}>
        <div className={styles.createNewDiv}>Create new</div>
        <div className={styles.activeOrdersDiv}>Active orders</div>
      </div>
      <img className={styles.imageIconUser} alt="" src="../locofy/imageicon--user10.svg" />
      <div className={styles.bTCUSDTDiv}>BTCUSDT</div>
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv4} />
        <div className={styles.availableDiv}>Available</div>
        <div className={styles.uSDTDiv}>18.294 USDT</div>
        <div className={styles.bTCUSDTDiv1}>BTC / USDT</div>
        <div className={styles.marketOrderDiv}>Market order</div>
        <img className={styles.vectorIcon2} alt="" src="../locofy/vector6.svg" />
      </div>
      <img className={styles.imageIconUser1} alt="" src="../locofy/imageicon--user.svg" />
      <div className={styles.bTCUSDTDiv2}>BTCUSDT</div>
      <div className={styles.groupDiv2}>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv5} />
          <img className={styles.groupIcon1} alt="" src="../locofy/group-2376953.svg" />
          <img className={styles.imageIconUser2} alt="" src="../locofy/imageicon--user12.svg" />
          <div className={styles.bTCUSDTDiv3}>BTCUSDT</div>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.rectangleDiv7} />
          <div className={styles.hVolumeDiv}>24h Volume</div>
          <div className={styles.div}>$ 1.118.294</div>
          <div className={styles.frameDiv}>
            <div className={styles.frameDiv1}>
              <div className={styles.bTCUSDTDiv4}>BTC / USDT</div>
              <div className={styles.bitcoinDiv}>Bitcoin</div>
            </div>
          </div>
          <div className={styles.chooseActionDiv}>{`Choose action `}</div>
          <img className={styles.vectorIcon3} alt="" src="../locofy/vector6.svg" />
          <div className={styles.uniswapDiv}>Uniswap</div>
          <div className={styles.div1}>$23,738</div>
          <div className={styles.tagPercentaceDefault}>
            <div className={styles.tagPercentaceMainDiv}>
              <div className={styles.div2}>+23,6%</div>
            </div>
          </div>
          <img className={styles.vectorIcon4} alt="" src="../locofy/vector6.svg" />
        </div>
      </div>
      <div className={styles.groupDiv5}>
        <div className={styles.groupDiv6}>
          <div className={styles.textSmallMainDiv}>
            <div className={styles.textTextMediumMain}>
              <div className={styles.menuTitleDiv}>Jul 18</div>
            </div>
          </div>
          <div className={styles.textSmallMainDiv1}>
            <div className={styles.textTextMediumMain}>
              <div className={styles.menuTitleDiv}>Jul 19</div>
            </div>
          </div>
          <div className={styles.textSmallMainDiv2}>
            <div className={styles.textTextMediumMain}>
              <div className={styles.menuTitleDiv}>Jul 20</div>
            </div>
          </div>
          <div className={styles.textSmallMainDiv3}>
            <div className={styles.textTextMediumMain}>
              <div className={styles.menuTitleDiv}>Jul 21</div>
            </div>
          </div>
          <div className={styles.textSmallMainDiv4}>
            <div className={styles.textTextMediumMain}>
              <div className={styles.menuTitleDiv}>Jul 22</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div3}>$23,000</div>
      <div className={styles.div4}>$22,000</div>
      <div className={styles.div5}>$21,000</div>
      <div className={styles.div6}>$20,000</div>
      <div className={styles.div7}>$19,000</div>
      <div className={styles.uTC8LogAuto}>
        <span>{`15:03:08 (UTC+8)       %      Log       `}</span>
        <span className={styles.autoSpan}>Auto</span>
      </div>
      <img className={styles.groupIcon2} alt="" src="../locofy/group-74.svg" />
      <div className={styles.groupDiv7}>
        <div className={styles.tagPagginationOptionDiv}>
          <div className={styles.tagPagginationMainDiv}>
            <div className={styles.taglineDiv}>1H</div>
          </div>
        </div>
        <div className={styles.tagPagginationOptionDiv1}>
          <div className={styles.tagPagginationMainDiv}>
            <div className={styles.taglineDiv}>3H</div>
          </div>
        </div>
        <div className={styles.tagPagginationOptionDiv2}>
          <div className={styles.tagPagginationMainDiv}>
            <div className={styles.taglineDiv}>5H</div>
          </div>
        </div>
        <div className={styles.tagPagginationOptionDiv3}>
          <div className={styles.tagPagginationMainDiv}>
            <div className={styles.taglineDiv}>1D</div>
          </div>
        </div>
        <div className={styles.tagPagginationOptionDiv4}>
          <div className={styles.tagPagginationMainDiv}>
            <div className={styles.taglineDiv}>1W</div>
          </div>
        </div>
        <div className={styles.tagPagginationOptionDiv5}>
          <div className={styles.tagPagginationMainDiv}>
            <div className={styles.taglineDiv}>1M</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.rectangleDiv8} />
        <div className={styles.rectangleDiv9} />
        <div className={styles.buyDiv}>Buy</div>
        <div className={styles.sellDiv}>Sell</div>
      </div>
      <div className={styles.rectangleDiv10} />
      <div className={styles.rectangleDiv11} />
      <div className={styles.rectangleDiv12} />
      <div className={styles.rectangleDiv13} />
      <div className={styles.div8}>25%</div>
      <div className={styles.div9}>50%</div>
      <div className={styles.div10}>75%</div>
      <div className={styles.maxDiv}>Max</div>
      <div className={styles.rectangleDiv14} />
      <div className={styles.rectangleDiv15} />
      <div className={styles.sPOTDiv}>SPOT</div>
      <img className={styles.vectorIcon5} alt="" src="../locofy/vector15.svg" />
      <div className={styles.rectangleDiv16} />
      <div className={styles.rectangleDiv17} />
      <div className={styles.rectangleDiv18} />
      <div className={styles.rectangleDiv19} />
      <div className={styles.rectangleDiv20} />
      <div className={styles.rectangleDiv21} />
      <div className={styles.rectangleDiv22} />
      <div className={styles.rectangleDiv23} />
      <div className={styles.rectangleDiv24} />
      <div className={styles.cRVDiv}>CRV</div>
      <div className={styles.uSDTDiv1}>USDT</div>
      <div className={styles.cRVDiv1}>CRV</div>
      <div className={styles.uSDTDiv2}>USDT</div>
      <div className={styles.maxDiv1}>Max</div>
      <div className={styles.div11}>0.00000000</div>
      <div className={styles.priceDiv}>Price</div>
      <div className={styles.marketUSDTDiv}> Market USDT</div>
      <div className={styles.batchSizeDiv}>Batch size</div>
      <div className={styles.batchSizeDiv1}>Batch size</div>
      <div className={styles.intervalDiv}>Interval</div>
      <div className={styles.feesDiv}>Fees</div>
      <div className={styles.estCompletionDiv}>Est Completion</div>
      <div className={styles.div12}>- 3%</div>
      <div className={styles.minDiv}>1 min</div>
      <div className={styles.div13}>- 3%</div>
      <div className={styles.h33mDiv}>0h 33m</div>
      <div className={styles.maxDiv2}>Max</div>
      <div className={styles.div14}>0.327543</div>
      <div className={styles.div15}>0.00000000</div>
      <div className={styles.uSDTDiv3}>USDT</div>
      <div className={styles.div16}>0</div>
      <div className={styles.eTHDiv}>ETH</div>
      <div className={styles.div17}>3%</div>
      <div className={styles.minDiv1}>Min</div>
      <div className={styles.div18}>1</div>
      <div className={styles.div19}>-</div>
      <img className={styles.ellipseIcon} alt="" src="../locofy/ellipse-291.svg" />
      <img className={styles.vectorIcon6} alt="" src="../locofy/vector16.svg" />
      <div className={styles.sANDUSDTDiv}>SANDUSDT</div>
      <div className={styles.div20}>0.16549</div>
      <div className={styles.div21}>0.16549</div>
      <div className={styles.tagPercentaceDefault1}>
        <div className={styles.tagPercentaceMainDiv1}>
          <div className={styles.div22}>done</div>
        </div>
      </div>
      <img className={styles.ellipseIcon1} alt="" src="../locofy/ellipse-30.svg" />
      <div className={styles.dOGEUSDTDiv}>DOGEUSDT</div>
      <div className={styles.div23}>0.16549</div>
      <img className={styles.vectorIcon7} alt="" src="../locofy/vector17.svg" />
      <div className={styles.div24}>0.16549</div>
      <div className={styles.tagPercentaceDefault2}>
        <div className={styles.tagPercentaceMainDiv1}>
          <div className={styles.div22}>done</div>
        </div>
      </div>
      <div className={styles.fTMUSDTDiv}>FTMUSDT</div>
      <div className={styles.div26}>0.16549</div>
      <img className={styles.ellipseIcon2} alt="" src="../locofy/ellipse-291.svg" />
      <img className={styles.vectorIcon8} alt="" src="../locofy/vector16.svg" />
      <div className={styles.div27}>0.16549</div>
      <img className={styles.vectorIcon9} alt="" src="../locofy/vector-111.svg" />
      <img className={styles.vectorIcon10} alt="" src="../locofy/vector-111.svg" />
      <img className={styles.vectorIcon11} alt="" src="../locofy/vector-111.svg" />
      <div className={styles.tagPercentaceDefault3}>
        <div className={styles.tagPercentaceMainDiv3}>
          <div className={styles.div28}>done</div>
        </div>
      </div>
      <div className={styles.div29}>$ 42</div>
      <div className={styles.div30}>$ 42</div>
      <div className={styles.div31}>$ 42</div>
      <div className={styles.div32}>$ 42</div>
      <div className={styles.div33}>-</div>
      <div className={styles.div34}>+</div>
      <div className={styles.div35}>-</div>
      <div className={styles.depositDiv}>Deposit</div>
      <div className={styles.div36}>1 657</div>
      <div className={styles.div37}>-</div>
      <img className={styles.ellipseIcon3} alt="" src="../locofy/ellipse-30.svg" />
      <img className={styles.vectorIcon12} alt="" src="../locofy/vector17.svg" />
      <div className={styles.div38}>1 657</div>
      <div className={styles.div39}>+$23,738</div>
      <div className={styles.pMDiv}>11:34 PM</div>
      <div className={styles.tagPercentaceDefault4}>
        <div className={styles.tagPercentaceMainDiv4}>
          <div className={styles.div40}>pending</div>
        </div>
      </div>
      <div className={styles.timeDiv}>Time</div>
      <div className={styles.instrumentDiv}>Instrument</div>
      <div className={styles.typeDiv}>Type</div>
      <div className={styles.sideDiv}>Side</div>
      <div className={styles.priceDiv1}>Price</div>
      <div className={styles.quantityDiv}>Quantity</div>
      <div className={styles.executedDiv}>Executed</div>
      <div className={styles.stopPriceDiv}>Stop price</div>
      <div className={styles.estTotalDiv}>Est. Total</div>
      <div className={styles.statusDiv}>Status</div>
      <div className={styles.avgPriceDiv}>Avg price</div>
      <div className={styles.tagPercentaceMainDiv5}>
        <div className={styles.div28}>done</div>
      </div>
      <div className={styles.tagPercentaceMainDiv6}>
        <div className={styles.div28}>done</div>
      </div>
      <div className={styles.div43}>-$576</div>
      <div className={styles.aMDiv}>06:01 AM</div>
      <div className={styles.div44}>+$3500</div>
      <div className={styles.aMDiv1}>02:10 AM</div>
      <div className={styles.div45}>+$791</div>
      <div className={styles.pMDiv1}>06:45 PM</div>
      <img className={styles.vectorIcon13} alt="" src="../locofy/vector15.svg" />
      <img className={styles.vectorIcon14} alt="" src="../locofy/vector15.svg" />
      <img className={styles.vectorIcon15} alt="" src="../locofy/vector22.svg" />
      <img className={styles.imageIconWallet} alt="" src="../locofy/imageicon--wallet3.svg" />
      <img className={styles.imageIconETH} alt="" src="../locofy/imageicon--eth3.svg" />

      <FundBanner />
      <div className={styles.groupDiv25}>
        <div className={styles.groupDiv26}>
          <div className={styles.groupDiv26}>
            <div className={styles.rectangleDiv32} />
            <div className={styles.enableTWAPDiv}>Enable TWAP</div>
            <img className={styles.groupIcon8} alt="" src="../locofy/group-237854.svg" />
          </div>
        </div>
      </div>
      <img className={styles.carbonarrowDownIcon} alt="" src="../locofy/carbonarrowdown.svg" />
      <Footer />
    </div>
  );
};

export default FundTradingLoco;
