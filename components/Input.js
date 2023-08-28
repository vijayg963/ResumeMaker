import React from 'react'

export const Input = ({name,label ,type}) => {
  return (
    <div className={styles.formgroup}>
              <label htmlFor={name}>{label}</label>
              <input
                id={name}
                name={name}
                type="text"
                className="form-control"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && <p>{errors.name}</p>}
            </div>
  )
}
