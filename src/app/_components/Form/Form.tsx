'use client';

import CustomSelect from '@/components/CustomSelect';
import Input from '@/components/Input';
import { useFormik } from 'formik';
import { ActionMeta } from 'react-select';
import * as yup from 'yup';

type SelectOption = {
  label: string;
  value: string;
};

const countries = [
  { value: 'United States', label: 'United States' },
  { value: 'Canada', label: 'Canada' },
  { value: 'United Kingdom', label: 'United Kingdom' },
];

const cities = [
  { value: '1', label: 'New York' },
  { value: '2', label: 'Los Angeles' },
  { value: '3', label: 'Chicago' },
];

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  city: yup.object().required('City is required'),
  countries: yup
    .array()
    .min(1, 'Select at least one country')
    .required('Countries are required'),
});

const initialValues = {
  name: '',
  email: '',
  city: null,
  countries: [],
};

export const Form = () => {
  const { values, setFieldValue, touched, errors, handleSubmit } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (formValues) => {
      console.log('submitted values', formValues);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, e.target.value);
  };

  const handleSelectChange = (
    value: SelectOption,
    actionMeta: ActionMeta<SelectOption>
  ) => {
    setFieldValue(actionMeta.name!, value);
  };

  const handleMultiSelectChange = (
    value: SelectOption[],
    actionMeta: ActionMeta<SelectOption>
  ) => {
    setFieldValue(actionMeta.name!, value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex gap-5">
        <Input
          name="name"
          label="Name"
          value={values.name}
          onChange={handleInputChange}
          error={touched.name && errors.name ? errors.name : null}
        />

        <Input
          name="email"
          label="Email"
          value={values.email}
          onChange={handleInputChange}
          error={touched.email && errors.email ? errors.email : null}
        />
      </div>

      <CustomSelect
        name="city"
        value={values.city}
        onChange={(newValue, actionMeta) =>
          handleSelectChange(
            newValue as SelectOption,
            actionMeta as ActionMeta<SelectOption>
          )
        }
        options={cities}
        label="City"
        error={touched.city && errors.city ? errors.city : null}
      />

      <CustomSelect
        name="countries"
        value={values.countries}
        onChange={(newValue, actionMeta) =>
          handleMultiSelectChange(
            newValue as SelectOption[],
            actionMeta as ActionMeta<SelectOption>
          )
        }
        isMulti
        options={countries}
        label="Countries"
        error={
          touched.countries && typeof errors.countries === 'string'
            ? errors.countries
            : null
        }
      />

      <button
        type="submit"
        className="bg-sys-green-500 text-white px-4 py-2 rounded-sm hover:bg-sys-green transition-colors cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};
