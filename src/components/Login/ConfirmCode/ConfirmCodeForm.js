import React, { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function ConfirmCodeForm({ setStep, setEnteredCode, timer }) {
  const { seconds, minutes, start } = timer;

  const code1Ref = useRef(null);
  const code2Ref = useRef(null);
  const code3Ref = useRef(null);
  const code4Ref = useRef(null);

  useEffect(() => {
    start();
  });

  return (
    <div className="mt-8">
      <Formik
        initialValues={{ code1: "", code2: "", code3: "", code4: "" }}
        onSubmit={(values) => {
          setEnteredCode(
            values.code1 + values.code2 + values.code3 + values.code4
          );
          setStep("choose-type");
        }}
      >
        {({ handleBlur, handleChange, values, isSubmitting }) => (
          <Form className="flex flex-col">
            <span className="w-full text-right mb-2 text-sm font-medium mine-text-light-blue mine-font-vazir pr-1">
              کد تایید ارسال شده را وارد کنید
            </span>
            <div className="flex justify-center space-x-2">
              <input
                className="bg-white mine-font-vazir shadow-lg w-9 text-center flex rounded-lg px-3 py-2 items-center outline-0"
                type="text"
                name="code1"
                ref={code1Ref}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value !== "") {
                    code2Ref.current.focus();
                  }
                }}
                value={values.code1}
                maxLength={2}
              />
              <input
                className="bg-white mine-font-vazir shadow-lg w-9 text-center flex rounded-lg px-3 py-2 items-center outline-0"
                type="text"
                name="code2"
                ref={code2Ref}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value !== "") {
                    code3Ref.current.focus();
                  }
                }}
                value={values.code2}
                maxLength={1}
              />
              <input
                className="bg-white mine-font-vazir shadow-lg w-9 text-center flex rounded-lg px-3 py-2 items-center outline-0"
                type="text"
                name="code3"
                ref={code3Ref}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value !== "") {
                    code4Ref.current.focus();
                  }
                }}
                value={values.code3}
                maxLength={1}
              />
              <input
                className="bg-white mine-font-vazir shadow-lg w-9 text-center flex rounded-lg px-3 py-2 items-center outline-0"
                type="text"
                name="code4"
                ref={code4Ref}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                }}
                value={values.code4}
                maxLength={1}
              />
            </div>
            <ErrorMessage name="code" component="div" />

            <button
              className="mine-bg-pink w-full mt-4 rounded-lg py-1.5"
              type="submit"
            >
              <span className="text-white mine-font-vazir">تایید</span>
            </button>
            <div className="mt-2 flex justify-center">
              <img
                className="w-5 mr-1"
                src={require("../../../Images/Login/confirm-code.png")}
              />
              <div className="mine-font-vazir w-10">
                <span className="">{"0" + minutes}</span>
                <span className="">:</span>
                <span className="">{seconds == 0 ? "00" : seconds}</span>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ConfirmCodeForm;
