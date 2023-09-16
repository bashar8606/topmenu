import Table from 'react-bootstrap/Table';
import style from "./DashLayout.module.scss";

const DashLayout = () => {
  return (
    <>
      <header>
        <div className="container">

        </div>
      </header>
      <main>
        <nav className={style.sidenav}>
          <ul>
            <li>
              <a href="">Dashboard</a>
            </li>
          </ul>
        </nav>

        <div className={style.col_left}>
          <div className="container">
            <div className={style.layout}>
              <div className="row row-cols-2 row-cols-lg-4">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={style.layout}>
              <h3>Todays Order</h3>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Keyword</th>
                      <th>Url</th>
                      <th>Search Volume</th>
                      <th>Difficulty</th>
                      <th>Competition</th>
                      <th>Cpc</th>
                      <th>Result</th>
                      <th>Rank</th>
                      <th>Add</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Business</td>
                      <td>Rabbit.com</td>
                      <td>100</td>
                      <td>47</td>
                      <td>0.22</td>
                      <td>0.08</td>
                      <td>561,000</td>
                      <td>6</td>
                      <td>
                        <button>+</button>
                      </td>
                    </tr>

                    <tr>
                      <td>Business</td>
                      <td>Rabbit.com</td>
                      <td>100</td>
                      <td>47</td>
                      <td>0.22</td>
                      <td>0.08</td>
                      <td>561,000</td>
                      <td>6</td>
                      <td>
                        <button>+</button>
                      </td>
                    </tr>
                   
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashLayout;
