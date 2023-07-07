import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function EnterNumberForm({ enteredPhone, setEnteredPhone, setNotifOpened }) {
  return (
    <div className="mt-8">
      <Formik initialValues={{ phone: enteredPhone }}>
        {({ values, isSubmitting }) => (
          <Form className="flex flex-col">
            <span className="w-full text-right mb-2 text-sm font-medium mine-text-light-blue mine-font-vazir pr-1">
              شماره خود را وارد کنید
            </span>
            <div className="bg-white shadow-lg flex rounded-lg px-3 items-center">
              <span className="py-2 mine-font-vazir">+98</span>
              <span className="mx-2 text-gray-300 mb-1">|</span>
              <Field
                className="rounded-sm bg-transparent outline-0 mine-font-vazir"
                type="text"
                name="phone"
                placeholder="9155633696"
              />
            </div>
            <ErrorMessage name="phone" component="div" />

            <button
              className="mine-bg-pink w-full mt-4 rounded-lg py-1.5"
              type="button"
              disabled={isSubmitting}
              onClick={() => {
                if (values.phone && values.phone !== "") {
                  setEnteredPhone(values.phone);
                  setNotifOpened(true);
                }
              }}
            >
              <span className="text-white mine-font-vazir">تایید</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EnterNumberForm;