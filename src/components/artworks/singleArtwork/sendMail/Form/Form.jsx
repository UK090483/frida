import React from "react"
import style from "./form.module.scss"
import useMouse from "../../../../Mouse/hooks/useMouse"

import { motion, AnimatePresence } from "framer-motion"

export default function Form({ show, register, errors, trigger }) {
  const { setMouse } = useMouse()

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, height: 0, opacity: 0 }}
          animate={{ scale: 1, height: 160, opacity: 1 }}
          exit={{ scale: 0, height: 0, opacity: 0 }}
        >
          <div className={style.inputWrap}>
            <input
              ref={register({
                required: true,
              })}
              required
              onChange={() => {
                if (errors.name) {
                  trigger("name")
                }
              }}
              type="input"
              className={style.form__field}
              name="name"
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
            />
            <label htmlFor="name" className={style.form__label}>
              Name
            </label>
            <p className={style.error}>{errors.name && "required"}</p>
          </div>
          <div className={style.inputWrap}>
            <input
              ref={register({
                required: true,
                pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
              })}
              onChange={() => {
                if (errors.email) {
                  trigger("email")
                }
              }}
              type="input"
              required
              className={style.form__field}
              placeholder="Email"
              name="email"
              onMouseEnter={() => {
                setMouse("link", true)
              }}
              onMouseLeave={() => {
                setMouse("link", false)
              }}
            />
            <label htmlFor="email" className={style.form__label}>
              Email
            </label>
            <p className={style.error}>
              {errors.email &&
                (errors.email.type === "pattern"
                  ? "Da stimmt was nicht mit der Email Adresse"
                  : "required")}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
