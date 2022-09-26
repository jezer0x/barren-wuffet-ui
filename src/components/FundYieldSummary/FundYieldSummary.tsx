import { FunctionComponent } from "react";
import styles from "./FundYieldSummary.module.css";

const FundYieldSummary: FunctionComponent = () => {
  return (
    <div className={styles.groupDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.mAXDiv}>MAX</div>
      <div className={styles.div}>1.000</div>
      <div className={styles.lPTokensDiv}>LP Tokens</div>
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv4} />
        <div className={styles.withdrawDiv}>Withdraw</div>
      </div>
      <div className={styles.rectangleDiv5} />
      <div className={styles.unstakeDiv}>Unstake</div>
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv6} />
        <div className={styles.groupDiv3}>
          <b className={styles.connectWalletB}>{`Connect wallet `}</b>
          <img className={styles.groupIcon} alt="" src="../group-237684.svg" />
        </div>
      </div>
      <div className={styles.groupDiv4}>
        <div className={styles.rectangleDiv7} />
        <div className={styles.withdrawWrappedDiv}>Withdraw Wrapped</div>
        <img
          className={styles.carboncheckmarkIcon}
          alt=""
          src="../carboncheckmark1.svg"
        />
      </div>
      <div className={styles.rectangleDiv8} />
      <img className={styles.vectorIcon} alt="" src="../vector-11.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector-11.svg" />
      <img className={styles.vectorIcon2} alt="" src="../vector-11.svg" />
      <img className={styles.vectorIcon3} alt="" src="../vector-11.svg" />
      <div className={styles.uSDTDiv}>USDT</div>
      <img className={styles.groupIcon1} alt="" src="../group-237739.svg" />
      <img className={styles.groupIcon2} alt="" src="../group-237739.svg" />
      <img className={styles.groupIcon3} alt="" src="../group-237739.svg" />
      <div className={styles.wBTCDiv}>WBTC</div>
      <div className={styles.eTHDiv}>ETH</div>
      <div className={styles.div1}>
        <span>{`6,421, 803   `}</span>
        <span className={styles.span}>(33.45%)</span>
      </div>
      <div className={styles.div2}>
        <span className={styles.txtSpan}>
          <span>{`296   `}</span>
          <span className={styles.span}>(33.33%)</span>
        </span>
      </div>
      <div className={styles.div3}>
        <span className={styles.txtSpan}>
          <span>{`3,602   `}</span>
          <span className={styles.span}>(33.13%)</span>
        </span>
      </div>
      <div className={styles.div4}>$19,189, 246</div>
      <div className={styles.div5}>0.071%</div>
      <div className={styles.div6}>1.024</div>
      <div className={styles.div7}>1707629</div>
      <div className={styles.div8}>20.61%</div>
      <div className={styles.poolDiv}>Pool</div>
      <div className={styles.mDiv}>$4.0m</div>
      <div className={styles.div9}>0.035%</div>
      <div className={styles.currencyReservesDiv}>Currency reserves</div>
      <div className={styles.poolParametersDiv}>Pool Parameters</div>
      <div className={styles.tokenDiv}>Token</div>
      <img className={styles.groupIcon4} alt="" src="../group-237726@2x.png" />
      <img className={styles.coinIcon} alt="" src="../coinicon@2x.png" />
      <img className={styles.coinIcon1} alt="" src="../coinicon1@2x.png" />
      <div className={styles.uSDTotalDiv}>USD total</div>
      <div className={styles.x965590Div}>0x96...5590</div>
      <div className={styles.feeDiv}>Fee</div>
      <div className={styles.cRVDiv}>5.05% CRV</div>
      <div className={styles.virtualPriceAverageValueOf}>
        <p className={styles.virtualPrice}>Virtual price</p>
        <p className={styles.averageValueOf}>Average value of pool token</p>
      </div>
      <div className={styles.aAmplificationCoefficientCh}>
        <p className={styles.virtualPrice}>A</p>
        <p className={styles.averageValueOf}>
          Amplification coefficient chosen from fluction of prices around 1
        </p>
      </div>
      <div className={styles.liqudityUtilization24hVolum}>
        Liqudity utilization 24h Volume/Liquidity ratio
      </div>
      <div className={styles.dalilyUSDVolume}>Dalily USD volume</div>
      <div className={styles.div10}>1.742%</div>
      <div className={styles.adminFeeDiv}>Admin fee</div>
      <div className={styles.div11}>2.019%</div>
      <div className={styles.x8E21D2Div}>0x8E...21D2</div>
      <div className={styles.contractsDiv}>Contracts</div>
      <div className={styles.baseVAPYDiv}>Base vAPY</div>
      <div className={styles.rewardsTAPRDiv}>Rewards tAPR</div>
      <img className={styles.groupIcon5} alt="" src="../group-237739.svg" />
      <img className={styles.groupIcon6} alt="" src="../group-237739.svg" />
      <div className={styles.cRVDiv1}>CRV</div>
      <div className={styles.oneCoinDiv}>One coin</div>
      <div className={styles.balancedAmountsDiv}>Balanced amounts</div>
      <img className={styles.ellipseIcon} alt="" src="../ellipse-37.svg" />
      <img className={styles.ellipseIcon1} alt="" src="../ellipse-37.svg" />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-39.svg" />
      <div className={styles.variableAPYBasedOnTodays}>
        <p className={styles.virtualPrice}>
          <span>{`Variable APY based on today’s trading activity. `}</span>
        </p>
        <p className={styles.clickHereToLearnMoreAbout}>
          <span className={styles.clickHereTo}>
            Click here to learn more about Base vAPY.
          </span>
        </p>
      </div>
      <div className={styles.tokenAPRBasedOnCurrentPri}>
        <span>{`Token APR based on current prices of tokens and reward rates. `}</span>
        <span className={styles.clickHereTo1}>
          Click here to learn more about Boosting your CRV rewards.
        </span>
      </div>
      <div className={styles.dailyDiv}>Daily</div>
      <div className={styles.weeklyDiv}>Weekly</div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default FundYieldSummary;
