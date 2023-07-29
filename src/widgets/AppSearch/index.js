import style from "./AppSearch.module.scss";
import Form from 'react-bootstrap/Form';

const AppSearch = ({ props }) => {

  return (
    <section className={style.section}>
      <div className={`container container-app`}>
        <Form>
          <Form.Group className={style.form_group} controlId="exampleForm.ControlInput1">
            <div className={style.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21.505" height="18.249" viewBox="0 0 21.505 18.249">
  <g id="Group_40698" data-name="Group 40698" transform="translate(-24.745 -75)">
    <line id="Line_162" data-name="Line 162" x1="3.69" y1="2.75" transform="translate(40.81 88.75)" fill="none" stroke="#cccddf" stroke-linecap="round" stroke-width="2.5"/>
    <g id="Ellipse_1302" data-name="Ellipse 1302" transform="translate(24.745 75)" fill="#fff" stroke="#cccddf" stroke-width="2">
      <circle cx="7.996" cy="7.996" r="7.996" stroke="none"/>
      <circle cx="7.996" cy="7.996" r="6.996" fill="none"/>
    </g>
  </g>
</svg>

            </div>
            <Form.Control className={style.form_control} type="text" placeholder="Search what you want..." />
          </Form.Group>
        </Form>
      </div>
    </section>
  );
};

export default AppSearch;
