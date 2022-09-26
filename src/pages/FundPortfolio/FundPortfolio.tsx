import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import FundTabs from "../../components/FundTabs/FundTabs";

import styles from "./FundPortfolio.module.css";

const FundPortfolio: FunctionComponent = () => {
  return (
    <div className={styles.fundManagementPortfolio}>
      <img className={styles.groupIcon} alt="" src="../locofy/group-237691@2x.png" />
      <img className={styles.ellipseIcon} alt="" />

      <img className={styles.imageIconUser} alt="" src="../locofy/imageicon--user.svg" />
      <div className={styles.bTCUSDTDiv}>BTCUSDT</div>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <img className={styles.vectorIcon} alt="" src="../locofy/vector-81.svg" />
          <img className={styles.imageIconUser1} alt="" src="../locofy/imageicon--user1.svg" />
          <div className={styles.bTCUSDTDiv1}>BTCUSDT</div>
        </div>
        <div className={styles.div}>$23,738</div>
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.groupDiv3}>
            <img className={styles.imageIconBTC} alt="" src="../locofy/imageicon--btc1.svg" />
            <div className={styles.bitcoinDiv}>Bitcoin</div>
            <div className={styles.wBTCDiv}>
              <span className={styles.wBTCTxtSpan}>
                <span>{`1.2105 `}</span>
                <span className={styles.wBTCSpan}>wBTC</span>
              </span>
            </div>
            <div className={styles.div1}>$ 23,738</div>
          </div>
          <div className={styles.tagPercentaceMainDiv}>
            <div className={styles.div2}>24.67%</div>
          </div>
          <div className={styles.div3}>-$2,400</div>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv1} />
          <img className={styles.imageIconWallet} alt="" src="../locofy/imageicon--wallet1.svg" />
          <div className={styles.groupDiv5}>
            <div className={styles.walletDiv}>Wallet</div>
            <div className={styles.div4}>$ 1,738</div>
          </div>
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.eTHDiv}>
            <span className={styles.wBTCTxtSpan}>
              <span>{`2.5 `}</span>
              <span className={styles.wBTCSpan}>ETH</span>
            </span>
          </div>
          <div className={styles.div5}>-$500</div>
          <div className={styles.groupDiv7}>
            <img className={styles.imageIconBTC} alt="" src="../locofy/imageicon--eth1.svg" />
            <div className={styles.bitcoinDiv}>Ethereum</div>
            <div className={styles.div1}>$ 3,582</div>
          </div>
          <div className={styles.tagPercentaceMainDiv1}>
            <div className={styles.div2}>14.67%</div>
          </div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.groupDiv9}>
            <div className={styles.rectangleDiv5} />
            <img className={styles.image109Icon} alt="" src="../locofy/image-1091@2x.png" />
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.walletDiv}>
              <span className={styles.wBTCTxtSpan}>
                <span>Assets on</span>
                <span className={styles.curveSpan}> Curve</span>
              </span>
            </div>
            <div className={styles.div8}>$ 95</div>
          </div>
          <div className={styles.tagPercentaceMainDiv2}>
            <div className={styles.div2}>4.00 %</div>
          </div>
        </div>
        <div className={styles.groupDiv11}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.groupDiv9}>
            <div className={styles.rectangleDiv7} />
            <img className={styles.image107Icon} alt="" src="../locofy/image-1071@2x.png" />
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.walletDiv}>
              <span className={styles.wBTCTxtSpan}>
                <span>Assets on</span>
                <span className={styles.curveSpan}> Dopex</span>
              </span>
            </div>
            <div className={styles.div8}>$ 3,582</div>
          </div>
          <div className={styles.tagPercentaceMainDiv3}>
            <div className={styles.div2}>14.67%</div>
          </div>
        </div>
        <div className={styles.groupDiv14}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.groupDiv9}>
            <div className={styles.rectangleDiv9} />
            <img className={styles.image110Icon} alt="" src="../locofy/image-110@2x.png" />
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.walletDiv}>
              <span className={styles.wBTCTxtSpan}>
                <span>Assets on</span>
                <span className={styles.curveSpan}> Gmx</span>
              </span>
            </div>
            <div className={styles.div8}>$ 95</div>
          </div>
          <div className={styles.tagPercentaceMainDiv4}>
            <div className={styles.div2}>4.00 %</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv17}>
        <div className={styles.groupDiv18}>
          <div className={styles.rectangleDiv10} />
          <img className={styles.imageIconUser2} alt="" src="../locofy/imageicon--user8.svg" />
          <div className={styles.bTCUSDTDiv2}>BTCUSDT</div>
        </div>
        <div className={styles.rectangleDiv11} />
        <img className={styles.ellipseIcon1} alt="" src="../locofy/ellipse-1916@2x.png" />
        <div className={styles.openSeaFundDiv}>OpenSea fund</div>
        <img className={styles.vectorIcon1} alt="" src="../locofy/vector6.svg" />
        <div className={styles.groupDiv19}>
          <div className={styles.groupDiv20}>
            <div className={styles.groupDiv20}>
              <div className={styles.groupDiv22}>
                <div className={styles.groupDiv22}>
                  <div className={styles.shareDiv}>{`Share `}</div>
                  <img className={styles.groupIcon1} alt="" src="../locofy/group-2376731.svg" />
                </div>
              </div>
              <img className={styles.groupIcon2} alt="" src="../locofy/group-237682.svg" />
            </div>
          </div>
        </div>
        <div className={styles.div14}>$123,987</div>
        <img className={styles.vectorIcon2} alt="" src="../locofy/vector7.svg" />
        <div className={styles.portfolioValueDiv}>Portfolio value</div>
        <div className={styles.startingValue500}>Starting Value: $500</div>
        <div className={styles.div15}>+$2560.78</div>
        <div className={styles.tagPercentaceMainDiv5}>
          <div className={styles.div2}>+14.67%</div>
        </div>
        <div className={styles.groupDiv24}>
          <div className={styles.groupDiv25}>
            <div className={styles.rectangleDiv12} />
            <div className={styles.hDiv}>24H</div>
          </div>
          <div className={styles.groupDiv26}>
            <div className={styles.rectangleDiv12} />
            <div className={styles.dDiv}>1D</div>
          </div>
          <div className={styles.groupDiv27}>
            <div className={styles.rectangleDiv12} />
            <div className={styles.dDiv}>7D</div>
          </div>
          <div className={styles.groupDiv28}>
            <div className={styles.rectangleDiv12} />
            <div className={styles.mDiv}>1M</div>
          </div>
        </div>
        <div className={styles.groupDiv29}>
          <div className={styles.bMMk4gdD263q7QJt3VLWnG2x1mt9HVDiv}>8BMMk4gdD263q7QJt3VLWnG2x1mt9HV56b4vX774n4Sc</div>
          <img className={styles.groupIcon3} alt="" src="../locofy/group-237695.svg" />
          <img className={styles.groupIcon4} alt="" src="../locofy/group-237694.svg" />
        </div>
        <FundTabs />
        <div className={styles.groupDiv31}>
          <div className={styles.dataUpdated1minAgo}>{`Data updated 1min ago `}</div>
          <img className={styles.groupIcon5} alt="" src="../locofy/group-237699.svg" />
        </div>
        <img className={styles.vectorIcon3} alt="" src="../locofy/vector-8.svg" />
        <div className={styles.groupDiv32}>
          <div className={styles.expiryInDiv}>Expiry in:</div>
          <div className={styles.investorsDiv}>Investors:</div>
          <div className={styles.tagPercentaceMainDiv6}>
            <div className={styles.div2}>751 days</div>
          </div>
          <div className={styles.tagPercentaceMainDiv7}>
            <div className={styles.div2}>103</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FundPortfolio;
