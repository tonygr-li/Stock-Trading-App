import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"
import trading from "../images/Trading.png"
export const StockOverviewPage = () => {
  return <div>
    <div className="text-center">
      <br></br>
      <br></br>
      <h1>Stock Market Search</h1>
      <br></br>
      <img src={trading} />
    </div>
    <div className="text-center">
      <br></br>
      <p>Enter the symbol of the stock in the search bar which will be added to the list below. To delete it, hover over the column and click remove</p>
      <p>Click on the symbol for more information and a chart</p>
      </div>
    <AutoComplete />
    <StockList />
  </div>
}