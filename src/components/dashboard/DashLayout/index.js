import Table from 'react-bootstrap/Table';
import style from "./DashLayout.module.scss";
import StatItem from '../StatItem';

const DashLayout = () => {
  return (
    <>
      <header className={style.dashboard_header}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto">sdf</div>
            <div className="col"></div>
            <div className="col-auto"></div>
          </div>
        </div>
      </header>
      <main className={style.dashboard}>
        <nav className={style.sidenav}>
          <ul>
            <li>
              <a href="">
                <span className="material-symbols-outlined">grid_view</span>
                Dashboard</a>
            </li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">
                  list_alt
                </span>
                Dashboard</a>
            </li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">
                  signal_cellular_alt
                </span>
                Dashboard</a>
            </li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">
                  summarize
                </span>
                Dashboard</a>
            </li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">
                  trophy
                </span>
                Dashboard</a>
            </li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">
                  trophy
                </span>
                Dashboard</a>
            </li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">
                  settings
                </span>
                Dashboard</a>
            </li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">
                  call
                </span>
                Dashboard</a>
            </li>
            <li>
              <a href="">
                <span class="material-symbols-outlined">
                  logout
                </span>
                Dashboard</a>
            </li>

          </ul>
        </nav>

        <div className={style.col_left}>
          <div className="container-fluid">
            <div className={style.layout}>
              <div className="row row-cols-2 row-cols-lg-4">
                <div><StatItem/></div>
                <div><StatItem/></div>
                <div><StatItem/></div>
                <div><StatItem/></div>
              </div>
            </div>

            <div className={style.layout}>
              <h3 className='mb-3 h5'>Todays Order</h3>
              <div className="table-responsive">
                <Table  borderless hover>
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
                        <button className="btn btn-outline-success">+</button>
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
                        <button className="btn btn-outline-success">+</button>
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
