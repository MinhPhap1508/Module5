import { Formik,Field, ErrorMessage,Form } from "formik";
import * as Yup from "yup";
import './health.css';
export function Health() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    idcard: '',
                    date: '',
                    gender: '1',
                    country: '',
                    company: '',
                    part: '',
                    city: '',
                    district: '',
                    ward: '',
                    village: '',
                    phone: '',
                    email: '',
                    where: '',
                    sick: '',
                    contact: []
                }}
                validationSchema={Yup.object({
                  name: Yup.string()
                  .required("Required"),
                  idcard: Yup.string()
                  .required("Required"),
                  date: Yup.string()
                  .required("Required")
                  .min(1991,"Vui lòng nhập năm sinh lớn hơn 1990."),
                  country: Yup.string()
                  .required("Required"),
                  city: Yup.string()
                  .required("Required"),
                  ward:Yup.string()
                  .required("Required"),
                  village: Yup.string()
                  .required("Required"),
                  district: Yup.string()
                  .required("Required"),
                  phone: Yup.string()
                  .required("Required"),
                  email:Yup.string()
                  .required("Required")
                  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,"Invalid email address")
                })

                }
                onSubmit={(values,{setSubmitting}) => {
                  setSubmitting(false);
                  console.log(values);
                  alert("Khai báo thành công")
                }
              }
            >
                {
                    <div className="health">
                    <h1>Tờ khai y tế</h1>
                    <Form>
                      <label>Họ tên</label>
                      <Field type="text" name="name" />
                      <ErrorMessage name="name" component='span'/>
                      <label>Số hộ chiếu/CMND</label>
                      <Field type="number" name="idcard" />
                      <ErrorMessage name="name" component='span'/>
                      <label>Năm Sinh</label>
                      <Field type="number" name="date" />
                      <ErrorMessage name="name" component='span'/>
                      <label>Giới tính</label>
                      <Field name="gender" type="radio" value="1" />
                      Nam
                      <Field name="gender" type="radio" value="0" />
                      Nữ
                      <label>Quốc tịch</label>
                      <Field type="text" name="country" />
                      <ErrorMessage name="name" component='span'/>
                      <label>Công ty làm việc</label>
                      <Field type="text" name="company" />
                      <label>Bộ phận làm việc</label>
                      <Field type="text" name="part" />
                      <label>Có thẻ bảo hiểm y tế</label>
                      <Field type="checkbox" name="insurance" value="insurance"/>
                      <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                      <label>Tỉnh thành</label>
                      <Field type="text" name="city" />
                      <ErrorMessage name="name" component='span'/>
                      <label>Quận/huyện</label>
                      <Field type="text" name="district" />
                      <ErrorMessage name="name" component='span'/>
                      <label>Phường/xã</label>
                      <Field type="text" name="ward" />
                      <ErrorMessage name="name" component='span'/>
                      <label>Số nhà, phố, tổ dân phố, thôn, đội</label>
                      <Field type="text" name="village" />
                      <ErrorMessage name="name" component='span'/>
                      <label>Số điện thoại</label>
                      <Field type="number" name="phone" />
                      <ErrorMessage name="name" component='span'/>
                      <label>Email</label>
                      <Field type="email" name="email" />
                      <ErrorMessage name="name" component='span'/>
                      <h3>
                        Trong vòng 14 ngày qua Anh/Chị có đến quốc gia/vùng lãnh thổ nào(Có thể đi
                        qua nhiều quốc gia)
                      </h3>
                      <Field as='textarea' name='where' id='where' />
                      <h3>
                        Trong vòng 14 ngày qua Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây
                        không?
                      </h3>
                      <Field type="checkbox" name="sick" value="Sốt" />
                      Sốt     
                      <Field type="checkbox" name="sick" value="Ho" />
                      Ho
                      <Field type="checkbox" name="sick" value="Khó thở" />
                      Khó thở
                      <Field type="checkbox" name="sick" value="Viêm phổi" />
                      Viêm phổi
                      <Field type="checkbox" name="sick" value="Đau họng" />
                      Đau họng
                      <Field type="checkbox" name="sick" value="Mệt mỏi" />
                      Mệt mỏi
                      <h3>Trong vòng 14 ngày qua Anh/Chị có tiếp xúc với?</h3>
                      <Field type="checkbox" name="contact" value="c1" /> Người bệnh hoặc nghi
                      ngờ, mắc bệnh COVID-19
                      <Field type="checkbox" name="contact" value="c2" /> Người từ nước có bệnh
                      COVID-19
                      <Field type="checkbox" name="contact" value="c3" /> Người có biểu hiện (Sốt,
                      ho, khó thở, viêm phổi)
                      <button type="submit">Submit</button>
                    </Form>
                  </div>
                  
                }
            </Formik>
        </>
    )
}