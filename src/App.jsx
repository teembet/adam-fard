import logo from "./logo.svg";
import "./App.css";
import { FaChartBar } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

function App() {
  return (
    <div className="App bg-light">
      <div className="header "></div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-9">
            <div class="container px-4">
              <div className="row mb-3">
                <div className="col-sm-8">
                  <h3 className="header-text">Attendance Pricing Strategy</h3>
                </div>
                <div className="col-sm-4">
                  <button type="button" class="btn btn-outline-secondary">
                    Chart View <FaChartBar />
                  </button>
                  <button type="button" class="btn btn-warning">
                    Table View <FaList />
                  </button>
                </div>
              </div>
              <div class="row gx-5">
                <div class="col ">
                  <div class="rounded-2 p-3 bg-white card-display border ">
                    <div className="flex-display">
                      <div>
                        <h6>Total Revenue</h6>
                        <h5 className="bolder">13,000$</h5>
                      </div>
                      <div>
                        <h5 className="bolder ">
                          <FaLongArrowAltUp className="text-success" /> 12%
                        </h5>
                      </div>
                    </div>

                    <h6>Before rule apply</h6>
                    <h5>14,000</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="rounded-2 p-3 bg-white card-display border ">
                    <div className="flex-display">
                      <div>
                        <h6>Total Ticket</h6>
                        <h5 className="bolder"> 13,000$</h5>
                      </div>
                      <div>
                        <h5 className="bolder ">
                          <FaLongArrowAltDown className="text-danger" /> 12%
                        </h5>
                      </div>
                    </div>

                    <h6>Before rule apply</h6>
                    <h5>14,000</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="rounded-2 p-3 bg-white card-display border ">
                    <div className="flex-display">
                      <div>
                        <h6>Overall ATP</h6>
                        <h5 className="bolder">13,000$</h5>
                      </div>
                      <div>
                        <h5 className="bolder ">
                          <FaLongArrowAltUp className="text-success" /> 12%
                        </h5>
                      </div>
                    </div>

                    <h6>Before rule apply</h6>
                    <h5>14,000</h5>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-3 bg-white border  bottom"></div>
            </div>
          </div>
          <div className="col-sm-3">
            <div class="p-3 border bg-white right-side"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
