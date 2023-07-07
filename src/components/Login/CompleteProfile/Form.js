import { Formik } from "formik";
import React, { useEffect, useState } from "react";

export default function Form({ setStep }) {
  const [provinces, setProvinces] = useState([
    { title: "خراسان رضوی", value: "3196u1386-326247-247427245gvr4626-24724b" },
    { title: "تهران", value: "3196u1386-326247-gdsgshsh2356-24724b" },
    { title: "اصفهان", value: "3196u1386-dgeqgeqwge-245gvr4626-24724b" },
    { title: "شیراز", value: "3196u1386-sgagageahgh12415-244626-24724b" },
  ]);
  // const getProvinces = async () => {};
  // useEffect(() => getProvinces(), []);

  const [cities, setCities] = useState([
    { title: "مشهد", value: "j6b2h4j-6b24jk64b2-2n624j6b-2424h34y4yu" },
  ]);
  // const getCities = async () => {};
  // useEffect(() => getCities(), [provinces]);

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", province: "", city: "" }}
      onSubmit={() => {}}
    >
      {({ handleBlur, handleChange, values, isSubmitting }) => (
        <div className="grid grid-cols-12 gap-2 mt-6">
          <div className="col-span-5">
            <div
              type="image"
              className="h-full relative mine-bg-cream-pink shadow-lg border-2 rounded-lg border-pink-200 flex flex-col items-center justify-center"
            >
              <input
                className="absolute h-full w-full opacity-0 cursor-pointer"
                type="file"
              />
              <img
                className="w-10 h-10"
                src={require("../../../Images/Login/profile.png")}
              />
              <span className="mine-font-vazir text-xs mine-text-blue-dark text-center mt-1">
                انتخاب عکس پروفایل
              </span>
            </div>
          </div>
          <div className="col-span-7 flex flex-col">
            <input
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              placeholder="نام"
              className="outline-none mine-bg-cream-pink shadow-lg border-2 rounded-lg border-pink-200 text-center mine-font-vazir mine-text-blue-dark text-sm py-2"
            />
            <input
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              placeholder="نام خانوادگی"
              className="outline-none mine-bg-cream-pink shadow-lg border-2 rounded-lg border-pink-200 text-center mine-font-vazir mine-text-blue-dark text-sm py-2 mt-2"
            />
          </div>

          <select
            name="city"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.city}
            disabled={!provinces || provinces.length === 0}
            className="col-span-6 outline-none mine-bg-cream-pink shadow-lg border-2 rounded-lg border-pink-200 text-center mine-font-vazir mine-text-blue-dark text-sm py-2"
          >
            {cities.map((e, index) => (
              <option
                key={index}
                className="mine-font-vazir mine-text-blue-dark"
                label={e.title}
                value={e.value}
              />
            ))}
          </select>
          <select
            name="province"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.province}
            className="col-span-6 outline-none mine-bg-cream-pink shadow-lg border-2 rounded-lg border-pink-200 text-center mine-font-vazir mine-text-blue-dark text-sm py-2"
          >
            {provinces.map((e, index) => (
              <option
                key={index}
                className="mine-font-vazir mine-text-blue-dark"
                label={e.title}
                value={e.value}
              />
            ))}
          </select>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mine-bg-pink w-full mt-2 rounded-lg py-1.5 col-span-12"
          >
            <span className="text-white mine-font-vazir">تایید</span>
          </button>
        </div>
      )}
    </Formik>
  );
}
